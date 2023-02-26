import { createRouter, createWebHistory } from 'vue-router';
import projectsName from '../views/Projects/Projects.json';

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
      children: [
        {
          path: ':name',
          component: () => import('../views/Projects/ProjectTemplate.vue'),
          beforeEnter: (to, from, next) => {
            const projectRoute = to.params.name;
            const checkRoute = projectsName.find(
              (item) => item.project === projectRoute
            );

            if (checkRoute) next();
            else next({ name: 'Projects' });
          },
        },
      ],
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
