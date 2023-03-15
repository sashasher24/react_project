//synchronous action creator
export const fetchCoursesSuccess = (courses) => ({
	type: 'GET_COURSES',
	payload: courses,
});

export const createCourseSuccess = () => {
	return {
		type: 'ADD_COURSE',
	};
};

export const deleteCourseSuccess = (courses) => {
	return {
		type: 'DELETE_COURSE',
		payload: courses,
	};
};

export const getCourseSuccess = () => {
	return {
		type: 'GET_COURSE',
	};
};

export const updateCourseSuccess = () => {
	return {
		type: 'UPDATE_COURSE',
	};
};
