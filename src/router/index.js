import { createRouter, createWebHistory } from 'vue-router'
import middleware from '../utilities/folderCrawler'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Home.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    meta: { middleware: true },
    component: () => import(/* webpackChunkName: "collection" */ '../views/Collection.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    middleware.isValidPath(next, to.query.name)
  } else {
    next()
  }
})

export default router
