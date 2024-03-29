const initialState = {
    role: 'user',
}

const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'student':
            return {
                role: 'student',
            }
        case 'user':
            return {
                role: 'user',
            }
        default:
            return state
    }
}

export default roleReducer;