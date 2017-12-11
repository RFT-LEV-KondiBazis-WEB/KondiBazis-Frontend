import axios from 'axios'
import { API_URL } from '../../constants'

export const getGyms = ({ commit }) => {
  axios.get(API_URL + '/gyms').then((response) => {
    commit('setGyms', response.data.data)
  })
}

export const getGym = ({ commit }, id) => {
  return axios.get(API_URL + '/gyms/' + id).then((response) => {
    commit('setGym', response.data.data)
  })
}

export const getStats = ({ commit}) => {
  axios.get(API_URL + '/stats').then((response) => {
    commit('setStats', response.data.data)
  })
}

export const createGym = ({ commit }, { payload }) => {
  return axios.post(API_URL + '/gyms', payload).then((response) => {
    commit('createGym', response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const createManager = ({ commit }, { id, payload }) => {
  return axios.post(API_URL + '/gyms/' + id + '/manager', payload).then(() => {
    // Do nothing
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const updateGym = ({ commit }, { id, payload }) => {
  return axios.put(API_URL + '/gyms/' + id, payload).then((response) => {
    commit('updateGym', response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const deleteGym = ({ commit }, gym) => {
  return axios.delete(API_URL + '/gyms/' + gym.id).then((response) => {
    commit('deleteGym', gym)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}
