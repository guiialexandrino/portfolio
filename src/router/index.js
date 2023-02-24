import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'Projects' },
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects/Projects.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/About.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact/Contact.vue'),
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;
