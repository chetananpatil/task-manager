import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import TaskDetail from './components/TaskDetail';
import EditTask from './components/EditTask';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

