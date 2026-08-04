import { useRef, useState } from "react";
import { CheckIcon, PencilIcon, TrashIcon } from "../../common/icons";

function TodoListItem({ id, status, content, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(content);
  // Escape 取消時輸入框會被卸載，blur 可能仍然觸發，用旗標擋掉那次提交。
  const cancelled = useRef(false);

  const startEdit = () => {
    cancelled.current = false;
    setDraft(content);
    setIsEditing(true);
  };

  const commit = () => {
    if (cancelled.current) return;
    const next = draft.trim();
    if (!next || next === content) {
      setIsEditing(false);
      return;
    }
    onEdit({ id, content: next }, { onSuccess: () => setIsEditing(false) });
  };

  const cancel = () => {
    cancelled.current = true;
    setIsEditing(false);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") commit();
    if (event.key === "Escape") cancel();
  };

  return (
    <li
      data-id={id}
      className="group grid grid-cols-[20px_1fr_auto] items-center gap-3.5 border-b border-ink/8 px-4 py-3 last:border-b-0 hover:bg-ink/4"
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={!!status}
        aria-label={content}
        onClick={() => onToggle(id)}
        className={`grid size-5 cursor-pointer place-items-center rounded-[3px] border ${
          status
            ? "border-accent-600 bg-accent-600 text-paper"
            : "border-ink/40 hover:border-accent-600 hover:bg-accent-100"
        }`}
      >
        <CheckIcon />
      </button>

      {isEditing ? (
        <input
          autoFocus
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={onKeyDown}
          onBlur={commit}
          aria-label="編輯任務"
          className="h-[30px] w-full rounded-card border border-line bg-transparent px-2 text-sm outline-none hover:border-ink/30 focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
        />
      ) : (
        <div className={`text-base ${status ? "line-through opacity-45" : ""}`}>{content}</div>
      )}

      <div className="flex items-center gap-0.5 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 max-lg:opacity-100">
        <button
          type="button"
          onClick={startEdit}
          aria-label="編輯"
          className="grid size-7 cursor-pointer place-items-center rounded-card text-accent-700 hover:bg-accent-100 active:bg-accent-200"
        >
          <PencilIcon />
        </button>
        <button
          type="button"
          onClick={() => onDelete(id)}
          aria-label="刪除"
          className="grid size-7 cursor-pointer place-items-center rounded-card text-danger-600 hover:bg-danger-100"
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
