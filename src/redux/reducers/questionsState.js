const initialState = {
    groupId: '',
    questions: [],
}


const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'questionStateChange':
            return {
                groupId: action.groupId,
                questions: action.questions,
            }
        default:
            return state
    }
}

export default questionsReducer