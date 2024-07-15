// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import UserList from './Users';
function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('http://54.88.212.112:8000/api/users/', {
      headers: {
        'Accept': 'application/json',
      },
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <RegistrationForm onUserAdded={fetchUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
