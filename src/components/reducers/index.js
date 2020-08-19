import {combineReducers} from 'redux';
import componentChangeReducer from "./componentChange";
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./login";



const allReducers = combineReducers({
    componentChange: componentChangeReducer,
    login: loginReducer,
    form: formReducer

})

export default allReducers;
