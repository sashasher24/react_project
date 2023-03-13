import { getMe } from '../../services';
import { getUserSuccess } from './actions';

export const getCurrentUser = () => {
	return async (dispatch) => {
		try {
			const user = await getMe();
			dispatch(getUserSuccess(user));
		} catch (e) {
			console.log(e);
		}
	};
};
