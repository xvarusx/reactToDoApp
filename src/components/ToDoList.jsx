import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = ({ list, del, comp }) => {
  console.log(list);
  return (
    <div>
      {list.map((el) => (
        <ToDoCard del={del} comp={comp} task={el} />
      ))}
    </div>
  );
};
export default ToDoList;
