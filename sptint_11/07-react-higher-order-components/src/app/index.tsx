import './styles.css';
import { useState } from 'react';
import { ShareButton } from '../components/ShareButton/ShareButton';
import { LikeButton } from '../components/LikeButton/LikeButton';
import { withAuthButton } from '../hocs/withAuth';

const WithAuthShareButton = withAuthButton(ShareButton);
const WithAuthLikeButton = withAuthButton(LikeButton);

export const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const toggleLogin = () => {
    setIsAuth(!isAuth);
  };

  return (
    <div>
      <button className="auth-button" onClick={toggleLogin}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
      <div className="card-container">
        <div className="card">Здесь должна быть умная мысль</div>
        <div className="like-share-container">
          <WithAuthShareButton isAuth={isAuth} needAuthText="Необходима авторизация" />
          <WithAuthLikeButton isAuth={isAuth} needAuthText="Необходима авторизация" />
        </div>
      </div>
    </div>
  );
};
