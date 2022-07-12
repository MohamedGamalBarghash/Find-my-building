import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// const functions = require('firebase-functions')
// const admin = require('firebase-admin')
// const nodemailer = require('nodemailer')
// const cors = require('cors')({ origin: true })
// admin.initializeApp()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/new-entry',
    name: 'new-entry',
    component: () => import('../views/NewEntry.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
