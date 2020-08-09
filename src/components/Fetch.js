import axios from "axios";


function getApiHost() {
        return 'localhost:8080';
}

export const loadUKQuestions = () => {
    return function(dispatch) {
        axios.get(getApiHost() + '/rest/questions/UK').then(response => {
            console.log(response.data)
            //const UKQuestions = response.data
            //dispatch(getUKQuestions(UKQuestions))
        });
    }
}


export function getUKQuestions(UKQuestions) {
    return {
        type: 'UKQuestions',
        UKQuestions: UKQuestions
    }
}
