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
            <div class="col p-0">
              <gravatar :email="customer.email"></gravatar>
            </div>
            <div class="col-9">
              <p>{{ customer.firstName }} {{ customer.lastName }}</p>
              <p class="text-sm">{{ customer.email }}</p>
            </div>
            <div class="col-2 text-right">
              <p class="text-sm">
                <router-link :to="{ name: 'update-customer', params: { id: customer.id } }" class="text-brand">Edit</router-link> |
                <a href="#" @click.prevent="confirmDelete(customer)" class="text-danger">Delete</a>
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
import swal from 'sweetalert'
import { mapGetters, mapActions } from 'vuex'
import Gravatar from '../../../components/Gravatar.vue'

export default {
  components: {
    Gravatar
  },

  computed: {
    ...mapGetters({
      customers: 'customers/allCustomers'
    })
  },

  methods: {
    ...mapActions({
      getCustomers: 'customers/getCustomers',
      deleteCustomer: 'customers/deleteCustomer'
    }),

    confirmDelete(customer) {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this customer?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((wantDelete) => {
        if (wantDelete) {
          this.deleteCustomer(customer)
        }
      })
    }
  },

  mounted() {
    this.getCustomers()
  }
}
</script>
