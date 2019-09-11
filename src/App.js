import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Gamescreen from './components/gameScreen/GameScreen';
import SpaceShip from './components/playerShip/PlayerShip';

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      keys: {
        left: 0,
        right: 0,
        up: 0,
        space: 0
      },
      spaceship: [
        {}
      ]
    }
  }

  handleKeyPress(value, e) {
    let keys = this.state.keys;
    switch (e.keyCode) {
      case 37: keys.left = value;
        break;
      case 65: keys.left = value;
        break;
      case 39: keys.right = value
        break;
      case 68: keys.right = value;
        break;
      case 38: keys.up = value;
        break;
      case 87: keys.up = value;
        break;
      case 32: keys.space = value;
        break;
    }

    this.setState({
      keys
    });
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress.bind(this, false));
    window.addEventListener('keydown', this.handleKeyPress.bind(this, true))
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeys);
    window.removeEventListener('keydown', this.handleKeys);
  }

  render() {
    let keyCounter = 0
    let spaceship = this.state.spaceship.map(ship => {
      return <SpaceShip key={keyCounter} x={600} y={400} width={this.state.screen.width} height={this.state.screen.height} rotation={65} speed={8} keyPress={this.state.keys} ref={node => {
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
          {spaceship}
        </Layer>
      </Stage>
      </div>
    );    
  }
}

export default App;
