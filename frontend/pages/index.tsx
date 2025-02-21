import { useEffect, useState } from 'react';
import TaskDashboard from '../components/TaskDashboard';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or authentication check
    const fetchData = async () => {
      // Add your data fetching logic here
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-8">AI-Powered Task Management</h1>
      <TaskDashboard />
    </div>
  );
};

export default Home;