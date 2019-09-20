import { connect } from 'react-redux';
import PlayerShip from '../components/PlayerShip';

const mapStateToProps = (state) => {
    return {
        ...state.player
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        asteroidCoords: (asteroidCoords) => {
            dispatch({
                type: 'ASTEROIDS_MOVE',
                payload: {
                    // asteroids new coords should go here
                }
            })
        }
    }
}

const makePlayerSmart = connect(mapStateToProps, mapDispatchToProps);
const smartPlayer = makePlayerSmart(PlayerShip);
export default smartPlayer