import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Task Detail</h2>
      <p>Task ID: {id}</p>
      {/* Fetch task details by ID and display here */}
    </div>
  );
};

export default TaskDetail;
