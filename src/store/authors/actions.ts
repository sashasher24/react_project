//synchronous action creator
export const fetchAuthorsSuccess = (authors) => ({
	type: 'FETCH_AUTHORS_SUCCESS',
	payload: authors,
});

export const addAuthorSuccess = () => {
	return {
		type: 'CREATE_AUTHOR',
	};
};
