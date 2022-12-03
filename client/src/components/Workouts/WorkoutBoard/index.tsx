import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';
import { GiMuscleUp } from 'react-icons/gi';
import { Gym } from '../../icons/Gym';
import InfoModal from '../../InfoModal';
import CreateWorkoutModal from '../../CreateWorkoutModal';

import { ContainerAthlete, ContainerButtons } from './styles';
import { Athlete } from '../../../types/Athlete';
import { formatDate } from '../../../utils/formatDate';

interface WorkoutBoardProps {
  athlete: Athlete;
}

const WorkoutBoard = ({ athlete }: WorkoutBoardProps) => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isCreateWorkoutVisible, setIsCreateWorkoutVisible] = useState(false);

  return (
    <>
      <ContainerAthlete>
        <div className="athlete-details">
          <h1>{athlete.name}</h1>
          <h2>{formatDate(athlete.createdAt)}</h2>
        </div>

        <ContainerButtons>
          <button onClick={() => setIsInfoModalVisible(true)}>
            <BsFillPersonFill />
          </button>

          <Link to={`planejamento-de-treino/${athlete._id}`}>
            <GiMuscleUp />
          </Link>

          <button onClick={() => setIsCreateWorkoutVisible(true)}>
            <Gym />
          </button>
        </ContainerButtons>
      </ContainerAthlete>

      <InfoModal
        isOpen={isInfoModalVisible}
        onClose={() => setIsInfoModalVisible(false)}
        athlete={athlete}
      />

      <CreateWorkoutModal
        isOpen={isCreateWorkoutVisible}
        onClose={() => setIsCreateWorkoutVisible(false)}
        athlete={athlete}
      />
    </>
  );
};

export default WorkoutBoard;
