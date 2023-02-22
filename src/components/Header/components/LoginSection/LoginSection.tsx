import React from 'react';
import UserName from '../UserName/UserName';
import Button from '../../../../common/Button/Button';

import './LoginSection.css';
import { Link } from 'react-router-dom';

interface LoginSectionProps {
	isLoggedIn: boolean;
	userName: string;
	logInFunction: () => void;
	logOutFunction: () => void;
}

const LoginSection: React.FC<LoginSectionProps> = (props) => {
	//navigate to login page when clocking logOut and remove token from localStorage
	//useLocation hook to not show this section on login and registration page
	return (
		<div className='header_login_section'>
			{props.isLoggedIn && <UserName name={props.userName} />}
			<Link to={props.isLoggedIn ? './' : '/login'}>
				<Button
					buttonText={props.isLoggedIn ? 'Log Out' : 'Log In'}
					class='header_login_button'
					onClick={
						props.isLoggedIn ? props.logOutFunction : props.logInFunction
					}
				/>
			</Link>
		</div>
	);
};

export default LoginSection;
