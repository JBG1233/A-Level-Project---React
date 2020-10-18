const initialState = {
    component: "WorldMap",
}

const componentChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LeaderboardTrue':
            return {
                component: "Leaderboard",
            }
        case 'ErrorTrue':
            return {
                component: "ErrorPage",
            }
        case 'MapTrue':
            return {
                component: "WorldMap",
            }
        case 'AboutTrue':
            return {
                component: "About",
            }
        case 'LoginTrue':
            return {
                component: "LoginPage",
            }
        case 'RegisterTrue':
            return {
                component: "RegisterPage",
            }
        case 'ForgotPasswordTrue':
            return {
                component: "ForgotPasswordPage",
            }
        case 'QuestionManagerTrue':
            return {
                component: "QuestionManager",
            }
        default:
            return state
    }
}

export default componentChangeReducer