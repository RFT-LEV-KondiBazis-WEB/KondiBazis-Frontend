<template>
  <div>
    <div class="bg-brand-gradient">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="py-4 px-6 border-l border-light-overlay">
              <p class="text-2xl text-light text-hairline">$3.233</p>
              <p class="text-light-soft text-light">Total revenue</p>
            </div>
          </div>
          <div class="col-4">
            <div class="py-4 px-6 border-l border-light-overlay">
              <p class="text-2xl text-light text-hairline">$233</p>
              <p class="text-light-soft text-light">Yesterday</p>
            </div>
          </div>
          <div class="col-4">
          <div class="py-4 px-6 border-l border-light-overlay">
              <p class="text-2xl text-light text-hairline">$133</p>
              <p class="text-light-soft text-light">Today</p>
            </div>
          </div>  
        </div>
      </div>
      <div class="bg-overlay-faint">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="px-6 py-2 border-l borderl-light-overlay">
                <p class="text-light"><strong class="text-medium">213</strong> customers</p>
              </div>
            </div>
            <div class="col-4">
              <div class="px-6 py-2 border-l borderl-light-overlay">
                <p class="text-light"><strong class="text-medium">12</strong> gyms</p>
              </div>
            </div>
            <div class="col-4">
              <div class="px-6 py-2 border-l borderl-light-overlay">
                <p class="text-light"><strong class="text-medium">34</strong> passes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-8">
      <div class="constrain-xl mx-auto">
        <div class="card border-rounded box-shadow">
          <div class="py-4 px-6 border-b flex-spaced">
            <h2 class="text-regular">Gyms</h2>
            <a href="" class="btn btn-primary">Create</a>
          </div>
          <div v-for="n in 10" class="py-4 px-6 flex-spaced border-b">
            <div>
              <p>Delta Fitness</p>
              <p class="text-sm">Debrecen .....</p>
            </div>
            <div>
              <p class="text-dark-muted">67 customers</p>
            </div>
            <div>
              <p>$69</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  
}
</script>
