import React from 'react';

import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { getAuthors } from '../../../../helpers/getAuthors';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authorsState } from '../../../../store/authors/types';
import { deleteCourse } from '../../../../store/courses/actions';

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

	const dispatch = useDispatch();

	const displayAuthors = (): string => {
		const maxLength = 46;
		const result =
			getAuthors(card.authors, authors).length >= maxLength
				? getAuthors(card.authors, authors).substring(0, maxLength).trim() +
				  '...'
				: getAuthors(card.authors, authors);
		return result;
	};

	return (
		<div className='course_card'>
			<div className='course_card_main_info'>
				<Link to={`/courses/${card.id}`}>
					<div className='course_card_title'>{card.title}</div>
				</Link>
				<div className='course_card_description'>{card.description}</div>
			</div>
			<div className='course_card_details'>
				<p>
					<span className='course_card_details_name'>Authors: </span>
					{displayAuthors()}
				</p>
				<p>
					<span className='course_card_details_name'>Duration: </span>
					{getCourseDuration(card.duration)}
				</p>
				<p>
					<span className='course_card_details_name'>Creation: </span>
					{card.creationDate}
				</p>
				<div className='course_card_buttons'>
					<Link to={`/courses/${card.id}`}>
						<Button buttonText='Show course' class='show_course_button' />
					</Link>
					<Button
						buttonText='Delete course'
						class='show_course_button'
						onClick={() => dispatch(deleteCourse(card))}
					/>
					<Button buttonText='Edit course' class='show_course_button' />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
