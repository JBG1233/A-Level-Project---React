
const initialState = {
    UKQuestions: [],
}

const UKQuestionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UKQuestions':
            return {
                UKQuestions: action.UKQuestions
            }
        default:
            return state
    }
}

export default UKQuestionsReducer;
