<template>
  <div class="container py-8">
    <div class="constrain-xl mx-auto">
      <div class="card border-rounded box-shadow">
        <div class="py-4 px-6 border-b flex-spaced">
          <h2 class="text-regular">Passes</h2>
          <router-link :to="{ name: 'create-pass' }" class="btn btn-primary">Create</router-link>
        </div>
        <div v-if="passes.length">

        </div>
        <div v-else>
          <p class="py-4 px-6 text-center">There are no passes yet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      passes: 'passes/allPasses'
    })
  },

  methods: {
    ...mapActions({
      getPasses: 'passes/getPasses',
      deletePass: 'passes/deletePass'
    }),

    confirmDelete(pass) {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this pass?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((wantDelete) => {
        if (wantDelete) {
          deletePass(pass)
        }
      })
    }
  },

  mounted() {
    this.getPasses()
  }
}
</script>
