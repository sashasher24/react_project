import React, { Dispatch, SetStateAction } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';

interface Author {
	id: string;
	name: string;
}

interface AuthorsListProps {
	authors: Author[];
	courseAuthors: string[];
	setCourseAuthors: Dispatch<SetStateAction<any[]>>;
}
const AuthorsList: React.FC<AuthorsListProps> = (props) => {
	const addAuthor = (author) => {
		const newAuthors = new Set(props.courseAuthors);
		newAuthors.add(author);
		props.setCourseAuthors([...newAuthors]);
	};

	return (
		<div className='create_course_authors_suggestions block main_info_block'>
			<p className='create_course_info_block_name'>Authors</p>
			<div className='suggested_authors_list'>
				{props.authors.map((author) => (
					<AuthorItem
						name={author.name}
						buttonText='Add author'
						onClick={() => addAuthor(author.name)}
					/>
				))}
			</div>
		</div>
	);
};

export default AuthorsList;
