import { getCourseRequest } from '../../services';
import { fetchCourseSuccess } from './actions';

export const getCourse = (courseId: string) => {
	return async (dispatch) => {
		try {
			const { data } = await getCourseRequest(courseId);
			dispatch(fetchCourseSuccess(data.result)); //course
		} catch (e) {
			console.log(e);
		}
	};
};
