// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Header from '../Header';

import Header from '../Header';
// import * as ReactDOM from 'react-dom';
import React from 'react';
// import { configureStore } from '@reduxjs/toolkit';
// // import rootReducer from '../../../store/rootReducer';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

// jest.mock("./api", () => ({
//     getUserName: () => ({ name: "mock name" })
//   }));

//   const initialState = {
//     user: {
//         isAuth: true,
//         name: "mock name",
//         email: 'mock email',
//         token: 'token',
//         role: 'admin',
//     },
// };

// export const store = configureStore({
// 	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// 	initialState,
// });

// const Wrapper = ({ children }) => (
//     <Provider store={store}>{children}</Provider>
// );

// describe("User", () => {
//     it("should display user name", async () => {
//       render(<Header />, { wrapper: Wrapper });

//       const userName = await screen.findByText("mock name");

//       expect(userName).toBeTruthy();
//     });
//   });

describe('Header component tests', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.appendChild(container);
		render(<Header />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it('correctly renders initial document', () => {
		const logo = container.getElementsByClassName('header_logo');
		expect(logo).toHaveLength(1);
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

// export function divide(x, y) {
//     if (y === 0) {
//         throw new Error("You can't divide by zero.");
//     }
//     return Math.round(x / y)
// }

// describe(' divide function', () => {
//     describe('when given to integers', () => {
//         it('should return a division result', () => {

//         })
//     })
// })

// it("should return a division result", () => {
//     const [x, y, expected] = [40, 4, 10];
//     const result = divide(x, y);
//     expect(result).toEqual(expected);
// });
