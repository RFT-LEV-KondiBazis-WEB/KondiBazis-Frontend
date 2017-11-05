import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true,
      needsAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      guest: true,
      needsAuth: false
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      needsAuth: true
    }
  }
]
