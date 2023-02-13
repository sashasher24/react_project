import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedCoursesList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [isCreateCourse, setIsCreateCourse] = useState(false);
	const [isFiltered, setIsFiltered] = useState(false);
	const [filterValue, setFilterValue] = useState('');
	const [filteredCourses, setFilteredCourses] = useState([]);
	const [courses, setCourses] = useState(mockedCoursesList);

	const openCreateMode = () => {
		setIsCreateCourse(true);
	};

	const filterCourses = (value) => {
		let filtered = courses;
		setIsFiltered(true);
		if (value === '') {
			setIsFiltered(false);
			return;
		}
		const regex = new RegExp(value, 'i');
		filtered = filtered.filter(
			(course) => regex.test(course.title) || regex.test(course.id)
		);
		setFilteredCourses(filtered);
	};

	return (
		<>
			<Header />
			<main>
				{isCreateCourse ? (
					<CreateCourse
						setIsCreateCourse={setIsCreateCourse}
						setCourses={setCourses}
						courses={courses}
					/>
				) : (
					<Courses
						courses={isFiltered ? filteredCourses : courses}
						createCourseSwitch={openCreateMode}
						filterCourses={filterCourses}
						filterValue={filterValue}
						setFilterValue={setFilterValue}
					/>
				)}
			</main>
		</>
	);
}

export default App;
