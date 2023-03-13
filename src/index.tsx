import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';
import { fetchCourses } from './store/courses/thunk';
import { fetchAuthors } from './store/authors/thunk';
import { savedToken } from './constants';
import { getCurrentUser } from './store/user/thunk';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

store.dispatch(fetchAuthors());
store.dispatch(fetchCourses());
if (savedToken) {
	store.dispatch(getCurrentUser()); //only on refresh, not on login
}

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
