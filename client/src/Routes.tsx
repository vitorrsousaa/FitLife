import { Routes as RoutesProvider, Route } from 'react-router-dom';
import { Home } from './pages/Home';
export default function Routes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Home />} />
    </RoutesProvider>
  );
}
