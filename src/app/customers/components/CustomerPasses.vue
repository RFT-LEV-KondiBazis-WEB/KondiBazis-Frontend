<template>
  <div class="container py-8" v-if="customer">
    <div class="constrain-xl mx-auto">

      <create-pass-for-customer :customer="customer"></create-pass-for-customer>

      <div class="card border-rounded box-shadow">
        <div class="text-xl text-regular border-b px-6 py-4">Used passes</div>
        <div v-if="customerPasses.length">
          <div class="py-4 px-6 flex-spaced border-b" v-for="pass in customerPasses" v-bind:key="pass.id">
            <div class="col-4 p-0">
              <p>{{ pass.passName }}</p>
              <p class="text-sm">Price: {{ pass.passPrice }} Ft</p>  
            </div>
            <div class="col-4 text-sm">
              <p>Available: 
                <span v-if="Date.now() < new Date(pass.passEndDate)" class="text-brand">Yes</span>
                <span v-else class="text-danger">No</span>
              </p>
              <p class="text-sm">Expiration date: {{ pass.passEndDate }}</p>
            </div>
            <div class="col-4 text-right">
              <div class="text-sm">
                <p>Pass type: 
                  <span v-if="pass.passType == 'TIME_LIMITED'">time limited</span>
                  <span v-if="pass.passType == 'SUITABLE'">suitable</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="py-4 px-6 text-center">There are no passes for this customer.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import CreatePassForCustomer from '../components/forms/CreatePassForCustomer.vue'

export default {
  props: ['customerId'],

  components: {
    CreatePassForCustomer
  },

  computed: {
    ...mapGetters({
      customer: 'customers/currentCustomer',
      customerPasses: 'customers/currentCustomerPasses'
    })
  },

  methods: {
    ...mapActions({
      getCustomer: 'customers/getCustomer',
      getCustomerPasses: 'customers/getCustomerPasses'
    })
  },

  mounted() {
    this.getCustomer(this.customerId)
    this.getCustomerPasses(this.customerId)
  }
}
</script>
