import './styles.css';

export const App = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form-element">Форма для тренировки событий</h3>
      <div className="form-element">
        <label className="label-input">Текстовое поле ввода:</label>
        <input type="text" required onChange={handleInputChange} />
      </div>
      <div className="form-element">
        <label className="label-input">Чекбокс:</label>
        <input type="checkbox" required className="form-element" onChange={handleCheckboxChange} />
      </div>
      <fieldset className="form-element">
        <legend>Радио кнопки</legend>
        <div>
          <input type="radio" id="huey" name="drone" value="один" defaultChecked onChange={handleRadioChange} />
          <label htmlFor="huey">Huey</label>
        </div>
        <div>
          <input type="radio" id="dewey" name="drone" value="два" onChange={handleRadioChange} />
          <label htmlFor="dewey">Dewey</label>
        </div>
      </fieldset>

      <button type="submit" className="form-element">
        Сабмит формы
      </button>
    </form>
  );
};
