import React, { Dispatch, SetStateAction, useState } from 'react';
import Logo from './components/Logo/Logo';
import './Header.css';
import LoginSection from './components/LoginSection/LoginSection';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
	userName: string;
	setUserName: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = (props) => {
	const logOut = () => {
		props.setIsLoggedIn(false);
		localStorage.removeItem('token');
		props.setUserName('');
	};

	const { pathname } = useLocation();

	const isLoginOrRegistrationPage = () =>
		pathname === '/login' || pathname === '/registration';

	return (
		<header>
			<Link to={`/courses`}>
				<Logo />
			</Link>
			{!isLoginOrRegistrationPage() && (
				<LoginSection
					isLoggedIn={props.isLoggedIn}
					userName={props.userName}
					logOutFunction={logOut}
				/>
			)}
		</header>
	);
};

export default Header;
