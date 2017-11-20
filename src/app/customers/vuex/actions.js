import axios from 'axios'
import { API_URL } from '../../constants'

export const getCustomers = ({ dispatch, commit }, page) => {
  axios.get(API_URL + '/api/customers?page=' + page).then((response) => {
    commit('setCustomers', response.data.data)
  })
}

export const getCustomer = ({ dispatch, commit, state }, id) => {
  return axios.get(API_URL + '/customers/' + id).then((response) => {
    commit('setCustomer', response.data.data)
  })
}

export const createCustomer = ({ dispatch, commit }, { payload }) => {
  return axios.post(API_URL + '/customers', payload).then((response) => {

  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const deleteCustomer = ({ dispatch, commit }, id) => {
  
}
