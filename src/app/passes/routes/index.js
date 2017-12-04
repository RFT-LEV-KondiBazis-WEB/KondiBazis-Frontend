import Pass from '../components/Pass.vue'
import Passes from '../components/Passes.vue'

export default [
  {
    path: '/passes',
    component: Passes,
    name: 'passes',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/passes/create',
    component: Pass,
    name: 'create-pass',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/passes/update/:id',
    component: Pass,
    props: true,
    name: 'update-pass',
    meta: {
      needsAuth: true
    }
  }
]
