import './styles.css';
import { DetailsButton } from '../components/DetailsButton/DetailsButton';

export const App = () => {
  return (
    <div className="element-container">
      <div className="element-name">
        <div>React</div>
        <div className="element-details-container" id="react-id"></div>
      </div>
      <DetailsButton text="React – библиотека для создания фронтенд-приложений" portalId="react-id" />
    </div>
  );
};
