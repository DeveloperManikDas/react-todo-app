import React from "react";
import { Todo } from "./Todo.jsx";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../assets/main.css";
export const Main = () => {
  return (
    <main>
      <div className="date-stripe">
        <FaCaretLeft className="date-vavigation-icon" />
        <h2>Today</h2>
        <FaCaretRight className="date-vavigation-icon" />
      </div>
      <div className="tasks">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
      <div className="add">
      <span>Add New</span>
      <IoMdAddCircleOutline className="add-icon"/>
      </div>
    </main>
  );
};
