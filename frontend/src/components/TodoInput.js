const TodoInput = ({ todo, setTodo, addTodo }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      addTodo(); 
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={todo}
        name="todo"
        placeholer="Create a new todo"
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={addTodo}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInput;
