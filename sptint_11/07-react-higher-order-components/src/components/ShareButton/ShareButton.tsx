export const ShareButton = () => {
  const onClick = () => {
    alert('Вы успешно поделились картинкой');
  };

  return <button onClick={onClick}>Поделиться</button>;
};
