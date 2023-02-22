import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import './Header.css';
import LoginSection from './components/LoginSection/LoginSection';
import { Link, useLocation } from 'react-router-dom';

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

	const location = useLocation();

	return (
		<header>
			<Link to={`/courses`}>
				<Logo />
			</Link>
			{location.pathname !== '/login' &&
				location.pathname !== '/registration' && (
					<LoginSection
						isLoggedIn={loggedIn}
						userName={userName}
						logInFunction={logIn}
						logOutFunction={logOut}
					/>
				)}
		</header>
	);
};

export default Header;
