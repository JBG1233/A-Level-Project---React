import ExploreIcon from "@material-ui/icons/Explore";
import FaceIcon from "@material-ui/icons/Face";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BuildIcon from "@material-ui/icons/Build";
import InfoIcon from "@material-ui/icons/Info";

const initialState = {
    role: 'user',
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'student':
            return {
                role: 'student',
            }
        case 'teacher':
            return {
                role: 'teacher',
            }
        case 'user':
            return {
                role: 'user',
            }
        default:
            return state
    }
}

export default sidebarReducer