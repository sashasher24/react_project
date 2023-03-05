import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCourseAuthor } from '../../../../store/courseAuthors/actions';
import AuthorItem from '../AuthorItem/AuthorItem';
import { Author } from '../AuthorsList/AuthorsList';

interface CourseAuthorsListProps {
	authors: Author[];
}

const CourseAuthorsList: React.FC<CourseAuthorsListProps> = (props) => {
	const dispatch = useDispatch();

	return (
		<div className='create_course_authors block main_info_block'>
			<p className='create_course_info_block_name'>Course authors</p>
			{props.authors?.length ? (
				props.authors.map((author) => (
					<AuthorItem
						name={author.name}
						buttonText='Delete author'
						onClick={() => dispatch(deleteCourseAuthor(author))}
					/>
				))
			) : (
				<p>Authors list is empty ...</p>
			)}
		</div>
	);
};

export default CourseAuthorsList;
