import axios from 'axios';

export const fetchCourses = () => {
	return {
		type: 'FETCH_COURSES',
	};
};

export const fetchCoursesSuccess = (data) => {
	return {
		type: 'FETCH_COURSES_SUCCESS',
		payload: data,
	};
};

export const fetchCoursesFailed = (data) => {
	return {
		type: 'FETCH_COURSES_FAILED',
		payload: data,
	};
};

export const fetchData = (url) => {
	return (dispatch) => {
		dispatch(fetchCourses());
		axios
			.get(url)
			.then((response) => {
				const data = response.data;
				dispatch(fetchCoursesSuccess(data));
			})
			.catch((error) => {
				const errorMessage = error.message;
				dispatch(fetchCoursesFailed(errorMessage));
			});
	};
};
