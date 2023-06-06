// pages/DashboardPage.tsx

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
      <Link to="/dashboard/add-todo">Add Todo</Link>
      <p>List of Todos</p>
      {/* TODO: Render list of todos */}
    </div>
  );
};

export default DashboardPage;
