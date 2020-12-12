const initialState = {
    alertOpen: false,
    severity: "",
    message: "",
}


const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updateAlert':
            return {
                alertOpen: true,
                severity: action.severity,
                message: action.message,
            }
        case 'closeAlert':
            return {
                alertOpen: false,
                severity: "",
                message: "",
            }
        default:
            return state
    }
}

export default alertReducer;