import axios from 'axios'
import { API_URL } from '../../constants'

export const getPasses = ({ dispatch, commit }, page) => {
  axios.get(API_URL + '/api/passes?page=' + page).then((response) => {
    commit('setPasses', response.data.data)
  })
}
