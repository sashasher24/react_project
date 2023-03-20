import React from 'react';
import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../../../store/rootReducer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import CourseCard from '../components/CourseCard/CourseCard';
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

const initialState = {
	user: {
		isAuth: true,
		name: 'mock name',
		email: 'mock email',
		token: 'token',
		role: 'admin',
	},
	courses: [
		{
			id: 'course-id-1',
			title: 'course-title-1',
			duration: 123,
			creationDate: '9/3/2021',
			description: 'description-1',
			authors: ['author1'],
		},
		{
			id: 'course-id-2',
			title: 'course-title-2',
			duration: 123,
			creationDate: '9/3/2021',
			description: 'description-2',
			authors: ['author1'],
		},
	],
};

export const store = createStore(rootReducer, initialState);

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	Link: () => <div data-testid='link_title'>Title</div>,
}));

// jest.mock('../components/CourseCard/CourseCard', () => ({
// 	CourseCard: () => {
// 		initialState.courses.map((course) => {
// 			<CourseCard card={course} />;
// 		});
// 	},
// }));

describe('CourseCard component tests', () => {
	beforeEach(() => {
		render(<CourseCard card={initialState.courses[0]} />, { wrapper: Wrapper });
	});

	it('card has title', async () => {
		const title = await screen.getAllByTestId('link_title')[0];

		expect(title).toBeTruthy();
	});

	it('card has description', async () => {
		const description = await screen.getByTestId('card_description');

		expect(description).toBeTruthy();
	});

	it('card has authors', async () => {
		const authors = await screen.getByTestId('card_authors');

		expect(authors).toBeTruthy();
	});

	it('card has duration in the right format', async () => {
		const duration = await screen.getByTestId('card_duration');

		expect(duration).toBeTruthy();
		expect(duration).toHaveTextContent(/^\d{2}:\d{2} hours$/);
	});

	it('card has creation date in the right format', async () => {
		const creationDate = await screen.getByTestId('card_creation');

		expect(creationDate).toBeTruthy();
		expect(creationDate).toHaveTextContent(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
	});
});

// describe('Courses component tests', () => {
// 	beforeEach(() => {
// 		render(<Courses />, { wrapper: Wrapper });
// 	});

// 	it('has 2 courses', async () => {
// 		const courses = await screen.getAllByTestId('link_title');

// 		expect(courses).toHaveLength(2);
// 	});
// });
