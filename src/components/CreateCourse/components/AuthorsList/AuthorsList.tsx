import React, { Dispatch, SetStateAction } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';

export interface Author {
	id: string;
	name: string;
}

interface AuthorsListProps {
	authors: Author[];
	courseAuthors: Author[];
	setCourseAuthors: Dispatch<SetStateAction<any[]>>;
}
const AuthorsList: React.FC<AuthorsListProps> = (props) => {
	const addCourseAuthor = (author: Author) => {
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
						onClick={() => addCourseAuthor(author)}
					/>
				))}
			</div>
		</div>
	);
};

export default AuthorsList;
