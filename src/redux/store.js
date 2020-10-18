import {applyMiddleware, compose, createStore} from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export const persist = persistStore(store);

export default { store, persist };