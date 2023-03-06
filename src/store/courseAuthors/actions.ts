export const addCourseAuthor = (authorData) => {
	return {
		type: 'ADD_COURSE_AUTHOR',
		payload: authorData,
	};
};

export const deleteCourseAuthor = (authorData) => {
	return {
		type: 'DELETE_COURSE_AUTHOR',
		payload: authorData,
	};
};

export const clearCourseAuthors = () => {
	return {
		type: 'CLEAR_COURSE_AUTHORS',
	};
};
