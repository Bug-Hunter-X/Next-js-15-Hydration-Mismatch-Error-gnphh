```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js
export default async function handler(req, res) {
  res.status(200).json({ text: 'This is some sample data from the API.' });
} 
```