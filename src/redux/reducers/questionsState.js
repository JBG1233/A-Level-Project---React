const initialState = {
    countryCode: '',
    questions: [],
}


const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'questionStateChange':
            return {
                countryCode: action.countryCode,
                questions: action.questions,
            }
        default:
            return state
    }
}

export default questionsReducer