import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <div className="stats">
        <p>Total Users: {listOfUser.length}</p>
      </div>
      <div className="user-grid">
        {listOfUser.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-header">
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-name-section">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-username">@{user.username}</p>
              </div>
            </div>
            <div className="user-details">
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <span className="detail-text">{user.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <span className="detail-text">{user.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🌐</span>
                <span className="detail-text">{user.website}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🏢</span>
                <span className="detail-text">{user.company.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span className="detail-text">{user.address.city}, {user.address.zipcode}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;