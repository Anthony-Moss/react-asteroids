import React from 'react';
import { Stage, Layer } from 'react-konva'
import { Provider, connect } from 'react-redux';
import store from '../store'
// import Asteroids from '../containers/asteroidsContainer';
import Asteroids from '../components/Asteroids'
// import Player from '../containers/'
import Background from '../components/Background'
import PlayerShip from '../containers/playerContainer'


class Game extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let asteroids = this.props.asteroids.map((asteroid, i) => {
            return <Asteroids key={i} numOfSides={asteroid.numOfSides} radius={asteroid.radius} x={asteroid.x} y={asteroid.y} />
        })
        return (
            <div>
                <button onClick={this.props.startGame}>Start</button>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Provider store={store}>
                            <Background />
                            {asteroids}
                            <PlayerShip />
                        </Provider>
                    </Layer>
                </Stage>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.game
    }
}

export default connect(mapStateToProps)(Game);