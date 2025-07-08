export const CheckFeature = ({ label }: { label: string }) => {
  return (
    <div className="flex ">
      <div className="pr-4">
        <CheckMark />
      </div>
      {label}
    </div>
  );
};

function CheckMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-circle-check-icon lucide-circle-check"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
