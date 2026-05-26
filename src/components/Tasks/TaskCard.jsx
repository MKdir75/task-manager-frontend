import React from "react";

const TaskCard = ({ task, onDrag }) => {
  return (
    <div
      draggable
      onDragEnd={() => onDrag(task._id, task.status)}
      className="bg-white p-3 rounded shadow mb-2 cursor-move"
    >
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
    </div>
  );
};

export default TaskCard;
