import BlueprintMarks from "./BlueprintMarks";

/** 主要按鈕 —— 全站唯一的實心物件，四角一定帶註冊標記。 */
function PrimaryButton({ className = "", children, ...props }) {
  return (
    <button
      className={`font-heading relative inline-flex h-10 items-center justify-center gap-1.5 rounded-card border border-accent-600 bg-accent-600 px-5 text-sm font-semibold tracking-[0.02em] text-paper hover:border-accent-700 hover:bg-accent-700 active:border-accent-800 active:bg-accent-800 disabled:cursor-not-allowed disabled:opacity-45 ${className}`}
      {...props}
    >
      <BlueprintMarks />
      {children}
    </button>
  );
}

export default PrimaryButton;
