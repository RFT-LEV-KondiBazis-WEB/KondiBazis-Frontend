<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Update Pass</div>
    <form @submit.prevent="send()">

    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Errors from '../../../../helpers/Errors'

export default {
  props: ['id'],

  data() {
    return {
      errors: new Errors()
    }
  },

  computed: {
    ...mapGetters({
      pass: 'passes/currentPass'
    })
  },

  methods: {
    ...mapActions({
      getPass: 'passes/getPass',
      updatePass: 'passes/updatePass'
    }),

    send() {
      this.updatePass({
        id: this.pass.id,
        payload: this.pass
      }).then(() => {
        //
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  },

  mounted() {
    this.getPass(this.id)
  }
}
</script>
