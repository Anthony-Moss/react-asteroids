import { createStore, combineReducers } from 'redux';
import asteroidsReducer from './reducers/asteroidsReducer';
import playerReducer from './reducers/playerReducer';
import gameReducer from './reducers/gameReducer'


const rootReducer = combineReducers({
    player: playerReducer,
    asteroids: asteroidsReducer,
    game: gameReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store