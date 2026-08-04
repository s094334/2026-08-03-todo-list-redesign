import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import DisplayTodo from "./DisplayTodo";
import { CheckIcon, PencilIcon, TrashIcon } from "../../common/icons";

function TodoListItem({ id, status, content, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const checkboxId = `todo-${id}`;

  const onSubmit = (data) => {
    onEdit(
      { id, content: data.newContent },
      { onSuccess: () => setIsEditing(false) }
    );
  }

  return (
    <li
      data-id={id}
      className="group relative grid grid-cols-[20px_1fr_auto] items-center gap-3.5 border-b border-ink/8 px-4 py-3 last:border-b-0 hover:bg-ink/4"
    >
      <input
        id={checkboxId}
        type="checkbox"
        checked={status}
        onChange={() => onToggle(id)}
        className="peer size-5 cursor-pointer appearance-none rounded-[3px] border border-ink/40 checked:border-accent-600 checked:bg-accent-600 not-checked:hover:border-accent-600 not-checked:hover:bg-accent-100"
      />
      <span className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-paper opacity-0 peer-checked:opacity-100">
        <CheckIcon />
      </span>

      { isEditing ? <EditTodoForm content={content} onSubmit={ onSubmit } /> : <DisplayTodo content={content} /> }

      <div className="flex items-center gap-0.5 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 max-lg:opacity-100">
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="grid size-7 cursor-pointer place-items-center rounded-card text-accent-700 hover:bg-accent-100 active:bg-accent-200"
        >
          <PencilIcon />
        </button>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="grid size-7 cursor-pointer place-items-center rounded-card text-danger-600 hover:bg-danger-100"
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  )
};

export default TodoListItem;
