import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = (state, token) => {
  if (isEmpty(token)) {
    localforage.removeItem('authtoken')
    return
  }

  localforage.setItem('authtoken', token)
}

export const setAuthenticated = (state, trueOrFalse) => {
  state.authenticated = trueOrFalse
}

export const setUserData = (state, data) => {
  state.user = data
}
