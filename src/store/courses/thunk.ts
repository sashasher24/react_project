import { deleteCourse, getAllCourses } from '../../services';
import { deleteCourseSuccess, fetchCoursesSuccess } from './actions';

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
