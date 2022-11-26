import { useState } from 'react';

import { BsFillPersonFill } from 'react-icons/bs';
import { GiMuscleUp } from 'react-icons/gi';
import { Gym } from '../../icons/Gym';
import { GymOutline } from '../../icons/GymOutline';
import InfoModal from '../../InfoModal';
import CreateWorkoutModal from '../../CreateWorkoutModal';
import ShowWorkoutModal from '../../ShowWorkoutModal';

import { ContainerAthlete, ContainerButtons } from './styles';

interface WorkoutBoardProps {
  haveTraining: boolean;
}

const WorkoutBoard = ({ haveTraining }: WorkoutBoardProps) => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isShowWorkoutVisible, setIsShowWorkoutVisible] = useState(false);
  const [isCreateWorkoutVisible, setIsCreateWorkoutVisible] = useState(false);

  return (
    <>
      <ContainerAthlete>
        <div className="athlete-details">
          <h1>Vitor Sousa da Silva</h1>
          <h2>22/11/2022</h2>
        </div>

        <ContainerButtons>
          <button onClick={() => setIsInfoModalVisible(true)}>
            <BsFillPersonFill />
          </button>
          {haveTraining ? (
            <>
              <button onClick={() => setIsShowWorkoutVisible(true)}>
                <GiMuscleUp />
              </button>
              <button>
                <Gym />
              </button>
            </>
          ) : (
            <button onClick={() => setIsCreateWorkoutVisible(true)}>
              <GymOutline />
            </button>
          )}
        </ContainerButtons>
      </ContainerAthlete>

      <InfoModal
        isOpen={isInfoModalVisible}
        onClose={() => setIsInfoModalVisible(false)}
      />

      <ShowWorkoutModal
        isOpen={isShowWorkoutVisible}
        onClose={() => setIsShowWorkoutVisible(false)}
      />

      <CreateWorkoutModal
        isOpen={isCreateWorkoutVisible}
        onClose={() => setIsCreateWorkoutVisible(false)}
      />
    </>
  );
};

export default WorkoutBoard;
