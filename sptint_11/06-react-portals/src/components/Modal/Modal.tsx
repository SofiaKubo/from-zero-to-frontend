import './styles.css';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  text: string;
  portalId: string;
}

export function Modal({ text, onClose, portalId }: ModalProps) {
  const container = document.getElementById(portalId);

  return ReactDOM.createPortal(
    <div className="modal">
      <div>{text}</div>
      <button onClick={onClose}>Закрыть</button>
    </div>,
    container!
  );
}
