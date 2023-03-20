import React from 'react';

import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { getAuthors } from '../../../../helpers/getAuthors';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authorsState } from '../../../../store/authors/types';
import { userState } from '../../../../store/user/types';
import { delCourse, fetchCourses } from '../../../../store/courses/thunk';
import { store } from '../../../../store';
import { getCourse } from '../../../../store/currentCourse/thunk';

export interface CourseCardProps {
	id?: string;
	title?: string;
	duration?: number;
	creationDate?: string;
	description?: string;
	authors?: string[];
}

interface CourseCard {
	card: CourseCardProps;
}
const CourseCard: React.FC<CourseCard> = ({ card }) => {
	const authors = useSelector(
		(state: { authors: authorsState }) => state.authors
	);
	const user = useSelector((state: { user: userState }) => state.user);

	const displayAuthors = (): string => {
		const maxLength = 46;
		const result =
			getAuthors(card.authors, authors).length >= maxLength
				? getAuthors(card.authors, authors).substring(0, maxLength).trim() +
				  '...'
				: getAuthors(card.authors, authors);
		return result;
	};

	const onDeleteCourse = (courseId: string) => {
		//TODO: deletes course but still shows it till refresh
		store.dispatch(delCourse(courseId));
		store.dispatch(fetchCourses());
	};

	return (
		<div className='course_card' data-testid='course_card'>
			<div className='course_card_main_info'>
				<Link to={`/courses/${card.id}`}>
					<div className='course_card_title'>{card.title}</div>
				</Link>
				<div className='course_card_description' data-testid='card_description'>
					{card.description}
				</div>
			</div>
			<div className='course_card_details'>
				<p>
					<span className='course_card_details_name' data-testid='card_authors'>
						Authors:{' '}
					</span>
					{displayAuthors()}
				</p>
				<p>
					<span className='course_card_details_name'>Duration: </span>
					<span data-testid='card_duration'>
						{getCourseDuration(card.duration)}
					</span>
				</p>
				<p>
					<span className='course_card_details_name'>Creation: </span>
					<span data-testid='card_creation'>{card.creationDate}</span>
				</p>
				<div className='course_card_buttons'>
					<Link to={`/courses/${card.id}`}>
						<Button buttonText='Show course' class='show_course_button' />
					</Link>
					{user.role === 'admin' && (
						<div className='course_card_buttons'>
							<Button
								buttonText='Delete course'
								class='show_course_button'
								onClick={() => onDeleteCourse(card.id)}
							/>
							<Link to={`/courses/update/${card.id}`}>
								<Button
									buttonText='Edit course'
									class='show_course_button'
									onClick={() => store.dispatch(getCourse(card.id))}
								/>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
