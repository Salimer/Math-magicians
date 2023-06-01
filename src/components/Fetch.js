import React, { useState, useEffect } from 'react';

const FetchData = async () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=alone');
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [setData, setLoading, setError]);

  if (error) return <div>Something went wrong!</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchData;
