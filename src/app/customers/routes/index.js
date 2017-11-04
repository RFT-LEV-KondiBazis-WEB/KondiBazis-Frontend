import Customers from '../components/Customers.vue'

export default [
  {
    path: '/customers',
    component: Customers,
    name: 'customers',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/customers/:id',
    props: true,
    name: 'customer',
    meta: {
      needsAuth: true
    }
  }
]
