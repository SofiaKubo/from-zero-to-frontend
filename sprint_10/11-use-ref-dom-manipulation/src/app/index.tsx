import './styles.css';
import { useRef } from 'react';

export const App = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const handleChangeColor = () => {
    if (headerRef.current) {
      headerRef.current.style.backgroundColor = 'gold';
    }
  };

  return (
    <div className="page">
      <h1 className="header" ref={headerRef}>
        Я меняю свой цвет
      </h1>
      <div className="card">
        <button onClick={handleChangeColor}>Изменить цвет</button>
      </div>
    </div>
  );
};
