import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Login.css';

interface LoginProps {
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
	setUserName: Dispatch<SetStateAction<string>>;
}

type UserCredentials = {
	email: string;
	password: string;
};

const Login: React.FC<LoginProps> = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();

		const userCredentials: UserCredentials = {
			email: email,
			password: password,
		};

		axios
			.post('http://localhost:4000/login', userCredentials)
			.then((response) => {
				props.setIsLoggedIn(true);
				props.setUserName(response.data.user.name);
				console.log(response);
				navigate('/courses');
				localStorage.setItem('token', response.data.result);
			})
			.catch((e) => {
				alert(e.message);
				console.log(e.message);
			});
	}

	return (
		<form className='login_form' onSubmit={handleSubmit}>
			<h1>Login</h1>
			<Input
				labelText='Email'
				placeholderText='Enter email'
				className='enter_email_input'
				type='text'
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<Input
				labelText='Password'
				placeholderText='Enter password'
				className='enter_password_input'
				type='text'
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<Button buttonText='login' class='login_button' type='submit' />
			<p>
				If you don't have an account you can{' '}
				<Link to='/registration' className='link_to_registration'>
					Register
				</Link>
			</p>
		</form>
	);
};

export default Login;
