import auth from './auth/routes'
import home from './home/routes'
import customers from './customers/routes'
import passes  from './passes/routes'
import errors from './errors/routes'

export default [...home, ...auth, ...customers, ...passes, ...errors]
