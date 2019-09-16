import React from 'react';
import { Stage, Layer } from 'react-konva';
import Gamescreen from './components/gameScreen/GameScreen';
import SpaceShip from './components/playerShip/PlayerShip';
import Astroids from './components/Asteroids.js';

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      spaceship: [
        {}
      ]
    }
  }

  render() {
    let spaceship = this.state.spaceship.map((ship, i) => {
      return <SpaceShip key={i} x={600} y={400} width={this.state.screen.width} height={this.state.screen.height} rotation={65} speed={8} keyPress={this.state.keys} ref={node => {
        this.spaceShipNode = node;
      }}/>
    })

    return (
      <div tabIndex='0' onKeyDown={(event) => {
        console.log(event.key)
      }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Gamescreen />
          <Astroids x={300} y={300} />
          {spaceship}
        </Layer>
      </Stage>
      </div>
    );    
  }
}

export default App;
