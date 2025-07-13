"use client";

import { BACKEND_URL } from "@/app/config";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { Input } from "@/components/Input";
import { ZapCell } from "@/components/ZapCell";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function useAvailableActionsAndTrigger() {
  const [availableActions, setAvailableActions] = useState([]);
  const [availableTriggers, setAvailableTriggers] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/trigger/available`)
      .then((x) => setAvailableTriggers(x.data.availableTriggers));

    axios
      .get(`${BACKEND_URL}/api/v1/action/available`)
      .then((x) => setAvailableActions(x.data.availableActions));
  }, []);

  return {
    availableTriggers,
    availableActions,
  };
}

export default function CreateAutoTaskPage() {
  const router = useRouter();
  const [selectedModalIndex, setSelectedModalIndex] = useState<null | number>(
    null
  );
  const { availableActions, availableTriggers } =
    useAvailableActionsAndTrigger();
  const [selectedTrigger, setSelectedTrigger] = useState<{
    id: string;
    name: string;
  }>();
  const [selectedActions, setSelectedActions] = useState<
    {
      index: number;
      availableActionId: string;
      availableActionName: string;
      metadata: any;
    }[]
  >([]);

  const [autoTaskName, setAutoTaskName] = useState("");
  const [autoTaskDescription, setAutoTaskDescription] = useState("");

  return (
    <div>
      <div className="flex justify-end bg-slate-200 p-4">
        <PrimaryButton
          onClick={async () => {
            if (!selectedTrigger?.id) {
              return;
            }
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/autoTask`,
              {
                name: autoTaskName,
                description: autoTaskDescription,
                trigger: {
                  availableTriggerId: selectedTrigger.id,
                  triggerMetadata: {},
                },
                actions: selectedActions.map((a) => ({
                  availableActionId: a.availableActionId,
                  actionMetadata: a.metadata,
                })),
              },
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              }
            );

            if (response.status === 200 || response.status === 201)
              router.push("/dashboard");
          }}
        >
          Publish
        </PrimaryButton>
      </div>
      <div className="flex justify-center bg-slate-200 pt-5 text-2xl">
        <div className="flex flex-col">
          <span className="pb-5 text-4xl">AutoTask Details</span>
          <Input
            label="Name"
            placeholder="Name"
            onChange={(e) => setAutoTaskName(e.target.value)}
          />
          <Input
            label="Description"
            placeholder="Description"
            onChange={(e) => setAutoTaskDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full min-h-screen bg-slate-200 flex flex-col pt-20">
        <div className="flex justify-center w-full">
          <ZapCell
            name={selectedTrigger?.name ? selectedTrigger.name : "Trigger"}
            index={1}
            onClick={() => setSelectedModalIndex(1)}
          />
        </div>
        <div className="w-full py-2">
          {selectedActions.map((action, index) => (
            <div className="flex justify-center pt-2">
              <ZapCell
                name={
                  action.availableActionName
                    ? action.availableActionName
                    : "Action"
                }
                index={action.index}
                onClick={() => setSelectedModalIndex(action.index)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton
            onClick={() => {
              setSelectedActions((a) => [
                ...a,
                {
                  index: a.length + 2,
                  availableActionId: "",
                  availableActionName: "",
                  metadata: {},
                },
              ]);
            }}
          >
            <div className="text-2xl w-4">+</div>
          </PrimaryButton>
        </div>
        {selectedModalIndex && (
          <Modal
            availableItems={
              selectedModalIndex === 1 ? availableTriggers : availableActions
            }
            onSelect={(
              props: null | { name: string; id: string; metadata: any }
            ) => {
              if (props === null) {
                setSelectedModalIndex(null);
                return;
              }

              if (selectedModalIndex === 1) {
                setSelectedTrigger({
                  id: props.id,
                  name: props.name,
                });
                setSelectedModalIndex(null);
              } else {
                setSelectedActions((a) => {
                  let newActions = [...a];
                  newActions[selectedModalIndex - 2] = {
                    index: selectedModalIndex,
                    availableActionId: props.id,
                    availableActionName: props.name,
                    metadata: props.metadata,
                  };
                  return newActions;
                });
                setSelectedModalIndex(null);
              }
            }}
            index={selectedModalIndex}
          />
        )}
      </div>
    </div>
  );
}

function Modal({
  index,
  onSelect,
  availableItems,
}: {
  index: number;
  onSelect: (props: null | { name: string; id: string; metadata: any }) => void;
  availableItems: { id: string; name: string; image: string }[];
}) {
  const [step, setStep] = useState(0);
  const [selectedAction, setSelectedAction] = useState<{
    id: string;
    name: string;
  }>();
  const isTrigger = index === 1;

  return (
    <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-100/75 flex">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <div className="text-xl">
              Select {isTrigger ? "Trigger" : "Action"}
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              onClick={() => {
                onSelect(null);
              }}
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          {step === 1 && selectedAction?.id === "email" && (
            <EmailSelector
              setMetadata={(metadata) => {
                onSelect({
                  ...selectedAction,
                  metadata,
                });
              }}
            />
          )}
          {step === 1 && selectedAction?.id === "whatsapp" && (
            <SolanaSelector
              setMetadata={(metadata) => {
                onSelect({
                  ...selectedAction,
                  metadata,
                });
              }}
            />
          )}
          {step === 0 && (
            <div className="p-4 md:p-5 space-y-4">
              {availableItems.map(({ id, name, image }) => {
                return (
                  <div
                    onClick={() => {
                      if (isTrigger) {
                        onSelect({ id, name, metadata: {} });
                      } else {
                        setStep((s) => s + 1);
                        setSelectedAction({
                          id,
                          name,
                        });
                      }
                    }}
                    className="flex border p-4 cursor-pointer hover:bg-slate-100"
                  >
                    <img src={image} width={30} className="rounded-full" />{" "}
                    <div className="flex flex-col justify-center"> {name} </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EmailSelector({
  setMetadata,
}: {
  setMetadata: (params: any) => void;
}) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="p-4">
      <Input
        label="To"
        type="text"
        placeholder="To"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        label="Subject"
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
      ></Input>
      <Input
        label="Body"
        type="text"
        placeholder="Body"
        onChange={(e) => setBody(e.target.value)}
      ></Input>
      <div className="pt-4">
        <PrimaryButton
          onClick={() => {
            setMetadata({
              email,
              subject,
              body,
            });
          }}
        >
          Submit
        </PrimaryButton>
      </div>
    </div>
  );
}

function SolanaSelector({
  setMetadata,
}: {
  setMetadata: (params: any) => void;
}) {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <Input
        label="To"
        type="text"
        placeholder="To"
        onChange={(e) => setAddress(e.target.value)}
      ></Input>
      <Input
        label="Amount"
        type="text"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      ></Input>
      <div className="pt-4">
        <PrimaryButton
          onClick={() => {
            setMetadata({
              amount,
              address,
            });
          }}
        >
          Submit
        </PrimaryButton>
      </div>
    </div>
  );
}
