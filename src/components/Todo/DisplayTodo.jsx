function DisplayTodo({ content, htmlFor }) {
  return (
    <label
      htmlFor={ htmlFor }
      className="cursor-pointer text-base transition-all duration-[400ms] peer-checked:line-through peer-checked:opacity-45"
    >
      { content }
    </label>
  )
};

export default DisplayTodo;
