const initialState = {
    env: 'dev',
    apiHost: '',
}

function getApiHost () {
    if (initialState.env === 'prod') {
        return 'http://35.179.84.127:8080'
    } else {
        return 'http://localhost:8080'
    }
}

const serverDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'apiHost':
            return {
                apiHost: getApiHost(),
            }
        default:
            return state
    }
}

export default serverDetailsReducer