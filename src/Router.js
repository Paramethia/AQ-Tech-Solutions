import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Info from './components/Info.vue';
//import Contact from './components/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  //{ path: '/contact', name: 'Contact', component: Contact },
  { path: '/info', name: 'Info', component: Info },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;