const initialState = {
    color: 'purple',
    x: 300,
    y: 400,
    angle: 50,
    rotation: 65,
    speed: 9.5,
    keys: {
        left: 0,
        right: 0,
        up: 0,
        space: 0
    }
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ASTEROIDS_MOVE':
        console.log(state)
        return {
            ...state
        }
    default:
        return { ...state }
    }
}

export default playerReducer