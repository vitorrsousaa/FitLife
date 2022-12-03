import { BrowserRouter } from 'react-router-dom';

import { Workouts } from './components/Workouts';
import { Header } from './components/Header';
import { GlobalStyle } from './assets/globalStyles';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Header />
      <Workouts />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
