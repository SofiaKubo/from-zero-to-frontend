import { Input } from '../components/Input/Input';
import { useRef, useEffect } from 'react';

export const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onInputClick = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <>
      <Input ref={inputRef} label="Введите email:" placeHolder="email" />
      <button onClick={onInputClick}>Подписаться</button>
    </>
  );
};
