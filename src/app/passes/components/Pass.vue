<template>
  <div class="container py-8">
    <div class="constrain-xl mx-auto">
      <div class="card border-rounded box-shadow">
        <div v-if="id">
          <update-pass-form :id="id"></update-pass-form>
        </div>
        <div v-if="gymId">
          <create-pass-form :gymId="gymId"></create-pass-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePassForm from './forms/CreatePassForm.vue'
import UpdatePassForm from './forms/UpdatePassForm.vue'

export default {
  components: {
    CreatePassForm,
    UpdatePassForm
  },

  props: {
    gymId: {
      default: null
    },
    id: {
      default: null
    }
  }

}
</script>
