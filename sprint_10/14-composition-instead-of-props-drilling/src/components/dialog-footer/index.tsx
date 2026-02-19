import { ReactNode } from 'react';

type TDialogFooterProps = {
  children: ReactNode;
};

export const DialogFooter = ({ children }: TDialogFooterProps) => {
  return <form method="dialog">{children}</form>;
};
