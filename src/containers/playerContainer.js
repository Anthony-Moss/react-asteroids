import { connect } from 'react-redux';
import PlayerShip from '../components/PlayerShip';
import store from '../store';


const mapStateToProps = (state) => {
    return {
        ...state.player
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveShip: () => {
            // x -= Math.sin(-(rotation - 65)*Math.PI/180)* speed
            // y -= Math.cos(-(rotation - 65)*Math.PI/180) * speed
            // let { x, y, rotation, speed } = store.getState().ship
            dispatch({
                type: 'MOVE_SHIP', payload: {
                    x: store.getState().ship.x - Math.sin(-(store.getState().ship.rotation - 65)*Math.PI/180)* store.getState().ship.speed,
                    y: store.getState().ship.y - Math.cos(-(store.getState().ship.rotation - 65)*Math.PI/180) * store.getState().ship.speed
                }
            })
        },
        moveUp: () => {
            dispatch({
                type: 'SET_KEYS', payload: {
                    up: true
                }
            })
        },
        LEFT_ARROW_PRESSED: () => {
            dispatch({
                type: 'SET_KEYS', payload: {
                    left: true
                }
            })
        },
        RIGHT_ARROW_PRESSED: () => {
            dispatch({
                type: 'SET_KEYS', payload: {
                    right: true
                }
            })
        }
    }
}


const makePlayerSmart = connect(mapStateToProps, mapDispatchToProps);
const smartPlayer = makePlayerSmart(PlayerShip);
export default smartPlayer