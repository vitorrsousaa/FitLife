import { Overlay, ModalBody } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { ReactElement } from 'react';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  subtitle?: string;
  children: ReactElement;
}

export function Modal({
  onClose,
  title,
  isOpen,
  subtitle,
  children,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <h1>{title}</h1>
          <AiOutlineClose onClick={onClose} />
        </header>
        {subtitle && (
          <div className="details">
            <h2>{subtitle}</h2>
          </div>
        )}
        {children}
      </ModalBody>
    </Overlay>
  );
}
