import { ReactNode } from "react";

export const PrimaryButton = ({
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
        size === "small" ? "text-sm px-8 py-2" : "text-xl px-10 py-4"
      } bg-amber-700 text-white rounded-full hover:shoadow-md cursor-pointer text-center`}
    >
      {children}
    </div>
  );
};
