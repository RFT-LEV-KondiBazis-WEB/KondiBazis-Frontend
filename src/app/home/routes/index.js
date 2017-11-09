import Home  from '../components/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      guest: false,
      needsAuth: true
    }
  },/*
  {
    path: '/gyms/:id',
    name: 'gym',
    component: '',
    props: true,
    meta: {
      needsAuth: true
    }
  }*/
]
