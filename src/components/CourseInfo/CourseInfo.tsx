import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

const CourseInfo: React.FC = () => {
	return (
		<div className='course_info_block'>
			<Link to='/courses'>
				<Button buttonText='< Back to courses' class='back_to_courses_button' />
			</Link>
			<h1 className='course_name'>COURSE NAME</h1>
			<div className='course_info_page_info'>
				reuse elements from courses with information
			</div>
		</div>
	);
};

export default CourseInfo;
