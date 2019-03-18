import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'emotion-theming';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import { theme, GlobalSyles } from './constants/styling';
import Game from './Game';
import GameProvider from './game-context';
import Footer from './components/Footer';
import Background from './components/Background';

LogRocket.init('bdomyd/dwims');
setupLogRocketReact(LogRocket);
library.add(faCog);
library.add(faTimes);
library.add(faSignOutAlt);

const App = () => (
  <ThemeProvider theme={theme}>
    <GameProvider>
      <GlobalSyles />
      <Background>
        <Game />
        <Footer />
      </Background>
    </GameProvider>
  </ThemeProvider>
);
export default App;
