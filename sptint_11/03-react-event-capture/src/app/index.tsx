import React, { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const handleCapture = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      <button onClickCapture={handleCapture} onClick={onCounterClick}>
        Увеличить счетчик на 1
      </button>
      <button onClick={onCounterToggleClick}>{isBlocked ? 'Разблокировать' : 'Заблокировать'}</button>
    </>
  );
};
