import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../Modal/Modal';

export interface DetailsButtonProps {
  text: string;
  portalId: string;
}

export const DetailsButton = ({ text, portalId }: DetailsButtonProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const container = document.getElementById(portalId);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Подробнее</button>
      {showModal &&
        container &&
        ReactDOM.createPortal(<Modal onClose={() => setShowModal(false)} text={text} />, container)}
    </>
  );
};
