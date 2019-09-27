const initialState = {
    color: 'purple',
    x: 300,
    y: 400,
    angle: 50,
    rotation: 65,
    speed: 4,
    keys: {
        left: 0,
        right: 0,
        up: 0,
        space: 0
    }
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_SHIP':
            console.log(action)
            return {
                ...state,
                x: action.payload.x,
                y: action.payload.y
            }
    default:
        return state
    }
}

export default playerReducer