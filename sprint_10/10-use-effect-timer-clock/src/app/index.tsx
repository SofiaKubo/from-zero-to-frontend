import './styles.css';
import { useState, useEffect } from 'react';

export const App = () => {
  const [nowTime, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = nowTime.toLocaleTimeString('ru-RU');

  return (
    <div>
      <h1 className="clock">{formattedTime}</h1>
    </div>
  );
};
