import Leaderboard from './pages/Leaderboard';
import WorldMap from "./pages/WorldMap";
import UKQuiz from "./pages/UKQuiz";
import About from "./pages/About";
import CanadaQuiz from "./pages/CanadaQuiz";
import AustraliaQuiz from "./pages/AustraliaQuiz";
import BrazilQuiz from "./pages/BrazilQuiz";
import ChinaQuiz from "./pages/ChinaQuiz";


export default {
  items: [
    {
      path: '/Map',
      name: 'Map',
      type: 'link',
      component: WorldMap
    },
    {
      path: '/UKQuiz',
      name: 'UKQuiz',
      type: 'link',
      component: UKQuiz
    },
    {
      path: '/CanadaQuiz',
      name: 'CanadaQuiz',
      type: 'link',
      component: CanadaQuiz
    },    {
      path: '/AustraliaQuiz',
      name: 'AustraliaQuiz',
      type: 'link',
      component: AustraliaQuiz
    },    {
      path: '/BrazilQuiz',
      name: 'BrazilQuiz',
      type: 'link',
      component: BrazilQuiz
    },    {
      path: '/ChinaQuiz',
      name: 'ChinaQuiz',
      type: 'link',
      component: ChinaQuiz
    },



    {
      path: '/Leaderboard',
      name: 'Leaderboard',
      type: 'link',
      component: Leaderboard
    },
    {
      path: '/About',
      name: 'About',
      type: 'link',
      component: About
    },
  ]
};
