import axios from 'axios'
import { API_URL } from '../../constants'

export const getPasses = ({ commit }) => {
  axios.get(API_URL + '/passes').then((response) => {
    commit('setPasses', response.data.data)
  })
}

export const getPass = ({ commit }, id) => {
  return axios.get(API_URL + '/passes/' + id).then((response) => {
    commit('setPass', response.data.data)
  })
}

export const createPass = ({ commit }, { payload }) => {
  return axios.post(API_URL + '/passes/create', payload).then((response) => {
    commit('createPass', response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const updatePass = ({ commit }, { id, payload }) => {
  return axios.put(API_URL + '/passes/update/' + id, payload).then((response) => {
    commit('updatePass', id, response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const deletePass = ({ commit }, pass) => {
  return axios.get(API_URL + '/passes/delete/' + pass.id).then((response) => {
    commit('deletePass', pass)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}
