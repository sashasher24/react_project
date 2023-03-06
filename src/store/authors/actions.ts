//synchronous action creator
export const fetchAuthorsSuccess = (authors) => ({
	type: 'FETCH_AUTHORS_SUCCESS',
	payload: authors,
});

export const createAuthor = (authorData) => {
	return {
		type: 'CREATE_AUTHOR',
		payload: authorData,
	};
};
