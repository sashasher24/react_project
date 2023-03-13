import { getAllAuthors } from '../../services';
import { fetchAuthorsSuccess } from './actions';

export const fetchAuthors = () => {
	return async (dispatch) => {
		try {
			const authors = await getAllAuthors();
			dispatch(fetchAuthorsSuccess(authors)); //authors
		} catch (e) {
			console.log(e);
		}
	};
};
