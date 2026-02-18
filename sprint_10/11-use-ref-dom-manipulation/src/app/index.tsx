import './styles.css';
import { useState } from 'react';

export const App = () => {
  const [isGold, setIsGold] = useState(false);

  const handleChangeColor = () => {
    setIsGold((prev) => !prev);
  };

  return (
    <div className="page">
      <h1 className={`header${isGold ? ' header--gold' : ''}`}>Я меняю свой цвет</h1>
      <div className="card">
        <button onClick={handleChangeColor}>Изменить цвет</button>
      </div>
    </div>
  );
};
