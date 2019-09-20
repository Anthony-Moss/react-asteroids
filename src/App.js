import React from 'react';
import Gamescreen from './components/Background';
import SpaceShip from './components/PlayerShip';
import Asteroids from './containers/asteroidsContainer';
import Game from './containers/gameContainer';

class App extends React.Component {
  constructor(props) {
    super(props) 
  }


  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
