function DisplayTodo({ content }) {
  return (
    <span className="text-lg transition-all duration-[400ms] peer-checked:line-through peer-checked:opacity-45">
      { content }
    </span>
  )
};

export default DisplayTodo;
