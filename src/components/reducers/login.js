
const initialState = {
    loggedIn: false,
}


const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'loggedIn':
            return {
                loggedIn: true,
                userDtos: action.userDtos
            }
        default:
            return state
    }
}

export default loginReducer;