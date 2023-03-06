import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { postLogin } from '../../services';
import { logIn } from '../../store/user/actions';

import './Login.css';

export type UserCredentials = {
	email: string;
	password: string;
};

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	async function handleSubmit(event) {
		const userCredentials: UserCredentials = {
			email: email,
			password: password,
		};
		event.preventDefault();
		const response = await postLogin(userCredentials);
		dispatch(logIn(response));
		navigate('/courses');
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
