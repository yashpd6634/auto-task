"use client";
import { DarkButton } from "@/components/buttons/DarkButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { LinkButton } from "@/components/buttons/LinkButton";
import { useRouter } from "next/navigation";

interface AutoTask {
  id: string;
  userId: string;
  name: string;
  description: string;
  actions: Array<{
    id: string;
    autoId: string;
    availableActionId: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
    };
  }>;
  trigger: {
    id: string;
    autoId: string;
    availableTriggerId: string;
    type: {
      id: string;
      name: string;
    };
  };
}

function useAutoTasks() {
  const [loading, setLoading] = useState(true);
  const [autoTasks, setAutoTasks] = useState<AutoTask[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/autoTask`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        setAutoTasks(res.data.autoTasks);
        setLoading(false);
      });
  }, []);

  return { loading, autoTasks };
}

export default function Dashboard() {
  // const { loading, autoTasks } = useAutoTasks();

  const loading = false;
  const autoTasks: AutoTask[] = [
    {
      id: "1",
      userId: "user1",
      name: "Test Task",
      description: "This is a test task",
      actions: [
        {
          id: "action1",
          autoId: "1",
          availableActionId: "actionType1",
          sortingOrder: 0,
          type: {
            id: "type1",
            name: "Mail",
          },
        },
        {
          id: "action2",
          autoId: "1",
          availableActionId: "actionType2",
          sortingOrder: 1,
          type: {
            id: "type2",
            name: "Payment",
          },
        },
      ],
      trigger: {
        id: "trigger1",
        autoId: "1",
        availableTriggerId: "triggerType1",
        type: {
          id: "type1",
          name: "Webhook",
        },
      },
    },
  ];

  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center pt-8">
        <div className="flex justify-between pr-8 max-w-screen-lg w-full">
          <div className="text-2xl font-bold">My Auto-Tasks</div>
          <DarkButton
            onClick={() => {
              router.push(`/autoTask/create`);
            }}
          >
            Create
          </DarkButton>
        </div>
      </div>
      {loading ? "Loading..." : <AutoTaskTable autoTasks={autoTasks} />}
    </div>
  );
}

function AutoTaskTable({ autoTasks }: { autoTasks: AutoTask[] }) {
  const router = useRouter();
  return (
    <div className="mt-8 p-8 flex justify-center">
      <table className="table-auto border-collapse w-full max-w-5xl">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Last Edit</th>
            <th className="px-4 py-2 text-left">Running</th>
            <th className="px-4 py-2 text-left">Go</th>
          </tr>
        </thead>
        <tbody>
          {autoTasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50 border-b py-4">
              <td className="px-4 py-2">
                {task.trigger.type.name}{" "}
                {task.actions.map((action) => (
                  <span key={action.id} className="pr-1">
                    {action.type.name}
                  </span>
                ))}
              </td>
              <td className="px-4 py-2">{task.description}</td>
              <td className="px-4 py-2">Nov 13, 2024</td>
              <td className="px-4 py-2">
                <LinkButton
                  onClick={() => {
                    router.push(`/autoTask/${task.id}`);
                  }}
                >
                  Go
                </LinkButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
