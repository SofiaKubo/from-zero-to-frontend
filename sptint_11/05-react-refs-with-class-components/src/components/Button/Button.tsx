import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export class Button extends React.Component<ButtonProps> {
  private buttonRef: React.RefObject<HTMLButtonElement>;
  constructor(props: ButtonProps) {
    super(props);

    this.buttonRef = React.createRef();
  }

  setFocus = () => {
    this.buttonRef.current?.focus();
  };

  render() {
    return (
      <button ref={this.buttonRef} onClick={this.props.onClick} className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}
