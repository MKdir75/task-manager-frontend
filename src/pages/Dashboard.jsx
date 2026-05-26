import React from "react";
import TaskBoard from "../components/Tasks/TaskBoard";

const Dashboard = () => {
  const tasks = [
    { _id: "1", title: "Design UI", description: "Create login page", status: "To-do", deadline: "2026-05-30" },
    { _id: "2", title: "API Setup", description: "Auth routes", status: "In Progress", deadline: "2026-05-28" },
    { _id: "3", title: "Testing", description: "Unit tests", status: "Done", deadline: "2026-05-25" },
  ];

  const handleDrag = (taskId, newStatus) => {
    console.log("Task moved:", taskId, newStatus);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <TaskBoard tasks={tasks} onDrag={handleDrag} />
    </div>
  );
};

export default Dashboard;
