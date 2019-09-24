// import { connect } from 'react-redux';
// import Asteroids from '../components/Asteroids';

// const mapStateToProps = (state) => {
//     return {
//             x: state.asteroids[0].x,
//             y: state.asteroids[0].y,
//             numOfSides: state.asteroids[0].numOfSides,
//             radius: state.asteroids[0].radius
//         }
    
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         asteroidCoords: (asteroidCoords) => {
//             dispatch({
//                 type: 'ASTEROIDS_MOVE',
//                 payload: {
//                     // asteroids spinning will go here
//                 }
//             })
//         }
//     }
// }

// const makeAsteroidsSmart = connect(mapStateToProps, mapDispatchToProps);
// const smartAsteroids = makeAsteroidsSmart(Asteroids);
// export default smartAsteroids