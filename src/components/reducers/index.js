import {combineReducers} from 'redux';
import componentChangeReducer from "./componentChange";
import { reducer as formReducer } from 'redux-form'



const allReducers = combineReducers({
    componentChange: componentChangeReducer,
    form: formReducer

})

export default allReducers;
