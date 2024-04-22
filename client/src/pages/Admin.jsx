import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [usersFetched, setUsersFetched] = useState(false);

  const getUsers = async () => {
    try {
      const response = await axios.get('/api/admin/users');
      setUsers(response.data);
      setUsersFetched(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const getContacts = async () => {
    try {
      const response = await axios.get('/api/admin/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/admin/users/${userId}`);
      // After successful deletion, fetch updated user list
      getUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const deleteContact = async (contactId) => {
    try {
      await axios.delete(`/api/admin/contacts/${contactId}`);
      // After successful deletion, fetch updated contact list
      getContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <button onClick={getUsers}>Refresh Users</button>
        <button onClick={getContacts}>Refresh Contacts</button>
      </nav>
      <div className="right-side-box">
        {usersFetched && (
          <>
            <h2>Users</h2>
            <ul className="vertical-list">
              {users.map((user) => (
                <li key={user._id}>
                  <span>{user.username}</span>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        )}
        <h2>Contacts</h2>
        <ul className="vertical-list">
          {contacts.map((contact) => (
            <li key={contact._id}>
              <span>{contact.name}</span>
              <button onClick={() => deleteContact(contact._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
