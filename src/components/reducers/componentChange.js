
const initialState = {
    UkQuiz: false,
}


const componentChangeReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UkQuizTrue':
            return {
                UkQuiz: true,
            }
        default:
            return state
    }
}

export default componentChangeReducer;
