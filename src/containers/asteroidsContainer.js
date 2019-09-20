import { connect } from 'react-redux';
import Asteroids from '../components/Asteroids';

const mapStateToProps = (state) => {
    return {
        x: state.asteroids.x,
        y: state.asteroids.y,
        numOfSides: state.asteroids.numOfSides,
        radius: state.asteroids.radius
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

const makeAsteroidsSmart = connect(mapStateToProps, mapDispatchToProps);
const smartAsteroids = makeAsteroidsSmart(Asteroids);
export default smartAsteroids