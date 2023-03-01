import React from 'react';
import UserName from '../UserName/UserName';
import Button from '../../../../common/Button/Button';

import './LoginSection.css';
import { Link } from 'react-router-dom';

interface LoginSectionProps {
	isLoggedIn: boolean;
	userName: string;
	logOutFunction: () => void;
}

const LoginSection: React.FC<LoginSectionProps> = (props) => {
	return (
		<div className='header_login_section'>
			{props.isLoggedIn && <UserName name={props.userName} />}
			<Link to={'/login'}>
				<Button
					buttonText={props.isLoggedIn ? 'Log Out' : 'Log In'}
					class='header_login_button'
					onClick={props.isLoggedIn && props.logOutFunction}
				/>
			</Link>
		</div>
	);
};

export default LoginSection;
