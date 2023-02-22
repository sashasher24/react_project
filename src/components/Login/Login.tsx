import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Login.css';

const Login: React.FC = () => {
	function handleSubmit(event) {
		alert('An essay was submitted: ');

		//should be getting a token in the result value of a response, to save it to localstorage
		//redirect to courses after successful login
		event.preventDefault();
	}

	return (
		<form className='login_form' onSubmit={handleSubmit}>
			<h1>Login</h1>
			<Input
				labelText='Email'
				placeholderText='Enter email'
				className='enter_email_input'
				type='text'
			/>
			<Input
				labelText='Password'
				placeholderText='Enter password'
				className='enter_password_input'
				type='text'
			/>
			<Button buttonText='login' class='login_button' type='submit' />
			<p>
				If you don't have an account you can{' '}
				<Link to='/registration'>Register</Link>
			</p>
		</form>
	);
};

export default Login;
