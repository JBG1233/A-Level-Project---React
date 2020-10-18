const initialState = {
    apiHost: 'http://localhost:8080',
}


const serverDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'dev':
            return {
                apiHost: 'http://localhost:8080',
            }
        case 'prod':
            return {
                apiHost: 'http://35.179.84.127:8080',
            }
        default:
            return state
    }
}

export default serverDetailsReducer