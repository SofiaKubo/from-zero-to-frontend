import React, { ComponentType } from 'react';

interface WithAuthProps {
  isAuth: boolean;
  needAuthText: string;
}

export function withAuthButton<P>(WrappedComponent: ComponentType<P>) {
  return function (props: P & WithAuthProps) {
    const { isAuth, needAuthText, ...restProps } = props;

    if (!isAuth) {
      return <div>{needAuthText}</div>;
    }

    return <WrappedComponent {...(restProps as any)} />;
  };
}
