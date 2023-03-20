import Header from '../Header';
import React from 'react';
import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../../../store/rootReducer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import UserName from '../components/UserName/UserName';

const initialState = {
	user: {
		isAuth: true,
		name: 'mock name',
		email: 'mock email',
		token: 'token',
		role: 'admin',
	},
};

export const store = createStore(rootReducer, initialState);

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

jest.mock('../components/LoginSection/LoginSection', () => ({
	LoginSection: () => <div data-testid='user_name'></div>,
}));

jest.mock('../components/UserName/UserName', () => ({
	UserName: () => <div data-testid='name'>{initialState.user.name}</div>,
}));

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		pathname: '/login',
	}),
	Link: () => <div data-testid='Link_Logo'>Logo</div>,
}));

describe('Header component tests', () => {
	beforeEach(() => {
		render(<Header />, { wrapper: Wrapper });
	});

	it('header has logo', async () => {
		const logo = await screen.getByTestId('Link_Logo');

		expect(logo).toBeTruthy();
	});

	// it('header has user name on courses page', async () => {
	// 	const userName = await screen.getByTestId('user_name');

	// 	expect(userName).toBeTruthy();
	// });
});
