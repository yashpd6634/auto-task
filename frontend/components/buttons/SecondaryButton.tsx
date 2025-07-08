import { ReactNode } from "react";

export const SecondaryButton = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "small" | "big";
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        size === "small" ? "text-sm px-8 pt-2" : "text-xl px-10 py-4"
      } border text-black rounded-full hover:shoadow-md cursor-pointer`}
    >
      {children}
    </div>
  );
};
