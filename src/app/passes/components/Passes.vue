<template>
  <div class="container py-8">
    <h1>Passes</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      passes: 'passes/allPasses'
    })
  },

  methods: {
    ...mapActions({
      getPasses: 'passes/getPasses'
    })
  },

  mounted() {
    this.getPasses(1)
  }
}
</script>
