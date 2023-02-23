import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Registration.css';

const Registration: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();

		const newUser = {
			name: name,
			email: email,
			password: password,
		};

		axios
			.post('http://localhost:4000/register', newUser)
			.then((response) => {
				console.log(response);
				navigate('/login');
			})
			.catch((e) => {
				alert(e.message);
				console.log(e.message);
			});
	}

	return (
		<form className='registration_form' onSubmit={handleSubmit}>
			<h1>Registration</h1>
			<Input
				labelText='Name'
				placeholderText='Enter name'
				className='enter_name_input'
				type='text'
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
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
			<Button buttonText='Register' class='login_button' type='submit' />
			<p>
				If you already have an account you can <Link to='/login'>Login</Link>
			</p>
		</form>
	);
};

export default Registration;
