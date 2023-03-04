import { userState } from './types';
import axios from 'axios';

const userInitialState: userState = {
	isAuth: localStorage.getItem('token') !== null,
	name: '',
	email: '',
	token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
};

const userReducer = (
	state: userState = userInitialState,
	action
): userState => {
	const newUser: userState = Object.assign({}, userInitialState);

	switch (action.type) {
		case 'LOGIN':
			axios
				.post('http://localhost:4000/login', action.payload)
				.then((response) => {
					newUser.isAuth = true;
					newUser.name = response.data.user.name; // not working ??
					newUser.email = response.data.user.email; // not working ??
					newUser.token = response.data.result;
					console.log(response);
					localStorage.setItem('token', response.data.result);
					localStorage.setItem('userName', response.data.user.name);
				})
				.catch((e) => {
					alert(e.message);
					console.log(e.message);
				});
			console.log('logIn');
			console.log(`new user - ${JSON.stringify(newUser)}`);
			return Object.assign({}, state, newUser);
		case 'LOGOUT':
			newUser.isAuth = false;
			newUser.name = '';
			newUser.email = '';
			newUser.token = '';
			localStorage.removeItem('token');
			localStorage.removeItem('userName');
			console.log('logOut');
			return Object.assign({}, state, newUser);
		case 'REGISTER':
			axios
				.post('http://localhost:4000/register', action.payload)
				.then((response) => {
					console.log(response);
				})
				.catch((e) => {
					alert(e.message);
					console.log(e.message);
				});
			return state;
		default: {
			return state; // return the default state here
		}
	}
};

export default userReducer;
