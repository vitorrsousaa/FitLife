import { ReactElement } from 'react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { ContainerInput, Container } from './styles';

interface InputProps {
  placeholder: string;
  type: string;
  children?: ReactElement;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, error, type, children, ...rest },
  ref
) => {
  return (
    <Container>
      <ContainerInput error={!!error}>
        {children}
        <input type={type} placeholder={placeholder} {...rest} ref={ref} />
      </ContainerInput>
      {!!error && <p>{error?.message}</p>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
