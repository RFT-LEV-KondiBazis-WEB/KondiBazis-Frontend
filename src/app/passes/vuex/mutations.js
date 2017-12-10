export const setPasses = (state, passes) => {
  state.passes = passes
}

export const setPass = (state, pass) => {
  state.pass = pass
}

export const createPass = (state, pass) => {
  state.passes.push(pass)
}

export const updatePass = (state, pass) => {
  let index = state.passes.findIndex(obj => obj.id === pass.id)
  state.passes[index] = pass
}

export const deletePass = (state, pass) => {
  state.passes.splice(state.passes.indexOf(pass), 1)
}
