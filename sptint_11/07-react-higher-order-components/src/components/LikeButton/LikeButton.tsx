export const LikeButton = () => {
  const onClick = () => {
    alert('Вы успешно поставили лайк');
  };

  return <button onClick={onClick}>Поставить лайк</button>;
};
