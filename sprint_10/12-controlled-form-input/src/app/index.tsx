import './styles.css';
import { useState, FormEvent, ChangeEvent } from 'react';

export const App = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ value });
  }

  return (
    <div>
      <h1>Заполните форму:</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label className="label">
          Ваше имя:
          <input className="input" name="name" type="text" value={value} onChange={handleInputChange} />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
