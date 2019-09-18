import React from 'react';
import { Stage, Layer, Group } from 'react-konva';
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
      ],
      asteroids: [
        {
          x: 750,
          y: 250
        },
        {
          x: 300,
          y: 750
        },
        {
          x: 400,
          y: 275
        }
      ]
    }
  }

  componentDidMount() {
    // console.log()
    // let layer = this.asteroid.getLayer()
  }

  render() {
    let spaceship = this.state.spaceship.map((ship, i) => {
      return <SpaceShip key={i} x={600} y={400} width={this.state.screen.width} height={this.state.screen.height} rotation={65} speed={8} ref={node => {
        this.spaceShipNode = node;
      }}/>
    })

    let asteroids = this.state.asteroids.map((asteroid, i) => {
      return <Astroids key={i} x={asteroid.x} y={asteroid.y} refref={node => {
        this.asteroid = node;}}/>
    })


    return (
      <div tabIndex='0' onKeyDown={(event) => {
        // console.log(event.key)
      }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Gamescreen />
          <Group key='asteroids'>
            {asteroids}
          </Group>
          {spaceship}
        </Layer>
      </Stage>
      </div>
    );
  }
}

export default App;
