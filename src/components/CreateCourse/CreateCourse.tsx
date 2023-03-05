import React, { Dispatch, SetStateAction, useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { v4 as uuidv4 } from 'uuid';

import './CreateCourse.css';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import AuthorsList, { Author } from './components/AuthorsList/AuthorsList';
import CourseAuthorsList from './components/CourseAuthorsList/CourseAuthorsList';
import { CourseCardProps } from '../Courses/components/CourseCard/CourseCard';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authorsState } from '../../store/authors/types';
import { createAuthor } from '../../store/authors/actions';

interface CreateCourseProps {
	setCourses: Dispatch<SetStateAction<CourseCardProps[]>>;
	courses: CourseCardProps[];
	setAuthors: Dispatch<SetStateAction<Author[]>>;
}
const CreateCourse: React.FC<CreateCourseProps> = (props) => {
	const [name, setName] = useState('');
	const [duration, setDuration] = useState(0);
	const [courseTitle, setCourseTitle] = useState('');
	const [courseDescription, setCourseDescription] = useState('');

	const authors = useSelector(
		(state: { authors: authorsState }) => state.authors
	);
	const courseAuthors = useSelector(
		(state: { courseAuthors: authorsState }) => state.courseAuthors
	);

	const createCourse = () => {
		const newCourses = [...props.courses];
		newCourses.push({
			id: uuidv4(),
			title: courseTitle,
			description: courseDescription,
			creationDate: formatCreationDate(new Date()),
			duration: duration,
			authors: courseAuthors.map((author) => author.id),
		});
		props.setCourses(newCourses);
	};

	const dispatch = useDispatch();

	const addAuthor = (name) => {
		const newAuthor = { name: name, id: uuidv4() };
		dispatch(createAuthor(newAuthor));
		setName('');
	};

	const isEnabled = (): boolean => {
		return (
			courseTitle.length >= 2 &&
			courseDescription.length >= 2 &&
			courseAuthors.length != 0 &&
			duration != 0
		);
	};

	return (
		<form>
			<div className='create_course_section'>
				<div className='create_course_header block'>
					<Input
						placeholderText='Enter title...'
						className='create_course_title_input'
						type='text'
						labelText='Title'
						id='create_course_title'
						onChange={(e) => setCourseTitle(e.target.value)}
						required={true}
						value={courseTitle}
					/>
					<Link to='/courses'>
						<Button
							buttonText='Create course'
							class='create_course_button'
							onClick={createCourse}
							type='submit'
							disabled={!isEnabled()}
						/>
					</Link>
				</div>
				<div className='create_course_description block'>
					<Input
						placeholderText='Enter description'
						className='create_course_description_input'
						type='textarea'
						labelText='Description'
						id='create_course_description_input'
						onChangeTextArea={(e) => setCourseDescription(e.target.value)}
						required={true}
					/>
				</div>
				<div className='create_course_main_info'>
					<div className='create_course_left_info_block'>
						<div className='create_course_add_author block main_info_block'>
							<p className='create_course_info_block_name'>Add author</p>
							<Input
								placeholderText='Enter author name...'
								className='enter_author_name_input'
								type='text'
								labelText='Author name'
								id='enter_author_name_input'
								minLength={2}
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
							<Button
								buttonText='Create author'
								class='create_author_button'
								onClick={() => addAuthor(name)}
							/>
						</div>
						<div className='create_course_add_duration block main_info_block'>
							<p className='create_course_info_block_name'>Duration</p>
							<Input
								placeholderText='Enter duration in minutes...'
								className='enter_duration_input'
								type='text'
								labelText='Duration'
								id='enter_duration_input'
								onChange={(e) => setDuration(+e.target.value)}
								required={true}
								value={duration === 0 ? '' : duration.toString()}
							/>
							<p className='enter_duration_output'>
								Duration: {getCourseDuration(duration)}
							</p>
						</div>
					</div>
					<div className='create_course_right_info_block'>
						<AuthorsList authors={authors} />
						<CourseAuthorsList authors={courseAuthors} />
					</div>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
