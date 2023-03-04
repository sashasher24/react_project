import React from 'react';
import Logo from './components/Logo/Logo';
import './Header.css';
import LoginSection from './components/LoginSection/LoginSection';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
	const { pathname } = useLocation();

	const isLoginOrRegistrationPage = () =>
		pathname === '/login' || pathname === '/registration';

	return (
		<header>
			<Link to={`/courses`}>
				<Logo />
			</Link>
			{!isLoginOrRegistrationPage() && <LoginSection />}
		</header>
	);
};

export default Header;
