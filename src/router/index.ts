import Vue from 'vue';
import Router from 'vue-router';

import { HomeComponent } from '@/components/home/home';

Vue.use(Router);

const routerMaps = [
  {
    path: '/',
    component: HomeComponent,
    name: 'home',
    hidden: true,
    // redirect: '/home', // 重定向
    children: [
    ]
  }
];

export default new Router({
  routes: routerMaps
});
