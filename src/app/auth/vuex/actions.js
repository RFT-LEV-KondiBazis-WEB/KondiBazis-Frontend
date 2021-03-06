import axios from 'axios'
import { isEmpty } from 'lodash'
import localforage from 'localforage'
import { setHttpToken } from '../../../helpers'
import { API_URL } from '../../constants'

export const register = ({ dispatch }, { payload }) => {
  return axios.post(API_URL + '/register', payload).then((response) => {
    dispatch('setToken', response.data.meta.token).then(() => {
      dispatch('fetchUser')
    })
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const login = ({ dispatch }, { payload }) => {
  return axios.post(API_URL + '/login', payload).then((response) => {
    dispatch('setToken', response.data.meta.token).then(() => {
      dispatch('fetchUser')
    })
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const updateProfile = ({ commit }, { payload }) => {
  return axios.put(API_URL + '/user/update', payload).then((response) => {
    commit('setUserData', response.data.data)
  }).catch((error) => {
    return Promise.reject(error.response.data.errors)
  })
}

export const fetchUser = ({ commit }) => {
  return axios.get(API_URL + '/profile').then((response) => {
    commit('setAuthenticated', true)
    commit('setUserData', response.data.data)
  })
}

export const logout = ({ dispatch }) => {
  dispatch('clearAuth')
}

export const setToken = ({ commit, dispatch }, token) => {
  if (isEmpty(token)) {
    return dispatch('checkTokenExists').then((token) => {
      setHttpToken(token)
    })
  }

  commit('setToken', token)
  setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }, token) => {
  return localforage.getItem('authtoken').then((token) => {
    if (isEmpty(token)) {
      return Promise.reject('NO_STORAGE_TOKEN')
    }

    return Promise.resolve(token)
  })
}

export const clearAuth = ({ commit }, token) => {
  commit('setAuthenticated', false)
  commit('setUserData', null)
  commit('setToken', null)
  setHttpToken(null)
}
