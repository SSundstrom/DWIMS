import React from 'react';
import JoinOrCreateRoom from './pages/JoinOrCreateRoom';
import { GameConsumer } from './game-context';
import Wait from './pages/Wait';
import Play from './pages/Play';
import ContentStyles from './components/styles/ContentStyles';

const Game = () => (
  <ContentStyles>
    <GameConsumer>
      {context => {
        const { joined, isHost, started } = context.state;
        if (!joined && !isHost) {
          return <JoinOrCreateRoom />;
        }
        if (!started) {
          return <Wait />;
        }
        return <Play />;
      }}
    </GameConsumer>
  </ContentStyles>
);

export default Game;
