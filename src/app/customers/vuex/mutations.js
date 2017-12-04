export const setCustomers = (state, customers) => {
  state.customers = customers
}

export const setCustomer = (state, customer) => {
  state.customer = customer
}

export const createCustomer = (state, customer) => {
  state.customers.push(customer)
}

export const updateCustomer = (state, id, data) => {

}

export const deleteCustomer = (state, customer) => {
  state.customers.splice(state.customers.indexOf(customer), 1)
}
