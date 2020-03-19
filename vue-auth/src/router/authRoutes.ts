import {Routes} from './index';
import {guest, auth, verified} from './middleware';

const Login = () => import('../views/Auth/Login.vue');
const LogOut = () => import('../views/Auth/LogOut.vue');
const Register = () => import('../views/Auth/Register.vue');
const UserVerify = () => import('../views/Auth/UserVerify.vue');
const ResetPassword = () =>  import('../views/Auth/ResetPassword.vue');
const ForgotPassword = () => import('../views/Auth/ForgotPassword.vue');
const ChangePassword = () => import('../views/Auth/ChangePassword.vue');

const routes: Routes[] = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            middleware: { guest },
        } ,
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogOut,
        meta: {
            middleware: { auth },
        } ,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            middleware: { guest },
        } ,
    },
    {
        path: '/user-verify',
        name: 'userVerify',
        component: UserVerify,
        meta: {
            middleware: { auth },
        } ,
    },
    {
        path: '/reset-password',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
            middleware: { guest },
        } ,
        beforeEnter(to: Routes, from: Routes, next: (o?: any) => void): void {
            if ( from.name && from.name === 'forgotPassword') {
                 next();
                 } else {  next({path: '/'}); }
          },
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: ForgotPassword,
        meta: {
            middleware: { guest },
        },
    },
    {
        path: '/change-password',
        name: 'changePassword',
        component: ChangePassword,
        beforeEnter(to: Routes, from: Routes, next: (o?: any) => void): void {
            if ( from.name && from.name === 'resetPassword') {
                 next();
                 } else {  next({path: '/'}); }
          },
          meta: {
            middleware: { guest },
        } ,
    },
];

// tslint:disable-next-line:eofline
export default routes;