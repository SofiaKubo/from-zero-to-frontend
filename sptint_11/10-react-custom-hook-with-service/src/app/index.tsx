import './styles.css';
import { useCounter } from '../hooks/useCounter';

export const App = () => {
  const { count, increment, decrement, double, divide } = useCounter();

  return (
    <>
      <div className="counter">Значение счетчика: {count}</div>
      <div>
        <button className="counter-button" onClick={increment}>
          Прибавить 1
        </button>
        <button className="counter-button" onClick={decrement}>
          Вычесть 1
        </button>
        <button className="counter-button" onClick={double}>
          Умножить на 2
        </button>
        <button className="counter-button" onClick={divide}>
          Разделить на 2
        </button>
      </div>
    </>
  );
};
