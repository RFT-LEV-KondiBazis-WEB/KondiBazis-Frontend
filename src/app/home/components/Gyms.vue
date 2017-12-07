<template>
  <div>
    <statistics></statistics>

    <div class="container py-8">
      <div class="constrain-xl mx-auto">
        <div class="card border-rounded box-shadow">
          <div class="py-4 px-6 border-b flex-spaced">
            <h2 class="text-regular">Gyms</h2>
            <router-link :to="{ name: 'create-gym' }" class="btn btn-primary">Create</router-link>
          </div>
          <div v-if="gyms.length">
            <div class="py-4 px-6 flex-spaced border-b" v-for="gym in gyms" v-bind:key="gym.id">
              <div class="col-10 p-0">
                <p>{{ gym.name }}</p>
                <p class="text-sm">{{ gym.city }}, {{ gym.address }}</p>
              </div>
              <div class="col-2 text-right">
                <p class="text-sm">
                  <router-link :to="{ name: 'update-gym', params: { id: gym.id } }" class="text-brand">Edit</router-link> |
                  <a href="#" @click.prevent="confirmDelete(gym)" class="text-danger">Delete</a>
                </p>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="py-4 px-6 text-center">There are no gyms yet.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import { mapGetters, mapActions } from 'vuex'
import Statistics from './Statistics.vue'

export default {
  components: {
    Statistics
  },

  computed: {
    ...mapGetters({
      gyms: 'home/allGyms'
    })
  },

  methods: {
    ...mapActions({
      getGyms: 'home/getGyms',
      deleteGym: 'home/deleteGym'
    }),

    confirmDelete(gym) {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this gym?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((wantDelete) => {
        if (wantDelete) {
          this.deleteGym(gym)
        }
      })
    }
  },

  mounted() {
    this.getGyms()
  }
}
</script>
