export const setGyms = (state, gyms) => {
  state.gyms = gyms
}

export const setGym = (state, gym) => {
  state.gym = gym
}

export const setMeta = (state, meta) => {
  state.meta = meta
}

export const appendToGyms = (state, gym) => {
  state.gyms.unshift(gym)
}
