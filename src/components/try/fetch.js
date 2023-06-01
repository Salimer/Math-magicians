import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const fetchedUsers = await response.json();

      setUsers(fetchedUsers.results);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id.value}>
              user key:
              {' '}
              {user.login.uuid}
              User:
              {' '}
              {user.name.first}
              {' '}
              {user.name.last}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users!</p>
      )}
    </div>
  );
};

export default Fetch;
