import { userState } from './types';
import { savedToken } from '../../constants';
import { postRegister } from '../../services';

const userInitialState: userState = {
	isAuth: savedToken !== null,
	name: '',
	email: '',
	token: savedToken ? savedToken : '',
};

const userReducer = (
	state: userState = userInitialState,
	action
): userState => {
	const newUser: userState = Object.assign({}, userInitialState);

	switch (action.type) {
		case 'LOGIN':
			newUser.isAuth = true;
			newUser.name = action.payload.user.name;
			newUser.email = action.payload.user.email;
			newUser.token = action.payload.result;
			localStorage.setItem('token', action.payload.result);
			localStorage.setItem('userName', action.payload.user.name);
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
			postRegister(action.payload);
			return state;
		default: {
			return state; // return the default state here
		}
	}
};

export default userReducer;
