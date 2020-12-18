import { combineReducers } from 'redux'
import loggedInStateReducer from "./loggedInState";

import serverDetailsReducer from "./serverDetails";
import questionsReducer from "./questionsState";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import roleReducer from "./role";
import alertReducer from "./alert";
import togglesReducer from "./toggles";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loggedInState', 'role']
}

const allReducers = combineReducers({
    role: roleReducer,
    loggedInState: loggedInStateReducer,
    alert: alertReducer,
    toggles: togglesReducer,
    serverDetails: serverDetailsReducer,
    questionsState: questionsReducer
})

export default persistReducer(persistConfig, allReducers);