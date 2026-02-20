import { useEffect, useState } from 'react';

type UseToggleOptions = {
  onOpen?: () => void;
  onClose?: () => void;
};

type UseToggleReturn = {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

export function useDisclosure(
  initialState: boolean = false,
  { onOpen, onClose }: UseToggleOptions = {}
): UseToggleReturn {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    setIsOpen(initialState);
  }, [initialState]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const open = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const close = () => {
    setIsOpen(false);
    onClose?.();
  };

  return { isOpen, toggle, open, close };
}
