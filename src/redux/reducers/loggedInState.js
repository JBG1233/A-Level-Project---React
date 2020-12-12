const initialState = {
    loggedIn: false,
    stayLoggedIn: false,
    userDtos: [],
    leaderboardScore: [],
}


const loggedInStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'loggedIn':
      return {
        loggedIn: true,
        userDtos: action.userDtos,
        stayLoggedIn: state.stayLoggedIn,
        leaderboardScore: state.leaderboardScore,
      }
    case 'loggedOut':
      return {
        loggedIn: false,
        userDtos: [],
        stayLoggedIn: false,
        leaderboardScore: state.leaderboardScore,
      }
    case 'stayLoggedIn':
      return {
        loggedIn: state.loggedIn,
        userDtos: state.userDtos,
        stayLoggedIn: !state.stayLoggedIn,
        leaderboardScore: state.leaderboardScore,
      }
    case 'UpdateLeaderboardState':
      return {
        loggedIn: state.loggedIn,
        userDtos: state.userDtos,
        stayLoggedIn: state.stayLoggedIn,
        leaderboardScore: action.stats,
      }
    default:
      return state
  }
}

export default loggedInStateReducer