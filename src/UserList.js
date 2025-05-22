import React, { useState } from 'react';
import './UserList.css';

const usersData = [
  { id: 1, name: 'Abbu', role: 'Developer' },
  { id: 2, name: 'remo', role: 'Designer' },
  { id: 3, name: 'Sarath', role: 'Team Lead' },
  { id: 4, name: 'Ravi', role: 'Developer' },
  { id: 5, name: 'Reshma', role: 'Tester' },
];

function UserList() {
  const [search, setSearch] = useState('');

  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-list">
      <h2>User Directory</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
