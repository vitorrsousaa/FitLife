import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './assets/globalStyles';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
