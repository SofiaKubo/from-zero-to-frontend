import { useState } from 'react';
import './styles.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="card">
        <button className="button" onClick={() => setCount((prev) => prev + 1)}>
          Счётчик: {count}
        </button>
      </div>
    </div>
  );
};
