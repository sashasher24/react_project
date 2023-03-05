import React from 'react';
import { useDispatch } from 'react-redux';
import AuthorItem from '../AuthorItem/AuthorItem';
import { AnyAction } from 'redux';
import { addCourseAuthor } from '../../../../store/courseAuthors/actions';

export interface Author {
	id: string;
	name: string;
}

interface AuthorsListProps {
	authors: Author[];
}

const AuthorsList: React.FC<AuthorsListProps> = (props) => {
	const dispatch = useDispatch();

	return (
		<div className='create_course_authors_suggestions block main_info_block'>
			<p className='create_course_info_block_name'>Authors</p>
			<div className='suggested_authors_list'>
				{props.authors.map((author) => (
					<AuthorItem
						name={author.name}
						buttonText='Add author'
						onClick={() => dispatch(addCourseAuthor(author))}
					/>
				))}
			</div>
		</div>
	);
};

export default AuthorsList;
