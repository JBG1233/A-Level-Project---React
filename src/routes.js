import PeopleIcon from '@material-ui/icons/People';
import ExploreIcon from '@material-ui/icons/Explore';
import InfoIcon from "@material-ui/icons/Info";
import Leaderboard from './pages/Leaderboard';
import WorldMap from "./pages/WorldMap";
import UKQuiz from "./pages/UKQuiz";
import About from "./pages/About";


export default {
  items: [
    {
      path: '/Map',
      name: 'Map',
      type: 'link',
      icon: ExploreIcon,
      component: WorldMap
    },
    {
      path: '/UKQuiz',
      name: 'UKQuiz',
      type: 'link',
      component: UKQuiz
    },
    {
      path: '/Leaderboard',
      name: 'Leaderboard',
      type: 'link',
      icon: PeopleIcon,
      component: Leaderboard
    },
    {
      path: '/About',
      name: 'About',
      type: 'link',
      icon: InfoIcon,
      component: About
    },
  ]
};
