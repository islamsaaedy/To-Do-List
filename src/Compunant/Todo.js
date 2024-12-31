import React from "react";
import FeatherIcon from "feather-icons-react";

const Todo = ({ todo, toogel, delelt, edit, mode }) => {
  return (
    <div className={`Todo ${todo.done ? "doen" : ""}`}>
      <div className="todo-icon" onClick={() => toogel(todo.id)}>
        <FeatherIcon icon={todo.done ? "check-circle" : "circle"} />
      </div>
      <div className="todo-text">{todo.name}</div>
      {mode !== "edit" && (
        <div className="todo-Button">
          <div className="todo-Button Del" onClick={() => delelt(todo.id)}>
            <FeatherIcon icon="trash-2" />
          </div>
          <div className="todo-Button Edit">
            <FeatherIcon icon="edit" onClick={() => edit(todo)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
