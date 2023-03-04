import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	user: userReducer,
	authors: authorsReducer,
	courses: coursesReducer,
});

export default rootReducer;
