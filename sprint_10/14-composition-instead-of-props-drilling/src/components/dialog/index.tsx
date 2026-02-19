import { ReactNode } from 'react';
import './styles.css';

type TDialogProps = {
  content: ReactNode;
  footer: ReactNode;
};

export const Dialog = ({ content, footer }: TDialogProps) => {
  return (
    <>
      <div className="overlay" />
      <dialog className="dialog">
        {content}
        {footer}
      </dialog>
    </>
  );
};
