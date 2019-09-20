import React from 'react';
import { Stage, Layer } from 'react-konva'
import { Provider } from 'react-redux';
import store from '../store'
import Asteroids from '../containers/asteroidsContainer';
// import Player from '../containers/'
import Background from '../components/Background'
import PlayerShip from '../containers/playerContainer'


class Game extends React.Component {
    constructor(props) {
        super(props)
    }


    render(props) {
        return (
            <div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Provider store={store}>
                            <Background />
                            <Asteroids />
                            <PlayerShip />
                        </Provider>
                    </Layer>
                </Stage>
            </div>
        )
    }
}

export default Game;