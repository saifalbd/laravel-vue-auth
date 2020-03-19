import Vue from 'vue';
import Router from 'vue-router';
import AuthRoutes from './authRoutes';
import routes from './routes';
import {applyMiddleware} from './middleware';


Vue.use(Router);

export interface Routes {
  path: string;
  name: string;
  component: () => void;
  beforeEnter?: (to: any, from: any, next: (o?: any) => void) => void;
  meta: {
    middleware?: IData;

  };
}
//  mode: 'history',
const router: any =  new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [...routes, ...AuthRoutes],
});

router.beforeEach((to: Routes, from: Routes, next: (o?: IData) => void) => {

  applyMiddleware(to, from, next );
});


export default router;
