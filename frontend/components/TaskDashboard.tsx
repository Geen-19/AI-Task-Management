import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const TaskDashboard: React.FC = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || '');

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            setTasks(data);
            setLoading(false);
        };

        fetchTasks();

        socket.on('taskUpdated', (updatedTask) => {
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
            );
        });

        return () => {
            socket.off('taskUpdated');
        };
    }, []);

    const handleTaskCreation = async (task) => {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        const newTask = await response.json();
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="border p-2 mb-2">
                        <h2 className="font-semibold">{task.title}</h2>
                        <p>{task.description}</p>
                        <p>Assigned to: {task.assignedTo}</p>
                        <p>Status: {task.status}</p>
                    </li>
                ))}
            </ul>
            {/* Add task creation form here */}
        </div>
    );
};

export default TaskDashboard;