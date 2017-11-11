<template>
  <div class="container py-8">
    <div class="constrain-xl mx-auto">
      <div class="card border-rounded box-shadow">
        <div v-if="id">
          <update-customer-form :id="id"></update-customer-form>
        </div>
        <div v-else>
          <create-customer-form></create-customer-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateCustomerForm from './forms/CreateCustomerForm.vue'
import UpdateCustomerForm from './forms/UpdateCustomerForm.vue'

export default {
  components: {
    CreateCustomerForm,
    UpdateCustomerForm
  },

  props: {
    id: {
      default: null
    }
  }
}
</script>
