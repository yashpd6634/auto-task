"use client";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { Feature } from "./Feature";

export const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-5xl font-semibold text-center pt-8 max-w-xl">
          Automate as fast as you can type
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <div className="text-xl font-normal text-center pt-8 max-w-3xl">
          AI gives you automation superpowers, and Zapier puts them to work.
          Paring AI and Zapier help you turn ideas into workflows and bots that
          work for you.
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <PrimaryButton
          onClick={() => {
            router.push("/signup");
          }}
          size="big"
        >
          Get Started Free
        </PrimaryButton>
        <div className="pl-4">
          <SecondaryButton onClick={() => {}} size="big">
            Contact Sales
          </SecondaryButton>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <Feature title={"Free Forever"} subtitle={"for core features"} />
        <Feature title={"More Apps"} subtitle={"than any other platform"} />
        <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
      </div>
    </div>
  );
};
