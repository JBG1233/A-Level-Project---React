const initialState = {
    opened: true,
    menuOpen: false,
}


const togglesReducer = (state = initialState, action) => {
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
            }
        default:
            return state
    }
}

export default togglesReducer;