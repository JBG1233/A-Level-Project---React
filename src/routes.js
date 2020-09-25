import Leaderboard from './pages/Leaderboard';
import WorldMap from "./pages/WorldMap";
import About from "./pages/About";
import Canada from "./pages/Canada";
import UK from "./pages/UK";
import Australia from "./pages/Australia";
import Brazil from "./pages/Brazil";
import China from "./pages/China";


export default {
  items: [
    {
      path: '/Map',
      name: 'Map',
      type: 'link',
      component: WorldMap
    },
    {
      path: '/UK',
      name: 'UK',
      type: 'link',
      component: UK
    },
    {
      path: '/Canada',
      name: 'Canada',
      type: 'link',
      component: Canada
    },    {
      path: '/Australia',
      name: 'Australia',
      type: 'link',
      component: Australia
    },    {
      path: '/Brazil',
      name: 'Brazil',
      type: 'link',
      component: Brazil
    },    {
      path: '/China',
      name: 'China',
      type: 'link',
      component: China
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
