import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import projectsReducer from './projectsReducer';

const reducers = combineReducers({
  projects: projectsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
