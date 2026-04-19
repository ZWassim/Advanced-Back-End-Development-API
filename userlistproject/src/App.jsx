import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>📋 User Directory</h1>
        <p>Fetching users from JSONPlaceholder API</p>
      </header>
      <UserList />
    </div>
  );
}

export default App;