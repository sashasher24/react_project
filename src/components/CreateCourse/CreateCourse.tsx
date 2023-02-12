import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { v4 as uuidv4 } from 'uuid';

import './CreateCourse.css';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { mockedAuthorsList } from '../../constants';
import AuthorsList from './components/AuthorsList/AuthorsList';
import CourseAuthorsList from './components/CourseAuthorsList/CourseAuthorsList';

const CreateCourse: React.FC = () => {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [name, setName] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);

	console.log(`courseAuthors - ${courseAuthors}`);

	const addAuthors = (newName) => {
		const newAuthors = [...authors];
		if (newName.length >= 2) newAuthors.push({ id: uuidv4(), name: newName });
		setAuthors(newAuthors);
	};

	return (
		<div className='create_course_section'>
			<div className='create_course_header block'>
				<Input
					placeholderText='Enter title...'
					className='create_course_title_input'
					type='text'
					labelText='Title'
					id='create_course_title'
				/>
				<Button buttonText='Create course' class='create_course_button' />
			</div>
			<div className='create_course_description block'>
				<Input
					placeholderText='Enter description'
					className='create_course_description_input'
					type='textarea'
					labelText='Description'
					id='create_course_description_input'
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
						/>
						<Button
							buttonText='Create author'
							class='create_author_button'
							onClick={() => addAuthors(name)}
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
							onChange={(e) => setDuration(e.target.value)}
						/>
						<p className='enter_duration_output'>
							Duration: {getCourseDuration(duration)}
						</p>
					</div>
				</div>
				<div className='create_course_right_info_block'>
					<AuthorsList
						authors={authors}
						setCourseAuthors={setCourseAuthors}
						courseAuthors={courseAuthors}
					/>
					<CourseAuthorsList
						authors={courseAuthors}
						setCourseAuthors={setCourseAuthors}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
