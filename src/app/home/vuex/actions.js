import axios from 'axios'
import { API_URL } from '../../constants'

export const getGyms = ({ dispatch, commit }) => {
  axios.get(API_URL + '/gyms').then((response) => {
    commit('setGyms', response.data.data)
  })
}

export const getGym = ({ dispatch, commit, state }, id) => {
  return axios.get(API_URL + '/gyms/' + id).then((response) => {
    commit('setGym', response.data.data)
  })
}

export const createGym = ({ dispatch, commit }, { payload }) => {
  return axios.post(API_URL + '/gyms/create', payload).then((response) => {
    commit('createGym', response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const updateGym = ({ payload }, id) => {
  return axios.put(API_URL + 'gyms/update/' + id, payload).then((response) => {
    commit('updateGym', id, response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const deleteGym = ({ commit }, id) => {
  return axios.delete(API_URL + '/gyms/delete/' + id).then((response) => {
    commit('deleteGym', id)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}
