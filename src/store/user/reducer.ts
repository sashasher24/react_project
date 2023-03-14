import { userState } from './types';
import { savedToken } from '../../constants';

const userInitialState: userState = {
	isAuth: savedToken !== null,
	name: '',
	email: '',
	token: savedToken ? savedToken : '',
	role: '',
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
			newUser.role = action.payload.role ? action.payload.role : 'user';
			return Object.assign({}, state, newUser);
		case 'LOGOUT':
			newUser.isAuth = false;
			newUser.name = '';
			newUser.email = '';
			newUser.token = '';
			newUser.role = '';
			console.log('logOut');
			return Object.assign({}, state, newUser);
		case 'REGISTER':
			return state;
		case 'GET_USER_SUCCESS':
			newUser.name = action.payload.name;
			newUser.email = action.payload.email;
			newUser.role = action.payload.role;
			return Object.assign({}, state, newUser);
		default: {
			return state; // return the default state here
		}
	}
};

export default userReducer;
