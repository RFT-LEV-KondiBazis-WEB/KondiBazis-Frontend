export const setCustomers = (state, customers) => {
    state.customers = customers
}

export const setCustomer = (state, customer) => {
    state.customer = customer
}

export const setMeta = (state, meta) => {
    state.meta = meta
}

export const setCustomersLoading = (state, status) => {
    state.customersLoading = status
}

export const setCustomerLoading = (state, status) => {
    state.customerLoading = status
}
