import { combineReducers } from 'redux'
import loggedInStateReducer from "./loggedInState";
import componentChangeReducer from "./componentChange";
import globalVariablesReducer from "./gloabalVariables";
import serverDetailsReducer from "./serverDetails";
import questionsReducer from "./questionsState";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loggedInState']
}

const allReducers = combineReducers({
    loggedInState: loggedInStateReducer,
    componentChange: componentChangeReducer,
    globalVariables: globalVariablesReducer,
    serverDetails: serverDetailsReducer,
    questionsState: questionsReducer
})

export default persistReducer(persistConfig, allReducers);