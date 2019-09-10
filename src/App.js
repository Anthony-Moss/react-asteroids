import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Gamescreen from './components/gameScreen/GameScreen';
import SpaceShip from './components/playerShip/PlayerShip';

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      keys: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        space: 0
      }
    }
  }

  handleShipMovement(value, e) {
    let keys = this.state.keys;
    if (e.keyCode === 37 || e.keyCode === 65)
      keys.left  = value;
    if (e.keyCode === 39 || e.keyCode === 68) 
      keys.right = value;
    if (e.keyCode === 38 || e.keyCode === 87) 
      keys.up = value;
    if (e.keyCode === 32) 
      keys.space = value;

    this.setState({
      keys
    });
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleShipMovement.bind(this, false));
    window.addEventListener('keydown', this.handleShipMovement.bind(this, true))
  }

  render() {
    return (
      <div tabIndex='0' onKeyDown={(event) => {
        // console.log(event.key)
      }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Gamescreen />
          <SpaceShip />
        </Layer>
      </Stage>
      </div>
    );    
  }
}

export default App;
