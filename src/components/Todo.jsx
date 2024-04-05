import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import "../assets/todo.css";

export const Todo = () => {
  return (
    <div className="todo">
     
      <div className="todo-name">
      <FaRegCheckCircle />
        <p className="todo-title">1. This is the task reflecting there.</p>
      </div>

      <div className="action">
      <div className="todo-time">
        <IoIosTime className="time-logo" />
        <span className="time-label">4:30PM</span>
      </div>
      <div className="delete" >
        <MdDelete className="delete-icon" />
      </div>
      </div>
    </div>
  );
};
