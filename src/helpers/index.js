import { isEmpty } from 'lodash'
import axios from 'axios'

export const setHttpToken = (token) => {
  if (isEmpty(token)) {
    delete axios.defaults.headers.common['Authorization']
  } else {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  }
}
