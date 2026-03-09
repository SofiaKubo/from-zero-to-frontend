import './styles.css';
import React from 'react';

interface InputProps {
  label: string;
  placeHolder: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, placeHolder } = props;
  return (
    <>
      <label className="input-element">{label}</label>
      <input className="input-element" ref={ref} placeholder={placeHolder} />
    </>
  );
});
