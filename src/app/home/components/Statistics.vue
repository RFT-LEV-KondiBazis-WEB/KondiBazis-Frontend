<template>
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
              <p class="text-light"><strong class="text-medium" v-text="stats.countOfCustomers"></strong> customers</p>
            </div>
          </div>
          <div class="col-4">
            <div class="px-6 py-2 border-l borderl-light-overlay">
              <p class="text-light"><strong class="text-medium" v-text="stats.countOfGyms"></strong> gyms</p>
            </div>
          </div>
          <div class="col-4">
            <div class="px-6 py-2 border-l borderl-light-overlay">
              <p class="text-light"><strong class="text-medium" v-text="stats.countOfPasses"></strong> passes</p>
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
  
  computed: {
    ...mapGetters({
      stats: 'home/getStats'
    })
  },

  methods: {
    ...mapActions({
      getStats: 'home/getStats'
    })
  },

  mounted() {
    this.getStats()
  }

}
</script>
