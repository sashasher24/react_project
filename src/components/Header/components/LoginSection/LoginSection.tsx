import React from 'react';
import UserName from '../UserName/UserName';
import Button from '../../../../common/Button/Button';

import './LoginSection.css';
import { Link } from 'react-router-dom';
import { logout } from '../../../../store/user/actions';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux';
import { userState } from '../../../../store/user/types';
import { deleteUser } from '../../../../services';

const LoginSection: React.FC = () => {
	const dispatch = useDispatch();

	const user = useSelector((state: { user: userState }) => state.user);

	return (
		<div className='header_login_section'>
			{user.isAuth && <UserName name={user.name} />}
			<Link to={'/login'}>
				<Button
					buttonText={user.isAuth ? 'Log Out' : 'Log In'}
					class='header_login_button'
					onClick={() => {
						dispatch(logout());
						deleteUser();
						localStorage.removeItem('token');
					}}
				/>
			</Link>
		</div>
	);
};

export default LoginSection;
