import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userState } from '../../store/user/types';

export const PrivateRoute = ({ children }) => {
	const user = useSelector((state: { user: userState }) => state.user);

	const auth = user.role === 'admin';
	return auth ? children : <Navigate to='/courses' />;
};
