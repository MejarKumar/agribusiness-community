import { combineReducers } from 'redux';
// import todoReducer from './todoReducer';
import blogReducer from './blogReducers';
import authReducer from './authReducers';

const rootReducer = combineReducers({
    // todos: todoReducer,
    auth: authReducer,
    blogs: blogReducer,
})

export default rootReducer;