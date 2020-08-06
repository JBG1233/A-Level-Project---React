import {
  WorldMap,
} from './pages';

import ExploreIcon from '@material-ui/icons/Explore';

export default {
  items: [
    {
      path: '/',
      name: 'Home',
      type: 'link',
      icon: ExploreIcon,
      component: WorldMap
    },
  ]
};
