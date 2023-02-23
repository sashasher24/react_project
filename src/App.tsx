import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const [isFiltered, setIsFiltered] = useState(false);
	const [filterValue, setFilterValue] = useState('');
	const [filteredCourses, setFilteredCourses] = useState([]);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

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
				<Routes>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/courses/:courseId'
						element={<CourseInfo courses={courses} authors={authors} />}
					/>
					<Route
						path='/courses'
						element={
							<Courses
								courses={isFiltered ? filteredCourses : courses}
								filterCourses={filterCourses}
								filterValue={filterValue}
								setFilterValue={setFilterValue}
								authors={authors}
							/>
						}
					/>
					<Route
						path='/courses/add'
						element={
							<CreateCourse
								setCourses={setCourses}
								courses={courses}
								authors={authors}
								setAuthors={setAuthors}
							/>
						}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
