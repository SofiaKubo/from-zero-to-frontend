export const App = () => {
  return (
    <span>
      {`Ваш пароль от базы данных: ${process.env.DATA_BASE_PASSWORD}`}
      <br />
      Никому его не говорите!
    </span>
  );
};
