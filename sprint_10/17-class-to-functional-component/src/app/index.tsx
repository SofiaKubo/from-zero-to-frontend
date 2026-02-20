import './styles.css';

import { useLayoutEffect, useRef, useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    buttonRef.current?.focus();
    if (buttonRef.current) {
      buttonRef.current.style.color = count % 2 ? 'chocolate' : 'lightgreen';
    }
  }, [count]);

  return (
    <div className="page">
      <div className="card">
        <button className="button" ref={buttonRef} onClick={() => setCount((prev) => prev + 1)}>
          Счётчик: {count}
        </button>
      </div>
    </div>
  );
};
