import Header from '../Header';
import React from 'react';
import { configureStore, createStore } from '@reduxjs/toolkit';
import rootReducer from '../../../store/rootReducer';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

// import { mockLocalStorage } from '../../../helpers/mockLocalStorage';

// const { getItemMock, setItemMock } = mockLocalStorage();

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

// it('fetches something from localStorage', () => {
//     getItemMock.mockReturnValue('bar');
//     render(<Component />);
//     expect(getItemMock).toHaveBeenCalled();
//     expect(getByText(/bar/i)).toBeInTheDocument()
// });

jest.mock('../components/LoginSection/LoginSection', () => ({
	LoginSection: () => <div data-testId='mock div' />,
}));

const localStorageMock = (function () {
	let store = {};

	return {
		getItem(key) {
			return store[key];
		},

		setItem(key, value) {
			store[key] = value;
		},

		clear() {
			store = {};
		},

		removeItem(key) {
			delete store[key];
		},

		getAll() {
			return store;
		},
	};
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const setLocalStorage = (id, data) => {
	window.localStorage.setItem(id, JSON.stringify(data));
};

describe('Header component tests', () => {
	it('correctly renders initial document', async () => {
		setLocalStorage('token', 'tokenhgdsswghybvg');
		// getItemMock.mockReturnValue('token');
		render(<Header />, { wrapper: Wrapper });
		// expect(getItemMock).toHaveBeenCalled();

		const userName = await screen.findByText('mock name');

		expect(userName).toBeTruthy();
		// render(<Header />);

		// // const logo = container.getElementsByClassName('header_logo');
		// expect(screen.getByText('Test Name')).toBeInTheDocument();	});
	});
});

// describe('Header', () => {

//     // test('renders Header component', () => {
//     // });

//     it('has logo', () => {
//         render( < Header / > );

//         expect(screen.getByTestId("header_logo")).toBeInTheDocument()
//     })
// });
