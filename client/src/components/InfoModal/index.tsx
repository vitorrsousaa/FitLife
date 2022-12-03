import { Modal } from '../Modal';

import { Container, Content } from './styles';
import { BsFillPersonFill } from 'react-icons/bs';
import { Height } from '../icons/Height';
import { Weight } from '../icons/Weight';
import { Athlete } from '../../types/Athlete';
import { formatGender } from '../../utils/formatGender';

interface InfoModalProps {
  onClose: () => void;
  isOpen: boolean;
  athlete: Athlete;
}

const InfoModal = ({ onClose, isOpen, athlete }: InfoModalProps) => {
  return (
    <Modal
      title={athlete.name}
      subtitle="Informações"
      onClose={onClose}
      isOpen={isOpen}
      containerId="info-modal"
    >
      <Container>
        <Content>
          <h1>Nome Completo</h1>
          <div>
            <BsFillPersonFill />
            <p>{athlete.name}</p>
          </div>
        </Content>

        <div className="info-details">
          <Content>
            <h1>Peso em jejum</h1>
            <div>
              <Weight />
              <p>{athlete.weight} Kg</p>
            </div>
          </Content>

          <Content>
            <h1>Altura</h1>
            <div>
              <Height />
              <p>{athlete.height} cm</p>
            </div>
          </Content>
        </div>

        <Content>
          <h1>Gênero</h1>
          <div className="gender-details">
            <p>{formatGender(athlete.gender)}</p>
          </div>
        </Content>
      </Container>
    </Modal>
  );
};

export default InfoModal;
