import React from 'react';
import axios from 'axios';

const TaskCard = ({ task, onStatusChange }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await axios.patch(`http://localhost:8080/tasks/${taskId}`, { status: newStatus });
      onStatusChange(taskId, newStatus);
    } catch (err) {
      console.error('Failed to update task status:', err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      <p className="mt-2 text-gray-600">{task.description}</p>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium">Assignee:</span>
          <span className="ml-2">{task.assignee || 'Unassigned'}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium">Due Date:</span>
          <span className="ml-2">{task.dueDate || 'Not set'}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium">Created:</span>
          <span className="ml-2">{new Date(task.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-4">
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(task.id, e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;