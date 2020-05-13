import Vue from 'vue';
import Router from 'vue-router';

import { HomeComponent } from '@/components/home/home';
import { CardComponent } from './../components/card/card';

Vue.use(Router);

const routerMaps = [
  {
    path: '/home',
    component: HomeComponent,
    name: 'home',
    hidden: true,
    children: []
  },
  {
    path: '/card',
    component: CardComponent,
    name: 'card',
    hidden: true
  },
  { path: '*', redirect: '/home' }
];

export default new Router({
  routes: routerMaps
});
