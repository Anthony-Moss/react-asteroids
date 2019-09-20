const initialState = {
    screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
    },
    asteroids: [{}, {}, {}]
}

const gameReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default gameReducer