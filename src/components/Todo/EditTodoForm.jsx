import { useForm } from "react-hook-form";

function EditTodoForm ({ content, onSubmit }) {
  const {
    register,
    handleSubmit
  } = useForm()

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      <label htmlFor="newContent"></label>
      <input
        autoFocus
        className="h-[30px] w-full rounded-card border border-line bg-transparent px-2 text-sm outline-none hover:border-ink/30 focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
        defaultValue={ content }
        { ...register("newContent") }
        onBlur={ handleSubmit(onSubmit) }/>
    </form>
    )
};

export default EditTodoForm;
