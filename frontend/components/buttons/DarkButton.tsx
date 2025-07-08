import { ReactNode } from "react";

export const DarkButton = ({
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
        size === "small" ? "text-md px-4 py-2" : "text-xl px-6 py-4"
      } font-semibold flex flex-col justify-center bg-purple-800 text-white rounded hover:shoadow-md cursor-pointer text-center`}
    >
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-plus-icon lucide-plus mr-1"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        {children}
      </div>
    </div>
  );
};
