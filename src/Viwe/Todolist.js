import React, { useState } from "react";
import Body from "../Compunant/BodyList";
import Form from "../Compunant/Form";

const inData = [
  { id: 1, name: "item 1", done: true },
  { id: 2, name: "item 2", done: false },
  { id: 3, name: "item 3", done: true },
  { id: 4, name: "item 3", done: true },
];

const Todolist = () => {
  const [toDos, setToDos] = useState(inData);
  const [mode, setMode] = useState("add");
  const [active, setactive] = useState(null);

  const toogel = (id) => {
    setToDos((data) => {
      const newData = data.map((td) => {
        if (td.id === id) {
          // td.done = !td.done;
          return { ...td, done: !td.done };
        }
        return td;
      });
      return newData;
    });
  };
  const delelt = (id) => {
    setToDos((data) => {
      const newData = data.filter((td) => td.id !== id);
      return newData;
    });
  };

  const Additem = (name) => {
    const newName = {
      id: new Date().getTime(),
      name,
      done: false,
    };
    setToDos((data) => {
      return [newName, ...data];
    });
  };

  const fillter = () => {
    if (mode === "fillter") {
      setMode("add");
    } else {
      setMode("fillter");
    }
  };
  let current = [...toDos];
  if (mode === "fillter") {
    current = toDos.filter((t) => !t.done);
  }

  const edit = (todo) => {
    setMode("edit");
    setactive(todo);
  };

  if (mode === "edit") {
    current = [active];
  }

  return (
    <div className="container">
      <div className="Todos">
        <Form Additem={Additem} fillter={fillter} mode={mode} active={active} />
        <Body
          toDos={current}
          toogel={toogel}
          delelt={delelt}
          edit={edit}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default Todolist;
