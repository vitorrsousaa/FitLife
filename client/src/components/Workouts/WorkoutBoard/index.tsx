import { ContainerAthlete, ContainerButtons } from './styles';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiMuscleUp } from 'react-icons/gi';
import { Gym } from '../../icons/Gym';

import { GymOutline } from '../../icons/GymOutline';

interface WorkoutBoardProps {
  haveTraining: boolean;
  openInfoModal: () => void;
  openShowWorkoutModal: () => void;
  openCreateWorkoutModal: () => void;
}

const WorkoutBoard = ({
  haveTraining,
  openInfoModal,
  openShowWorkoutModal,
  openCreateWorkoutModal,
}: WorkoutBoardProps) => {
  return (
    <>
      <ContainerAthlete>
        <div className="athlete-details">
          <h1>Vitor Sousa da Silva</h1>
          <h2>22/11/2022</h2>
        </div>

        <ContainerButtons>
          <button onClick={openInfoModal}>
            <BsFillPersonFill />
          </button>
          {haveTraining ? (
            <>
              <button onClick={openShowWorkoutModal}>
                <GiMuscleUp />
              </button>
              <button>
                <Gym />
              </button>
            </>
          ) : (
            <button onClick={openCreateWorkoutModal}>
              <GymOutline />
            </button>
          )}
        </ContainerButtons>
      </ContainerAthlete>
    </>
  );
};

export default WorkoutBoard;
