import Gyms  from '../components/Gyms.vue'
import Gym from '../components/Gym.vue'
import Manager from '../components/Manager.vue'

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
    path: '/gyms/:id/manager/create',
    name: 'create-manager',
    component: Manager,
    props: true,
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
