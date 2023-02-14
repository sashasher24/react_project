import React from 'react';

import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { getAuthors } from '../../../../helpers/getAuthors';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { Author } from '../../../CreateCourse/components/AuthorsList/AuthorsList';

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
	authors: Author[];
}
const CourseCard: React.FC<CourseCard> = ({ card, authors }) => {
	return (
		<div className='course_card'>
			<div className='course_card_main_info'>
				<div className='course_card_title'>{card.title}</div>
				<div className='course_card_description'>{card.description}</div>
			</div>
			<div className='course_card_details'>
				<p>
					<span className='course_card_details_name'>Authors: </span>
					{getAuthors(card.authors, authors)}
				</p>
				<p>
					<span className='course_card_details_name'>Duration: </span>
					{getCourseDuration(card.duration)}
				</p>
				<p>
					<span className='course_card_details_name'>Creation: </span>
					{card.creationDate}
				</p>
				<Button buttonText='Show course' class='show_course_button' />
			</div>
		</div>
	);
};

export default CourseCard;
