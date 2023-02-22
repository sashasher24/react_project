import React, { Dispatch, SetStateAction } from 'react';
import CourseCard, {
	CourseCardProps,
} from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import './Courses.css';
import Button from '../../common/Button/Button';
import { Author } from '../CreateCourse/components/AuthorsList/AuthorsList';
import { Link } from 'react-router-dom';

interface CoursesProps {
	courses: CourseCardProps[];
	filterCourses: (value: string) => void;
	filterValue: string;
	setFilterValue: Dispatch<SetStateAction<string>>;
	authors: Author[];
}
const Courses: React.FC<CoursesProps> = (props) => {
	return (
		<div className='main_couses_section'>
			<div className='main_couses_section-header'>
				<SearchBar
					filterCourses={props.filterCourses}
					filterValue={props.filterValue}
					setFilterValue={props.setFilterValue}
				/>
				<Link to='/courses/add'>
					<Button buttonText='Add new course' class='add_course_button' />
				</Link>
			</div>
			<div className='main_couses_section-courses'>
				{props.courses.map((course) => (
					<CourseCard card={course} authors={props.authors} />
				))}
			</div>
		</div>
	);
};

export default Courses;
