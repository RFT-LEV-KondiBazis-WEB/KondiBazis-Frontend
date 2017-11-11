import Gyms  from '../components/Gyms.vue'
import Gym from '../components/Gym.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Gyms,
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/gyms/create',
    name: 'create-gym',
    component: Gym,
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/gyms/update/:id',
    name: 'update-gym',
    component: Gym,
    props: true,
    meta: {
      needsAuth: true
    }
  }
]
