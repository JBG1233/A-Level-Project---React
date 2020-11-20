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
        case 'HowitworksTrue':
            return {
                component: "Howitworks",
            }
        case 'MapTrue':
            return {
                component: "WorldMap",
            }
        case 'TimelineTrue':
            return {
                component: "Timeline",
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
        case 'SearchResultsTrue':
            return {
                component: 'SearchResults'
            }
        default:
            return state
    }
}

export default componentChangeReducer