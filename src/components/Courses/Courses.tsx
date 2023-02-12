import React, { Dispatch, SetStateAction } from 'react';
import CourseCard, {
	CourseCardProps,
} from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import './Courses.css';
import Button from '../../common/Button/Button';

interface CoursesProps {
	courses: CourseCardProps[];
	createCourseSwitch: React.MouseEventHandler<HTMLButtonElement>;
	filterCourses: (value: any) => void;
	filterValue: string;
	setFilterValue: Dispatch<SetStateAction<string>>;
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
				<Button
					buttonText='Add new course'
					class='add_course_button'
					onClick={props.createCourseSwitch}
				/>
			</div>
			<div className='main_couses_section-courses'>
				{props.courses.map((course) => (
					<CourseCard card={course} />
				))}
			</div>
		</div>
	);
};

export default Courses;
