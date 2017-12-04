<template>
  <div class="container py-8">
    <div class="constrain-xl mx-auto">
      <div class="card border-rounded box-shadow">
        <div v-if="id">
          <update-pass-form :id="id"></update-pass-form>
        </div>
        <div v-else>
          <create-pass-form></create-pass-form>
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
    id: {
      default: null
    }
  }

}
</script>
