const initialState = {
    questions: [],
    searchResults: [],
    quizToReviseDtos: [],
}


const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'questionStateChange':
            return {
                questions: action.questions,
                searchResults: state.searchResults,
            }
        case 'SearchResultsChange':
            return {
                questions: state.questions,
                searchResults: action.searchResults,
            }
        case 'quizToReviseDtos':
            return {
                questions: state.questions,
                searchResults: state.searchResults,
                quizToReviseDtos: action.quizToReviseDtos
            }
        default:
            return state
    }
}

export default questionsReducer