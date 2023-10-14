const CompletedTodoList = ({ todos, remove }) => {
  return (
    <>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div key={crypto.randomUUID()} className="todo">
              <li key={index}>{todo.description}</li>
              <button className="delete-button" onClick={() => remove(todo)}><i className="fa-solid fa-trash"></i></button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">No tasks found</div>
      )}
    </>
  );
}

export default CompletedTodoList;