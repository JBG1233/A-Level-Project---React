export const Login = (userDtos) => ({type: 'loggedIn', userDtos: userDtos})

export const Logout = () => ({type: 'loggedOut'})

export const UpdateLeaderboardStatistics = (stats) => ({type: 'UpdateLeaderboardState', stats: stats})

export const stayLoggedIn = () => ({type: 'stayLoggedIn'})
