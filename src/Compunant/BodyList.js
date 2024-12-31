import React from "react";
import Todo from "./Todo";
const BodyList = (props) => {
  return (
    <div className="List">
      {props.toDos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          toogel={props.toogel}
          delelt={props.delelt}
          edit={props.edit}
          mode={props.mode}
        />
      ))}
    </div>
  );
};

export default BodyList;
