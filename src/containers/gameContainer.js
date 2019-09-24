import { connect } from 'react-redux';
import Game from '../components/Game';

const mapStateToProps = (state) => {
    return {
        asteroids: state.asteroids
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch({
                type: 'START_GAME',
                payload: {
                }
            })
        }
    }
}

const makeGameSmart = connect(mapStateToProps, mapDispatchToProps)
const smartGame = makeGameSmart(Game)
export default smartGame