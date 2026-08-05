function FilterTodoBtn({ name, dataTab, isSelected, onFilter }) {
  return (
    <button
      type="button"
      data-tab={dataTab}
      onClick={() => onFilter(dataTab)}
      className={`font-heading rounded-card border px-3 py-1.5 text-help font-semibold tracking-[0.02em] ${
        isSelected
          ? "border-accent-600 bg-accent-600 text-paper"
          : "border-line hover:border-accent-600 hover:bg-accent-100 active:bg-accent-200"
      }`}
    >
      {name}
    </button>
  );
}

export default FilterTodoBtn;
