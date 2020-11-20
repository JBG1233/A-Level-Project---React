const initialState = {
    groupId: '',
    questions: [],
    searchResults: [],
}


const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'questionStateChange':
            return {
                groupId: action.groupId,
                questions: action.questions,
                searchResults: state.searchResults,
            }
        case 'SearchResultsChange':
            return {
                groupId: state.groupId,
                questions: state.questions,
                searchResults: action.searchResults,
            }
        default:
            return state
    }
}

export default questionsReducer