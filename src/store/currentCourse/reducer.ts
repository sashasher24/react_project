const courseInitialState = {};

const currentCourseReducer = (state = courseInitialState, action) => {
	switch (action.type) {
		case 'GET_COURSE':
			console.log(action.payload);
			return action.payload;
		default: {
			return state; // We return the default state here
		}
	}
};

export default currentCourseReducer;
