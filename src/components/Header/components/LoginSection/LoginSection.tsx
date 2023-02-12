import React from 'react';
import UserName from '../UserName/UserName';
import Button from '../../../../common/Button/Button';

import './LoginSection.css';

interface LoginSectionProps {
	isLoggedIn: boolean;
	userName: string;
	logInFunction: () => void;
	logOutFunction: () => void;
}

const LoginSection: React.FC<LoginSectionProps> = (props) => {
	return (
		<div className='header_login_section'>
			{props.isLoggedIn && <UserName name={props.userName} />}
			<Button
				buttonText={props.isLoggedIn ? 'Log Out' : 'Log In'}
				class='header_login_button'
				onClick={props.isLoggedIn ? props.logOutFunction : props.logInFunction}
			/>
		</div>
	);
};

export default LoginSection;
