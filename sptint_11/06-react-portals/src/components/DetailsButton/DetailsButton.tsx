import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export interface DetailsButtonProps {
  text: string;
  portalId: string;
}

export const DetailsButton = ({ text, portalId }: DetailsButtonProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Подробнее</button>
      {showModal && <Modal onClose={() => setShowModal(false)} text={text} portalId={portalId} />}
    </>
  );
};
