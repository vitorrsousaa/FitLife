import Button from '../Button';
import Divider from '../Divider';
import { Modal } from '../Modal';

import { Container, ContainerWorkout, ContentWorkout, Header } from './styles';

interface ShowWorkoutModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const ShowWorkoutModal = ({ onClose, isOpen }: ShowWorkoutModalProps) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title="Vitor Sousa"
      containerId="showWorkout-modal"
    >
      <Container>
        <Header>
          <h2>Treino A</h2>
          <p>22/11/2022</p>
        </Header>
        <ContainerWorkout>
          <h3>Supino inclinado com halteres</h3>
          <p>Atentar para a altura correta do banco durante a execução</p>
          <ContentWorkout>
            <h4>Works Sets</h4>
            <section>
              <div>
                <p>Sets</p>
                <p>Reps</p>
                <p>Kg</p>
              </div>
              <div>
                <p>W</p>
                <p>8</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
            </section>
          </ContentWorkout>
        </ContainerWorkout>
        <Divider />
        <ContainerWorkout>
          <h3>Supino inclinado com halteres</h3>
          <p>Atentar para a altura correta do banco durante a execução</p>
          <ContentWorkout>
            <h4>Works Sets</h4>
            <section>
              <div>
                <p>Sets</p>
                <p>Reps</p>
                <p>Kg</p>
              </div>
              <div>
                <p>W</p>
                <p>8</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
            </section>
          </ContentWorkout>
        </ContainerWorkout>
        <Divider />
        <ContainerWorkout>
          <h3>Supino inclinado com halteres</h3>
          <p>Atentar para a altura correta do banco durante a execução</p>
          <ContentWorkout>
            <h4>Works Sets</h4>
            <section>
              <div>
                <p>Sets</p>
                <p>Reps</p>
                <p>Kg</p>
              </div>
              <div>
                <p>W</p>
                <p>8</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
            </section>
          </ContentWorkout>
        </ContainerWorkout>
        <Divider />
        <div>
          <Button style={{ background: 'var(--error)', marginTop: '2rem' }}>
            Excluir plano de treino
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default ShowWorkoutModal;
