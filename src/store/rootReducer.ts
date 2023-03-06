import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import courseAuthorsReducer from './courseAuthors/reducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	user: userReducer,
	authors: authorsReducer,
	courseAuthors: courseAuthorsReducer,
	courses: coursesReducer,
});

export default rootReducer;
