import {combineReducers} from 'redux';
import componentChangeReducer from "./componentChange";
import UKQuestionsReducer from "./UKQuestions";



const allReducers = combineReducers({
    componentChange: componentChangeReducer,
    UKQuestions: UKQuestionsReducer,
})

export default allReducers;
