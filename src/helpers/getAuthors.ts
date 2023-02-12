import { mockedAuthorsList } from '../constants';

export const getAuthors = (ids: string[]) => {
	const authors = [];

	mockedAuthorsList.forEach((author) => {
		if (ids.includes(author.id)) authors.push(author.name);
	});

	return authors.join(', ');
};
