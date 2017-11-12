<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Update Gym</div>
    <form @submit.prevent="send()">
      
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  
  data() {
    return {
      errors: []
    }
  },

  computed: {
    ...mapGetters({
      gym: 'home/currentGym'
    })
  },

  methods: {
    ...mapActions({
      getGym: 'home/getGym',
      updateGym: 'home/updateGym'
    }),

    send() {

    }
  },

  mounted() {
    this.getGym(this.id)
  }  
}
</script>
