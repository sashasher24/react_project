import { NewUser } from '../../components/Registration/Registration';

export const logIn = (response) => {
	return {
		type: 'LOGIN',
		payload: response,
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT',
	};
};

export const register = (credentials: NewUser) => {
	return {
		type: 'REGISTER',
		payload: credentials,
	};
};
