import { useForm } from "react-hook-form";
import PrimaryButton from "../../common/PrimaryButton";
import { PlusIcon } from "../../common/icons";

function AddTodoForm({ onAdd, isAdding }) {
  const { register, handleSubmit, reset, watch } = useForm();

  const content = watch("content");

  const onSubmit = (data) => {
    onAdd(data.content, { onSuccess: () => reset() });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input
        type="text"
        placeholder="新增任務，按 Enter 送出"
        className="h-10 flex-1 rounded-card border border-line bg-transparent px-3 text-sm outline-none placeholder:text-ink/40 hover:border-ink/30 focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
        {...register("content")}
      />
      <PrimaryButton type="submit" disabled={isAdding || !content?.trim()}>
        <PlusIcon />
        新增
      </PrimaryButton>
    </form>
  );
}

export default AddTodoForm;
