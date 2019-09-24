export let getSides = () => {
    let min = 5;
    const max = 10;
    const sides = Math.floor(Math.random() * (max - min + 1) + min)
    return sides
}

export let getRadius = () => {
    let min = 10;
    const max = 75;
    const radius = Math.floor(Math.random() * (max - min + 1) + min)
    return radius
}

export let getX = () => {
    let min = 50;
    const max = 500;
    const x = Math.floor(Math.random() * (max - min + 1) + min)
    return x
}

export let getY = () => {
    let min = 50;
    const max = 500;
    const y = Math.floor(Math.random() * (max - min + 1) + min)
    return y
}

// const initialState = []
//     // [{
//     //     numOfSides: getSides(),
//     //     radius: getRadius(),
//     //     x: getX(),
//     //     y: getY(),
//     //     speed: 1
//     // },
//     // {
//     //     numOfSides: getSides(),
//     //     radius: getRadius(),
//     //     x: getX(),
//     //     y: getY(),
//     //     speed: 1
//     // }]


// const asteroidsReducer = (state=initialState, action) => {
//     switch(action.type) {
//         case '':
//             return {
//                 ...state
//             }
//         default:
//             return state 
//     }
// }

// export default asteroidsReducer