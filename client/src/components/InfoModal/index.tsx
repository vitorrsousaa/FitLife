import React from 'react';
import { Modal } from '../Modal';

import { Container, Content } from './styles';
import { BsFillPersonFill } from 'react-icons/bs';
import { Height } from '../icons/Height';
import { Weight } from '../icons/Weight';

interface InfoModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const InfoModal = ({ onClose, isOpen }: InfoModalProps) => {
  return (
    <Modal
      title="Vitor Sousa"
      subtitle="Informações"
      onClose={onClose}
      isOpen={isOpen}
    >
      <Container>
        <Content>
          <h1>Nome Completo</h1>
          <div>
            <BsFillPersonFill />
            <p>Vitor Sousa da Silva</p>
          </div>
        </Content>

        <div className="info-details">
          <Content>
            <h1>Peso em jejum</h1>
            <div>
              <Weight />
              <p>82 Kg</p>
            </div>
          </Content>

          <Content>
            <h1>Altura</h1>
            <div>
              <Height />
              <p>184 cm</p>
            </div>
          </Content>
        </div>

        <Content>
          <h1>Gênero</h1>
          <div className="gender-details">
            <p>Masculino</p>
          </div>
        </Content>
      </Container>
    </Modal>
  );
};

export default InfoModal;
