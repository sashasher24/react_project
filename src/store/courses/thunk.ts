import {
	addCourseRequest,
	deleteCourse,
	getAllCourses,
	getCourseRequest,
	putCourseRequest,
} from '../../services';
import {
	createCourseSuccess,
	deleteCourseSuccess,
	fetchCoursesSuccess,
	getCourseSuccess,
	updateCourseSuccess,
} from './actions';

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchCourses = () => {
	return async (dispatch) => {
		try {
			const courses = await getAllCourses();
			dispatch(fetchCoursesSuccess(courses)); //courses
		} catch (e) {
			console.log(e);
		}
	};
};

export const delCourse = (courseId: string) => {
	return async (dispatch) => {
		try {
			const courses = await deleteCourse(courseId);
			dispatch(deleteCourseSuccess(courses)); //courses
		} catch (e) {
			console.log(e);
		}
	};
};

export const createCourse = (courseData) => {
	return async (dispatch) => {
		try {
			await addCourseRequest(courseData);
			dispatch(createCourseSuccess());
		} catch (e) {
			console.log(e);
		}
	};
};

export const updateCourse = (courseId, courseData) => {
	return async (dispatch) => {
		try {
			await putCourseRequest(courseId, courseData);
			dispatch(updateCourseSuccess());
		} catch (e) {
			console.log(e);
		}
	};
};

export const getCourseById = (courseId: string) => {
	return async (dispatch) => {
		try {
			const course = await getCourseRequest(courseId);
			dispatch(getCourseSuccess());
		} catch (e) {
			console.log(e);
		}
	};
};
