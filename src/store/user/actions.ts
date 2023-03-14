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

export const register = () => {
	return {
		type: 'REGISTER',
	};
};

export const getUserSuccess = (payload) => {
	return {
		type: 'GET_USER_SUCCESS',
		payload: payload,
	};
};
