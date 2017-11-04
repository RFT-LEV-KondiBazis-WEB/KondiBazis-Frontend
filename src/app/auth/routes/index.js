import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

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
    }
]
