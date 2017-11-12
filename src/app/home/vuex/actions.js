import axios from 'axios'
import { API_URL } from '../../constants'

export const getGyms = ({ dispatch, commit }, page) => {
  axios.get(API_URL + '/api/gyms?page=' + page).then((response) => {
    commit('setGyms', response.data.data)
  })
}

export const getGym = ({ dispatch, commit, state }, id) => {
  return axios.get(API_URL + '/api/gyms/' + id).then((response) => {
    commit('setGym', response.data.data)
  })
}

export const createGym = ({ dispatch, commit }, { payload }) => {
  return axios.post(API_URL + '/api/gyms', payload).then((response) => {

  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}
