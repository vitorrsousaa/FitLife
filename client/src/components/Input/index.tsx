import { ReactElement } from 'react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Container } from './styles';

interface InputProps {
  placeholder: string;
  type: string;
  children?: ReactElement;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type, children, ...rest },
  ref
) => {
  return (
    <Container>
      {children}
      <input type={type} placeholder={placeholder} {...rest} ref={ref} />
    </Container>
  );
};

export const Input = forwardRef(InputBase);
