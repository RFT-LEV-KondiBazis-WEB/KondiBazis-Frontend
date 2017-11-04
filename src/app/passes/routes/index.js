import Passes from '../components/Passes.vue'

export default [
  {
    path: '/passes',
    component: Passes,
    name: 'passes',
    meta: {
      needsAuth: true
    }
  }
]
    