import axios from 'axios'
import { API_URL } from '../../constants'

export const getPasses = ({ commit }) => {
  axios.get(API_URL + '/passes').then((response) => {
    commit('setPasses', response.data.data)
  })
}
