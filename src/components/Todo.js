import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const Todo = ({ deleteHandler, editHandler, text }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={editHandler} />
        <AiFillDelete className="icon" onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default Todo;
