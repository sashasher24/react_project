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

export const getUserSuccess = (payload) => {
	return {
		type: 'GET_USER_SUCCESS',
		payload: payload,
	};
};
