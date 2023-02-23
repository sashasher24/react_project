import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Registration.css';

const Registration: React.FC = () => {
	const [registered, setRegistered] = useState(true);

	function handleSubmit(event) {
		event.preventDefault();

		//change so that isRegistered will be changing based on backend logic
		setRegistered(!registered);
	}

	const navigate = useNavigate();

	useEffect(() => {
		if (registered) {
			navigate('/login');
		}
	}, [registered]);

	return (
		<form className='registration_form' onSubmit={handleSubmit}>
			<h1>Registration</h1>
			<Input
				labelText='Name'
				placeholderText='Enter name'
				className='enter_name_input'
				type='text'
			/>
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
			<Button buttonText='Register' class='login_button' type='submit' />
			<p>
				If you already have an account you can <Link to='/login'>Login</Link>
			</p>
		</form>
	);
};

export default Registration;
