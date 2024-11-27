import HomeAll from './home_all/Home';
import Login from './login/Login';

const routes = [
  {
    path: '/',
    element: <HomeAll />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
