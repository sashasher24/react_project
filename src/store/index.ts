import rootReducer from './rootReducer';
// import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from "redux-devtools-extension";

export const store = configureStore({ reducer: rootReducer });
