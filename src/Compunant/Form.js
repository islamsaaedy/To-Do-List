import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
const Form = ({ Additem, fillter, mode, active }) => {
  const DufName = mode === "edit" ? active.name : "";

  const [name, SetNaem] = useState(DufName);

  const handetName = (e) => {
    SetNaem(e.target.value);
  };

  const handelAdditem = () => {
    if (!name.trim()) {
      return;
    }
    Additem(name);
    SetNaem("");
  };

  return (
    <div className="from">
      <div className="icon">
        <FeatherIcon icon="circle" onClick={fillter} />
      </div>
      <div className="todo-form">
        <input
          type="text"
          name="Add"
          id="Add"
          value={name}
          onChange={handetName}
          placeholder="Add New item"
        />
      </div>
      <div className="Button">
        <button disabled={!name.trim()} className="Btn" onClick={handelAdditem}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
