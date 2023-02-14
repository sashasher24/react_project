import { Author } from '../components/CreateCourse/components/AuthorsList/AuthorsList';

export const getAuthors = (ids: string[], source: Author[]) => {
	const authors = [];

	source.forEach((author) => {
		if (ids.includes(author.id)) authors.push(author.name);
	});

	return authors.join(', ');
};
