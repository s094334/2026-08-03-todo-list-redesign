import { TrashIcon } from "../../common/icons";

function Stat({ label, value, accent }) {
  return (
    <div className="bg-paper px-4 py-3.5">
      <div className="text-[10px] tracking-[0.12em] uppercase opacity-55">{label}</div>
      <div className={`font-heading text-3xl leading-[1.1] ${accent ? "text-accent-700" : ""}`}>
        {value}
      </div>
    </div>
  );
}

function StatsBar({ total, activeCount, doneCount, onClear, disabled }) {
  return (
    <div className="mt-5.5 grid grid-cols-[repeat(3,1fr)_76px] gap-px overflow-hidden rounded-card border border-line bg-line">
      <Stat label="全部" value={total} />
      <Stat label="進行中" value={activeCount} />
      <Stat label="已完成" value={doneCount} accent />
      <button
        type="button"
        onClick={onClear}
        disabled={disabled}
        aria-label="清除已完成項目"
        title="清除已完成項目"
        className="grid cursor-pointer place-items-center gap-[5px] bg-paper py-3.5 text-ink hover:bg-accent-100 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-paper disabled:hover:text-ink"
      >
        <TrashIcon size={20} />
        <span className="text-[10px] tracking-[0.12em] uppercase opacity-70">清除已完成</span>
      </button>
    </div>
  );
}

export default StatsBar;
