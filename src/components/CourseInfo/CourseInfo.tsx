import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { getAuthors } from '../../helpers/getAuthors';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { CourseCardProps } from '../Courses/components/CourseCard/CourseCard';
import { Author } from '../CreateCourse/components/AuthorsList/AuthorsList';

import './CourseInfo.css';

interface courseInfoProps {
	courses: CourseCardProps[];
	authors: Author[];
}

const CourseInfo: React.FC<courseInfoProps> = ({ courses, authors }) => {
	const { courseId } = useParams();

	const course = courses.find((el) => el.id === courseId);

	return (
		<div className='course_info_block'>
			<Link to='/courses'>
				<Button buttonText='< Back to courses' class='back_to_courses_button' />
			</Link>
			<h1 className='course_name'>{course.title}</h1>
			<div className='course_info_page_info'>
				<div className='course_card_main_info'>
					<div className='course_card_description'>{course.description}</div>
				</div>
				<div className='course_card_details'>
					<p>
						<span className='course_card_details_name'>ID: </span>
						{course.id}
					</p>
					<p>
						<span className='course_card_details_name'>Duration: </span>
						{getCourseDuration(course.duration)}
					</p>
					<p>
						<span className='course_card_details_name'>Created: </span>
						{course.creationDate}
					</p>
					<p>
						<span className='course_card_details_name'>Authors: </span>
						{getAuthors(course.authors, authors)
							.split(',')
							.map((el) => (
								<p className='author_name'>{el}</p>
							))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
