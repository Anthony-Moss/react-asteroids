import { getRadius, getSides, getX, getY } from './asteroidsReducer'

const initialState = {
    screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
    },
    asteroids: []
}

const gameReducer = (state=initialState, action) => {
    switch(action.type) {
        case "START_GAME":
            return {
                ...state,
                asteroids: action.payload.asteroids
            }
        default:
            return state
    }
}

export default gameReducer






// screen: {
//     width: window.innerWidth,
//     height: window.innerHeight,
//     ratio: window.devicePixelRatio || 1,
// },
// asteroids: [{
//     numOfSides: getSides(),
//     radius: getRadius(),
//     x: getX(),
//     y: getY(),
//     speed: 1
// },
// {
//     numOfSides: getSides(),
//     radius: getRadius(),
//     x: getX(),
//     y: getY(),
//     speed: 1
// }]
