<template>
  <div>
    <statistics></statistics>

    <div class="container py-8">
      <div class="constrain-xl mx-auto">
        <div class="card border-rounded box-shadow">
          <div class="py-4 px-6 border-b flex-spaced">
            <h2 class="text-regular">Gyms</h2>
            <a href="" class="btn btn-primary">Create</a>
          </div>
          <div v-for="n in 10" class="py-4 px-6 flex-spaced border-b">
            <div class="col-6">
              <p>Delta Fitness</p>
              <p class="text-sm">Debrecen .....</p>
            </div>
            <div class="col-4">
              <p class="text-dark-muted">67 customers</p>
            </div>
            <div class="col-2 text-right">
              <p class="text-sm">
                <a href="" class="text-brand">Edit</a> |
                <a href="" class="text-danger">Delete</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Statistics from './Statistics.vue'

export default {
  components: { Statistics }
}
</script>
