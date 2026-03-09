import { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const handleCapture = (e: React.MouseEvent) => {
    if (isBlocked) {
      e.stopPropagation();
    }
  };

  const onCounterClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const onCounterToggleClick = () => {
    setIsBlocked(!isBlocked);
  };

  return (
    <>
      <div>{`Счетчик: ${counter}`}</div>
      <div onClickCapture={handleCapture}>
        <button onClick={onCounterClick}>Увеличить счетчик на 1</button>
      </div>
      <button onClick={onCounterToggleClick}>{isBlocked ? 'Разблокировать' : 'Заблокировать'}</button>
    </>
  );
};
