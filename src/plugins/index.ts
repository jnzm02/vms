import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const modifiedRoutes = generatedRoutes.map((route: any) => {
  route.meta = route.meta || {}
  route.meta.layout = 'blank'
  return route
});

const routes = setupLayouts(modifiedRoutes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedIn');

  // Check if the user is not logged in and is trying to access a protected route
  if (!loggedIn && to.matched.length === 0) {
    // Redirect to the login page or any other desired page
    next('/auth/login'); // Change '/login' to your desired login page
  } else {
    next(); // Proceed to the requested page
  }
});

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
}
