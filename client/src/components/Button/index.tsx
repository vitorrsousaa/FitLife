import React, { ReactElement } from 'react';
import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactElement;
  onPress?: () => void;
  icon?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onPress,
  icon,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <Container onClick={onPress} disabled={disabled} {...rest}>
      {icon && '✔️'}
      {children}
    </Container>
  );
};

export default Button;
