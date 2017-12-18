export const setGyms = (state, gyms) => {
  state.gyms = gyms
}

export const setGym = (state, gym) => {
  state.gym = gym
}

export const setStats = (state, stats) => {
  state.stats = stats
}

export const setGymStats = (state, stats) => {
  state.gymStats = stats
}

export const createGym = (state, gym) => {
  state.gyms.push(gym)
}

export const updateGym = (state, gym) => {
  let index = state.gyms.findIndex(obj => obj.id === gym.id)
  state.gyms[index] = gym 
}

export const deleteGym = (state, gym) => {
  state.gyms.splice(state.gyms.indexOf(gym), 1)
}
