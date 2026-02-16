import { ReactElement } from 'react';

type WelcomeProps = {
  name: string;
  welcomText: string;
};

export default function Welcome(props: WelcomeProps): ReactElement {
  return (
    <>
      <div className="name">{props.name}</div>
      <div className="welcomText">{props.welcomText}</div>
    </>
  );
}
