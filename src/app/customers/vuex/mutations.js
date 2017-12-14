export const setCustomers = (state, customers) => {
  state.customers = customers
}

export const setCustomer = (state, customer) => {
  state.customer = customer
}

export const setCustomerPasses = (state, passes) => {
  state.customerPasses = passes
}

export const createCustomer = (state, customer) => {
  state.customers.push(customer)
}

export const addPassToCustomer = (state, pass) => {
  state.customerPasses.push(pass)
}

export const updateCustomer = (state, customer) => {
  let index = state.customers.findIndex(obj => obj.id === customer.id)
  state.customers[index] = customer
}

export const deleteCustomer = (state, customer) => {
  state.customers.splice(state.customers.indexOf(customer), 1)
}
