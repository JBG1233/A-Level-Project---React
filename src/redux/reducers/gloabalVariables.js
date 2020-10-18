const initialState = {
    opened: true,
    menuOpen: false,
    alertOpen: false,
    severity: "",
    message: "",
}


const globalVariablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'drawerToggle':
            return {
                opened: !state.opened,
                menuOpen: state.menuOpen
            }
        case 'menuToggle':
            return {
                opened: state.opened,
                menuOpen: !state.menuOpen,
                alertOpen: state.alertOpen,
                severity: state.severity,
                message: state.message,
            }
        case 'updateAlert':
            return {
                opened: state.opened,
                menuOpen: state.menuOpen,
                alertOpen: true,
                severity: action.severity,
                message: action.message,
            }
        case 'closeAlert':
            return {
                opened: state.opened,
                menuOpen: state.menuOpen,
                alertOpen: false,
                severity: "",
                message: "",
            }
        default:
            return state
    }
}

export default globalVariablesReducer