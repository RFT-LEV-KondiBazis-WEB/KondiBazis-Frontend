<template>
  <div class="container py-8">
    <div class="constrain-xl mx-auto">
      <div class="card border-rounded box-shadow">
        <div class="py-4 px-6 border-b flex-spaced">
          <h2 class="text-regular">Customers</h2>
          <router-link :to="{ name: 'create-customer' }" class="btn btn-primary">Create</router-link>
        </div>
        <div v-if="customers.length">
          <div class="py-4 px-6 flex-spaced border-b" v-for="customer in customers" v-bind:key="customer.id">
            <div class="col-2">

            </div>
            <div class="col-8">

            </div>
            <div class="col-2 text-right">
              <p class="text-sm">
                <a href="" class="text-brand">Edit</a> |
                <a href="" class="text-danger">Delete</a>
              </p>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="py-4 px-6 text-center">There are no customers yet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      customers: 'customers/allCustomers'
    })
  },

  methods: {
    ...mapActions({
      getCustomers: 'customers/getCustomers'
    })
  },

  mounted() {
    this.getCustomers(1)
  }
}
</script>
