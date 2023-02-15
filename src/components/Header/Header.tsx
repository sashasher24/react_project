import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import './Header.css';
import LoginSection from './components/LoginSection/LoginSection';

const Header: React.FC = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');

	const logIn = () => {
		setLoggedIn(true);
		setUserName('Sasha');
	};

	const logOut = () => {
		setLoggedIn(false);
		setUserName('');
	};

	return (
		<header>
			<Logo />
			<LoginSection
				isLoggedIn={loggedIn}
				userName={userName}
				logInFunction={logIn}
				logOutFunction={logOut}
			/>
		</header>
	);
};

export default Header;
