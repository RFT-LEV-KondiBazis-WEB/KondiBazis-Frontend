<template>
  <div class="card border-rounded box-shadow mb-8">
    <div class="py-2 px-6 border-b flex-spaced">
        <h2 class="text-regular">Add pass to {{ customer.firstName }} {{ customer.lastName }}</h2>
      </div>
    <div class="px-6 py-4">
      <form @submit.prevent="send()">
        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('gymId') }">
            <label for="gym" class="block text-grey-darker text-sm font-bold mb-2">Gym</label>
            <select id="gym" class="form-control" name="gym" v-model="gymId" v-on:change="setSelectedGym()" required>
              <option value="">Select one</option>
              <option :value="gym.id" v-for="gym in gyms" v-bind:key="gym.id">{{ gym.name }}</option>
            </select>
            <span class="help-block" v-if="errors.has('gymId')">
              {{ errors.get('gymId').validationMessage }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('passId') }">
            <label for="pass" class="block text-grey-darker text-sm font-bold mb-2">Pass</label>
            <select id="pass" class="form-control" name="pass" v-model="passId" required>
              <option value="">Select one</option>
              <option v-if="passes" :value="pass.id" v-for="pass in passes" v-bind:key="pass.id">{{ pass.name }}</option>
            </select>
            <span class="help-block" v-if="errors.has('passId')">
              {{ errors.get('passId').validationMessage }}
            </span>
          </div>
        </div>

        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('startDate') }">
            <label for="startDate" class="block text-grey-darker text-sm font-bold mb-2">Start date</label>
            <datepicker input-class="form-control" name="startDate" v-model="startDate"></datepicker>
            <span class="help-block" v-if="errors.has('startDate')">
              {{ errors.get('startDate').validationMessage }}
            </span>
          </div>
        </div>

        <div class="col-md-8 col-md-offset-4">
          <button type="submit" class="btn btn-primary mb-4">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import Errors from '../../../../helpers/Errors'

export default {
  props: ['customer'],

  components: {
    Datepicker
  },

  data() {
    return {
      gymId: "",
      passId: "",
      startDate: null,
      errors: new Errors()
    }
  },

  computed: {
    ...mapGetters({
      gyms: 'home/allGyms',
      passes: 'passes/allPasses'
    })
  },

  methods: {
    ...mapActions({
      getGyms: 'home/getGyms',
      getPasses: 'passes/getPasses',
      addPassToCustomer: 'customers/addPassToCustomer'
    }),
    
    setSelectedGym() {
      this.getPasses(this.gymId)
    },

    send() {
      this.addPassToCustomer({
        customerId: this.customer.id,
        payload: {
          gymId: this.gymId,
          passId: this.passId,
          startDate: this.startDate
        }
      }).then(() => {
        //
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  },

  mounted() {
    this.getGyms()
  }
}
</script>
