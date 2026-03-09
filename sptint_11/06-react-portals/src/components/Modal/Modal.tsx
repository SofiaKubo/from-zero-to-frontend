import './styles.css';

interface ModalProps {
  onClose: () => void;
  text: string;
}

export function Modal({ text, onClose }: ModalProps) {
  return (
    <div className="modal">
      <div>{text}</div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}
