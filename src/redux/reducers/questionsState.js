const initialState = {
    questions: [],
    searchResults: [],
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
        default:
            return state
    }
}

export default questionsReducer