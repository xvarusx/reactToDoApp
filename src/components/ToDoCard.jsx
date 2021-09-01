import React from "react";

const ToDoCard = ({ task, del, comp }) => {
  console.log("the task", task, del, comp);
  return (
    <div>
      <h2 id={task.isDone ? "completed" : ""}>{task.action}</h2>
      <button onClick={() => del(task.id)}>Delete</button>
      <button onClick={() => comp(task.id)}>Complete</button>
    </div>
  );
};
export default ToDoCard;
