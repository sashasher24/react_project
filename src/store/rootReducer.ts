import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import courseAuthorsReducer from './courseAuthors/reducer';
import { combineReducers } from '@reduxjs/toolkit';
import currentCourseReducer from './currentCourse/reducer';

const rootReducer = combineReducers({
	user: userReducer,
	authors: authorsReducer,
	courseAuthors: courseAuthorsReducer,
	courses: coursesReducer,
	currentCourse: currentCourseReducer,
});

export default rootReducer;
