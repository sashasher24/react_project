import axios from 'axios';

//synchronous action creator
const fetchCoursesSuccess = (courses) => ({
	type: 'GET_COURSES',
	payload: courses,
});

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchCourses = () => {
	return async (dispatch) => {
		try {
			const posts = await axios.get('http://localhost:4000/courses/all');
			dispatch(fetchCoursesSuccess(posts.data.result)); //courses
		} catch (e) {
			console.log(e);
		}
	};
};

export const createCourse = (courseData) => {
	return {
		type: 'ADD_COURSE',
		payload: courseData,
	};
};
