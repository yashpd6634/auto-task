"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center">
      <div className="flex pt-8 max-w-5xl">
        <div className="flex-1 pt-20 px-4">
          <div className="font-semibold text-3xl pb-4">
            Join millions worldwide who automate their work using Auto-Task
          </div>
          <div className="pb-6 pt-4">
            <CheckFeature label={"Easy setup, no coding required"} />
          </div>
          <div className="pb-6">
            <CheckFeature label={"Free forever for core features"} />
          </div>
          <div className="pb-6">
            <CheckFeature label={"14-day trial of premium features & apps"} />
          </div>
        </div>
        <div className="flex-1 pt-6 pb-6 mt-12 border border-gray-300 rounded px-4">
          <Input
            label={"Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
          ></Input>
          <Input
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
          ></Input>
          <div className="pt-4">
            <PrimaryButton
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/user/signin`,
                  {
                    username: email,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                router.push("/dashboard");
              }}
              size="big"
            >
              Login
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
