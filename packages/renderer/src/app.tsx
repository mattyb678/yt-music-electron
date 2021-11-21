import React, { useState } from 'react';
import './app.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <header className='app-header'>
        <p>Hello Vite + React!</p>
        <p>
          <div>Count is {count}</div>
          <button onClick={() => setCount((count) => count + 1)}>Increment count</button>
        </p>
      </header>
    </div>
  );
};

export default App;
