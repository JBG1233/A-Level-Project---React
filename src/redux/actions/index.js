export const Login = (userDtos) => ({type: 'loggedIn', userDtos: userDtos})

export const Logout = () => ({type: 'loggedOut'})

export const LeaderboardTrue = () => ({type: 'LeaderboardTrue'})

export const ContactUsTrue = () => ({type: 'ContactUsTrue'})

export const TimelineTrue = () => ({type: 'TimelineTrue'})

export const MapTrue = () => ({type: 'MapTrue'})

export const AboutTrue = () => ({type: 'AboutTrue'})

export const LoginTrue = () => ({type: 'LoginTrue'})

export const RegisterTrue = () => ({type: 'RegisterTrue'})

export const ForgotPasswordTrue = () => ({type: 'ForgotPasswordTrue'})

export const QuestionManagerTrue = () => ({type: 'QuestionManagerTrue'})

export const UpdateQuestionState = (questions, groupId) => ({type: 'questionStateChange', questions: questions, groupId: groupId})

export const ErrorTrue = () => ({type: 'errorTrue'})

export const DrawerToggle = () => ({type: 'drawerToggle'})

export const MenuToggle = () => ({type: 'menuToggle'})

export const UpdateAlert = (severity, message) => ({type: 'updateAlert', severity: severity, message: message})

export const CloseAlert = () => ({type: 'closeAlert'})

export const ApiHost = () => ({type: 'apiHost'})

export const UpdateLeaderboardStatistics = (stats) => ({type: 'UpdateLeaderboardState', stats: stats})

export const stayLoggedIn = () => ({type: 'stayLoggedIn'})

export const HowitworksTrue = () => ({type: 'HowitworksTrue'})