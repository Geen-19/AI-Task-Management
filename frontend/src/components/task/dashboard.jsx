import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './taskForm';
import TaskList from './taskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      try {
        const response = await axios.get('http://localhost:8080/tasks', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
        setTasks(response.data);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleStatusChange = async (taskId, newStatus) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    try {
      await axios.put(`http://localhost:8080/tasks/${taskId}`, { status: newStatus }, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ));
    } catch (err) {
      console.error('Failed to update task status:', err);
    }
  };

  // Filter tasks based on status and search term
  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === 'All' || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Task Management Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Task Creation Form */}
          <div className="mb-8">
            <TaskForm onAddTask={handleAddTask} />
          </div>

          {/* Filter Controls */}
          <div className="mb-6 flex justify-between items-center">
            <div className="flex space-x-2">
              {['All', 'To Do', 'In Progress', 'Completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-md ${
                    filter === status
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} found
            </div>
          </div>

          {/* Task List */}
          <TaskList
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;