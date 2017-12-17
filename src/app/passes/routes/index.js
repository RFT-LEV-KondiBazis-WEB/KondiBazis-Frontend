import Pass from '../components/Pass.vue'
import Passes from '../components/Passes.vue'

export default [
  {
    path: '/gyms/:gymId/passes',
    component: Passes,
    props: true,
    name: 'passes',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/gyms/:gymId/passes/create',
    component: Pass,
    props: true,
    name: 'create-pass',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/gyms/:gymId/passes/:id',
    component: Pass,
    props: true,
    name: 'update-pass',
    meta: {
      needsAuth: true
    }
  }
]
