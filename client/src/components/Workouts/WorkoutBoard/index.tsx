import { useState } from 'react';

import { BsFillPersonFill } from 'react-icons/bs';
import { GiMuscleUp } from 'react-icons/gi';
import { Gym } from '../../icons/Gym';
import InfoModal from '../../InfoModal';
import CreateWorkoutModal from '../../CreateWorkoutModal';
import ShowWorkoutModal from '../../ShowWorkoutModal';

import { ContainerAthlete, ContainerButtons } from './styles';
import { Athlete } from '../../../types/Athlete';
import { formatDate } from '../../../utils/formatDate';

interface WorkoutBoardProps {
  athlete: Athlete;
}

const WorkoutBoard = ({ athlete }: WorkoutBoardProps) => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isShowWorkoutVisible, setIsShowWorkoutVisible] = useState(false);
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

          <button onClick={() => setIsShowWorkoutVisible(true)}>
            <GiMuscleUp />
          </button>
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

      <ShowWorkoutModal
        isOpen={isShowWorkoutVisible}
        onClose={() => setIsShowWorkoutVisible(false)}
        athleteId={athlete._id}
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
