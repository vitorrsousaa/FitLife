import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalBody } from './styles';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  subtitle?: string;
  children: ReactElement;
  containerId?: string;
}

export function Modal({
  onClose,
  title,
  isOpen,
  subtitle,
  children,
  containerId = 'modal-root',
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(
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
    </Overlay>,
    container
  );
}
