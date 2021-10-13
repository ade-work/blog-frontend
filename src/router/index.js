import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from "../views/Posts";

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/user/:userid',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
