import {combineReducers} from 'redux';
import componentChangeReducer from "./componentChange";



const allReducers = combineReducers({
    componentChange: componentChangeReducer,
})

export default allReducers;
