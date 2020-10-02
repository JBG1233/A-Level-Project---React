import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./login";



const allReducers = combineReducers({
    login: loginReducer,
    form: formReducer

})

export default allReducers;
