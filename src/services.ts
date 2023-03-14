import axios from 'axios';
import { UserCredentials } from './components/Login/Login';
import { NewUser } from './components/Registration/Registration';

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
				Authorization: localStorage.getItem('token'),
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
				Authorization: localStorage.getItem('token'),
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
		.delete(`http://localhost:4000/courses/${courseId}`, {
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		}) //TODO: check if the request is correct
		.then((response) => {
			console.log(`delete course - ${response}`);
		})
		.catch((e) => {
			alert(e.message);
			console.log(e.message);
		});
};

export const addCourseRequest = async (newCourseData) => {
	try {
		const response = await axios.post(
			'http://localhost:4000/courses/add',
			newCourseData,
			{
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}
		);
		return response;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const putCourseRequest = async (courseId, updatedData) => {
	try {
		const response = await axios.put(
			`http://localhost:4000/courses/${courseId}`,
			updatedData,
			{
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}
		);
		return response;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const addAuthorRequest = async (authorData) => {
	try {
		const response = await axios.post(
			'http://localhost:4000/authors/add',
			authorData,
			{
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}
		);
		return response;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};

export const getCourseRequest = async (courseId: string) => {
	try {
		const response = await axios.get(
			`http://localhost:4000/courses/${courseId}`
		);
		return response;
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
};
