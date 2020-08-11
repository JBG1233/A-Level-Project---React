import axios from "axios";


function getApiHost() {
        return 'http://localhost:8080';
}

export const loadUKQuestions = () => {
    return function(dispatch) {
        axios.get(getApiHost() + '/rest/questions/UK').then(response => {
            const UKQuestions = response.data[0].questionText
            dispatch(getUKQuestions(UKQuestions))
        });
    }
}


export function getUKQuestions(UKQuestions) {
    return {
        type: 'UKQuestions',
        UKQuestions: UKQuestions
    }
}
