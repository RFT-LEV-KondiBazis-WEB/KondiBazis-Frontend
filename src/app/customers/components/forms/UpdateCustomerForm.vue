<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Update Customer</div>
    <form @submit.prevent="send()">

    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],

  data() {
    return {
      errors: []
    }
  },

  computed: {
    ...mapGetters({
      customer: 'customers/currentCustomer'
    })
  },

  methods: {
    ...mapActions({
      getCustomer: 'customers/getCustomer',
      updateCustomer: 'customers/updateCustomer'
    }),

    send() {
      this.updateCustomer({
        payload: this.customer
      }).then(() => {
        this.$router.replace({ name: 'customers' })
      }).catch((errors) => {
        this.errors = errors
      })
    }
  },

  mounted() {
    this.getCustomer(this.id)
  }
}
</script>
