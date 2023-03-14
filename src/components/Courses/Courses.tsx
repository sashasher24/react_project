import React, { Dispatch, SetStateAction, useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import './Courses.css';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { coursesState } from '../../store/courses/types';
import { fetchCourses } from '../../store/courses/thunk';
import { store } from '../../store';

interface CoursesProps {
	filterCourses: (value: string) => void;
	filterValue: string;
	setFilterValue: Dispatch<SetStateAction<string>>;
}
const Courses: React.FC<CoursesProps> = (props) => {
	const courses = useSelector(
		(state: { courses: coursesState }) => state.courses
	);

	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(fetchCourses());
	}, [dispatch]);

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
				{!courses ? (
					<p>No courses at the moment ...</p>
				) : (
					courses.map((course) => <CourseCard card={course} />)
				)}
			</div>
		</div>
	);
};

export default Courses;
