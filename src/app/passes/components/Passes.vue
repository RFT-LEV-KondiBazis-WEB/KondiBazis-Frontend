<template>
  <div>
    <div class="bg-brand-gradient" v-if="gymStats">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="py-4 px-6 border-l border-light-overlay">
              <p class="text-2xl text-light text-hairline">{{ gymStats.countPassesOnSysdateByGym || 0 }}</p>
              <p class="text-light-soft text-light">Sold passes today</p>
            </div>
          </div>
          <div class="col-4">
            <div class="py-4 px-6 border-l border-light-overlay">
              <p class="text-2xl text-light text-hairline">{{ gymStats.sumCostOfPassesOnSysdateByGym || 0 }}</p>
              <p class="text-light-soft text-light">Amount of sold passes today</p>
            </div>
          </div>
          <div class="col-4">
          <div class="py-4 px-6 border-l border-light-overlay">
              <p class="text-2xl text-light text-hairline">{{ gymStats.sumCustomersOnSysdateByGym || 0 }}</p>
              <p class="text-light-soft text-light">Registered customers on today</p>
            </div>
          </div>  
        </div>
      </div>
      <div class="bg-overlay-faint">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="px-6 py-2 border-l borderl-light-overlay"></div>
            </div>
            <div class="col-4">
              <div class="px-6 py-2 border-l borderl-light-overlay"></div>
            </div>
            <div class="col-4">
              <div class="px-6 py-2 border-l borderl-light-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-8" v-if="gym">
      <div class="constrain-xl mx-auto">
        <div class="card border-rounded box-shadow">
          <div class="py-4 px-6 border-b flex-spaced">
            <h2 class="text-regular">Passes in {{ gym.name }}</h2>
            <router-link :to="{ name: 'create-pass', params: { gymId: this.gymId } }" class="btn btn-primary">Create</router-link>
          </div>
          <div v-if="passes.length">
            <div class="py-4 px-6 flex-spaced border-b" v-for="pass in passes" v-bind:key="pass.id">
              <div class="col-5 p-0">
                <p>{{ pass.name }}</p>
                <p class="text-sm">{{ pass.price }} Ft</p>  
              </div>
              <div class="col-5">
                <div v-if="pass.passType == 'SUITABLE'">
                  Duration: <span>{{ pass.duration }}</span>
                </div>
                <div v-if="pass.passType == 'TIME_LIMITED'">
                  Time duration: <span>{{ pass.timeDuration }}</span> <span>{{ pass.passTimeDurationType | lowercase }}(s)</span>
                </div>
                <span v-if="pass.available" class="text-sm text-brand">Available</span>
                <span v-if="!pass.available" class="text-sm text-danger">Not available></span>
              </div>
              <div class="col-2 text-right">
                <div class="text-sm">
                  <router-link :to="{ name: 'update-pass', params: { id: pass.id, gymId: gymId } }" class="text-brand">Edit</router-link>
                  <span v-if="user.userRole == 'ADMIN'">
                  | <a href="#" @click.prevent="confirmDelete(pass)" class="text-danger">Delete</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="py-4 px-6 text-center">There are no passes yet.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import { mapGetters, mapActions } from 'vuex'

export default {

  props: {
    gymId: {
      default: null
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/user',
      gym: 'home/currentGym',
      passes: 'passes/allPasses',
      gymStats: 'home/currentGymStats'
    })
  },

  methods: {
    ...mapActions({
      getGym: 'home/getGym',
      getPasses: 'passes/getPasses',
      getGymStats: 'home/getGymStats',
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
          this.deletePass(pass)
        }
      })
    }
  },

  mounted() {
    this.getGym(this.gymId)
    this.getPasses(this.gymId)
    this.getGymStats(this.gymId)
  }
}
</script>
