import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import Home from '../views/Home.vue'
import Chillout from '../views/Chillout.vue'
import Vacancy from '../views/Vacancy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title() {
        return 'Home'
      },
    },
  },
  {
    path: '/chillout',
    name: 'Chillout',
    component: Chillout,
    meta: {
      title() {
        return 'Home'
      },
    },
  },
  {
  path: '/vacancy',
    name: 'Vacancy',
    component: Vacancy,
    meta: {
    title() {
      return 'Home'
    },
  },
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title()
  } else {
    document.title = 'title'
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuth) {
      next()
      return
    }

    next('/')
  } else {
    next()
  }
})

export default router
