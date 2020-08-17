import Leaderboard from './pages/Leaderboard';
import WorldMap from "./pages/WorldMap";
import UKQuiz from "./pages/UKQuiz";
import About from "./pages/About";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";


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
