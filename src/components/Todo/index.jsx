import { useState } from "react";
import Sidebar from "./Sidebar";
import StatsBar from "./StatsBar";
import AddTodoForm from "./AddTodoForm";
import FilterTodoBtn from "./FilterBtn";
import TodoListItem from "./TodoListItem";
import { AlertIcon } from "../../common/icons";
import { useTodos } from "../../hooks/useTodos";
import { filterTabs } from "./data";

function Todolist() {
  const [filter, setFilter] = useState("all");

  const {
    todos,
    isAdding,
    errorLog,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
    clearCompleted,
  } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "pending":
        return !todo.status;
      case "completed":
        return todo.status;
      default:
        return true;
    }
  });

  const doneCount = todos.filter((todo) => todo.status).length;

  return (
    <section id="todoListPage" className="grid min-h-screen lg:grid-cols-[236px_1fr]">
      <Sidebar />

      <main className="px-6 pt-6.5 pb-10 lg:px-8">
        <div className="flex flex-wrap items-end gap-4">
          <h2 className="font-heading text-[36px] leading-[1.1] font-semibold">今日待辦</h2>
          <div className="ml-auto flex gap-2">
            {filterTabs.map((filterTab) => (
              <FilterTodoBtn
                key={filterTab.dataTab}
                {...filterTab}
                isSelected={filter === filterTab.dataTab}
                onFilter={setFilter}
              />
            ))}
          </div>
        </div>

        <StatsBar
          total={todos.length}
          activeCount={todos.length - doneCount}
          doneCount={doneCount}
          onClear={() => clearCompleted()}
          disabled={doneCount === 0}
        />

        <div className="mt-5.5">
          <AddTodoForm onAdd={addTodo} isAdding={isAdding} />
        </div>

        {errorLog.length > 0 && (
          <ul className="mt-4.5 flex flex-col gap-1.5 rounded-card border border-danger-600 bg-danger-100 px-4 py-3">
            {errorLog.map((message, index) => (
              <li key={index} className="flex items-center gap-1.5 text-xs text-danger-700">
                <AlertIcon size={13} />
                {message}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4.5 overflow-hidden rounded-card border border-line">
          {filteredTodos.length === 0 ? (
            <p className="p-9 text-center text-[13px] opacity-50">這個篩選下沒有任務。</p>
          ) : (
            <ul>
              {filteredTodos.map((todo) => (
                <TodoListItem
                  key={todo.id}
                  {...todo}
                  onDelete={removeTodo}
                  onToggle={toggleTodo}
                  onEdit={editTodo}
                />
              ))}
            </ul>
          )}
        </div>
      </main>
    </section>
  );
}

export default Todolist;
