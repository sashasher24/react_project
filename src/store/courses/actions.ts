//synchronous action creator
export const fetchCoursesSuccess = (courses) => ({
	type: 'GET_COURSES',
	payload: courses,
});

export const createCourse = (courseData) => {
	return {
		type: 'ADD_COURSE',
		payload: courseData,
	};
};

export const deleteCourseSuccess = (courses) => {
	return {
		type: 'DELETE_COURSE',
		payload: courses,
	};
};
