import { connect } from 'react-redux';
import Game from '../components/Game';
import store from '../store'
import { getRadius, getSides, getX, getY } from '../reducers/asteroidsReducer'

const mapStateToProps = (state) => {
    return {
        asteroids: state.game.asteroids
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch({
                type: 'START_GAME',
                payload: {
                    asteroids: [...store.getState().game.asteroids, {
                        numOfSides: getSides(),
                        radius: getRadius(),
                        x: getX(),
                        y: getY(),
                        speed: 1
                    }]
                }
            })
        }
    }
}

const makeGameSmart = connect(mapStateToProps, mapDispatchToProps)
const smartGame = makeGameSmart(Game)
export default smartGame