import React from "react";
import TaskCard from "./TaskCard";

const TaskBoard = ({ tasks, onDrag }) => {
  const statuses = ["To-do", "In Progress", "Done"];

  return (
    <div className="grid grid-cols-3 gap-4">
      {statuses.map((status) => (
        <div key={status} className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">{status}</h2>
          {tasks.filter((t) => t.status === status).map((task) => (
            <TaskCard key={task._id} task={task} onDrag={onDrag} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
