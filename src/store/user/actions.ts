import { UserCredentials } from '../../components/Login/Login';
import { NewUser } from '../../components/Registration/Registration';

export const logIn = (credentials: UserCredentials) => {
	return {
		type: 'LOGIN',
		payload: credentials,
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
