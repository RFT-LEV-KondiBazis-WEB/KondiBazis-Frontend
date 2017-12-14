import Customer from '../components/Customer.vue'
import Customers from '../components/Customers.vue'
import CustomerPasses from '../components/CustomerPasses.vue'

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
    path: '/customers/create',
    component: Customer,
    name: 'create-customer',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/customers/update/:id',
    component: Customer,
    props: true,
    name: 'update-customer',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/customers/:customerId/passes',
    component: CustomerPasses,
    props: true,
    name: 'customer-passes',
    meta: {
      needsAuth: true
    }
  }
]
