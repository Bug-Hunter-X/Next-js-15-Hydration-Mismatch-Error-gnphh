```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if the data is fetched on the server
  const data = useMyData(); 
  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {JSON.stringify(data)}</p>
    </div>
  );
}
```