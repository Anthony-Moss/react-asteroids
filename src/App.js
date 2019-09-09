import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Gamescreen from './components/background/GameScreen';
import SpaceShip from './components/playerShip/PlayerShip';

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Gamescreen />
        <SpaceShip />
      </Layer>
    </Stage>
  );
}

export default App;
