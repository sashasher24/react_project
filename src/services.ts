import axios from 'axios';
import { UserCredentials } from './components/Login/Login';
import { NewUser } from './components/Registration/Registration';
import { savedToken } from './constants';

export const getAllCourses = async () => {
	try {
		const { data } = await axios.get('http://localhost:4000/courses/all');
		return data.result;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const getAllAuthors = async () => {
	try {
		const authors = await axios.get('http://localhost:4000/authors/all');
		return authors.data.result;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const postLogin = async (UserCredentials: UserCredentials) => {
	try {
		const { data } = await axios.post(
			'http://localhost:4000/login',
			UserCredentials
		);
		return data;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const postRegister = async (credentials: NewUser) => {
	await axios
		.post('http://localhost:4000/register', credentials)
		.then((response) => {
			console.log(response);
		})
		.catch((e) => {
			alert(e.message);
			console.log(e.message);
		});
};

export const getMe = async () => {
	try {
		const { data } = await axios.get('http://localhost:4000/users/me', {
			headers: {
				Authorization: savedToken,
			},
		});
		return data.result;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const deleteUser = async () => {
	await axios
		.delete('http://localhost:4000/logout', {
			headers: {
				Authorization: savedToken,
			},
		})
		.then((response) => {
			console.log(response);
		})
		.catch((e) => {
			alert(e.message);
			console.log(e.message);
		});
};

export const deleteCourse = async (courseId: string) => {
	await axios
		.delete(`http://localhost:4000/courses/${courseId}`) //TODO: check if the request is correct
		.then((response) => {
			console.log(`delete course - ${response}`);
		})
		.catch((e) => {
			alert(e.message);
			console.log(e.message);
		});
};
