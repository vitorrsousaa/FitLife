import { Routes as RoutesProvider, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import ShowWorkout from './pages/ShowWorkout';
export default function Routes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Home />} />
      <Route path="/planejamento-de-treino/:id" element={<ShowWorkout />} />
    </RoutesProvider>
  );
}
