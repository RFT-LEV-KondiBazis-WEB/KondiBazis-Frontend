<template>
  <div class="container py-8">
    <div class="constrain-xl mx-auto">
      <div class="card border-rounded box-shadow">
        <div v-if="id">
          <update-gym-form :id="id"></update-gym-form>
        </div>
        <div v-else>
          <create-gym-form></create-gym-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateGymForm from './forms/CreateGymForm.vue'
import UpdateGymForm from './forms/UpdateGymForm.vue' 

export default {
  components: {
    CreateGymForm,
    UpdateGymForm
  },

  props: {
    id: {
      default: null
    }
  }
}
</script>
