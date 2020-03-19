import {Routes} from './index';
import {guest, auth, verified} from './middleware';

const Home = () => import('../views/Home.vue') ;


const routes: Routes[] = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        middleware: { auth, verified },
    } ,
    },
  ];

// tslint:disable-next-line:eofline
export default routes;