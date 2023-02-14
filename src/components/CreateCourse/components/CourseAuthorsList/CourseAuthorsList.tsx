import React, { Dispatch, SetStateAction } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import { Author } from '../AuthorsList/AuthorsList';

interface CourseAuthorsListProps {
	authors: Author[];
	setCourseAuthors: Dispatch<SetStateAction<any[]>>;
}
const CourseAuthorsList: React.FC<CourseAuthorsListProps> = (props) => {
	const deleteAuthor = (author) => {
		console.log(`author - ${author}`);
		const authors = [...props.authors];
		console.log(authors);
		const index = authors.indexOf(author);

		const newAuthors = authors.splice(index, 1);
		props.setCourseAuthors(newAuthors);
		console.log(`newAuthors ${newAuthors}`);
	};

	return (
		<div className='create_course_authors block main_info_block'>
			<p className='create_course_info_block_name'>Course authors</p>
			{props.authors?.length ? (
				props.authors.map((author) => (
					<AuthorItem
						name={author.name}
						buttonText='Delete author'
						onClick={() => deleteAuthor(author)}
					/>
				))
			) : (
				<p>Authors list is empty ...</p>
			)}
		</div>
	);
};

export default CourseAuthorsList;
