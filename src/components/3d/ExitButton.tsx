"use client";

type ExitButtonProps = {
  onClick: () => void;
};


export function ExitButton({ onClick }: ExitButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Exit zoomed view"
      className="absolute right-6 top-20 z-50 text-xs cursor-pointer text-center px-4 py-2 border border-primary rounded-xl bg-transparent text-white font-semibold transition-all hover:bg-primary"
    >
      EXIT
    </button>
  );
}
