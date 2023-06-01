import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=alone', {
          headers: {
            'X-Api-Key': 'vZdI6eGz2cS+jTb71dvouA==X8Xd3lMbKviCRmqW',
          },
        });
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Something went wrong!</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <ul className="quote">
      {data.map((item) => (
        <li className="li" key={1}>
          {item.quote}
        </li>
      ))}
    </ul>
  );
};

export default FetchData;
