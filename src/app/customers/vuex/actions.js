import axios from 'axios'
import { API_URL } from '../../constants'

export const getCustomers = ({ commit }) => {
  axios.get(API_URL + '/customers').then((response) => {
    commit('setCustomers', response.data.data)
  })
}

export const getCustomer = ({ commit }, id) => {
  return axios.get(API_URL + '/customers/' + id).then((response) => {
    commit('setCustomer', response.data.data)
  })
}

export const createCustomer = ({ commit }, { payload }) => {
  return axios.post(API_URL + '/customers/create', payload).then((response) => {
    commit('createCustomer', response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const updateCustomer = ({ commit }, { id, payload }) => {
  return axios.put(API_URL + '/customers/update' + id, payload).then((response) => {
    commit('updateCustomer', id, response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const deleteCustomer = ({ commit }, customer) => {
  return axios.get(API_URL + '/customers/delete/' + customer.id).then((response) => {
    commit('deleteCustomer', customer)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}
