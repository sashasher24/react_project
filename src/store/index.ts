import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export const store = configureStore({
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	reducer: rootReducer,
});
