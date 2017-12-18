<template>
  <div class="px-8 py-6" v-if="pass">
    <div class="text-xl text-regular mb-4">Update Pass</div>
    <form @submit.prevent="send()">
      
      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('passName') }">
          <label for="name" class="block text-grey-darker text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" class="form-control" name="name" autofocus v-model="pass.name">
          <span class="help-block" v-if="errors.has('passName')">
            {{ errors.get('passName').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('passPrice') }">
          <label for="price" class="block text-grey-darker text-sm font-bold mb-2">Price (HUF)</label>
          <input type="text" id="price" class="form-control" name="price" v-model="pass.price">
          <span class="help-block" v-if="errors.has('passPrice')">
            {{ errors.get('passPrice').validationMessage }}
          </span>
        </div>
      </div>

      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('passType') }">
          <label for="passType" class="block text-grey-darker text-sm font-bold mb-2">Pass type</label>
          <select id="passType" class="form-control" name="passType" v-model="pass.passType">
            <option value="SUITABLE">Suitable</option>
            <option value="TIME_LIMITED">Time limited</option>
          </select>
          <span class="help-block" v-if="errors.has('passType')">
            {{ errors.get('passType').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('passTimeDuration') }">
          <label for="timeDuration" class="block text-grey-darker text-sm font-bold mb-2">Time duration</label>
          <div class="flex row">
            <div class="col-6">
              <input type="number" min="0" max="60" id="timeDuration" class="form-control" name="timeDuration" v-model="pass.timeDuration">
            </div>
            <div class="col-6">
              <select name="passTimeDurationType" class="form-control" v-model="pass.passTimeDurationType">
                <option value="DAY">day(s)</option>
                <option value="MONTH">month(s)</option>
              </select>
            </div>
          </div>
          
          <span class="help-block" v-if="errors.has('passTimeDuration')">
            {{ errors.get('passTimeDuration').validationMessage }}
          </span>
        </div>

        <div v-if="pass.passType == 'SUITABLE'" class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('duration') }">
          <label for="duration" class="block text-grey-darker text-sm font-bold mb-2">Duration</label>
          <input type="number" id="duration" class="form-control" name="duration" v-model="pass.duration">
          <span class="help-block" v-if="errors.has('duration')">
            {{ errors.get('duration').validationMessage }}
          </span>
        </div>
      </div>

      <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.has('available') }">
        <label for="available" class="block text-grey-darker text-sm font-bold mb-2">
          <input type="checkbox" id="available" name="available" v-model="pass.available"> Available
        </label>
        <span class="help-block" v-if="errors.has('available')">
          {{ errors.get('available').validationMessage }}
        </span>
      </div>

      <div class="col-md-8 col-md-offset-4">
        <button type="submit" class="btn btn-primary mb-4">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Errors from '../../../../helpers/Errors'

export default {
  props: ['id', 'gymId'],

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
        payload: {
          name: this.pass.name,
          price: this.pass.price,
          passType: this.pass.passType,
          passTimeDurationType: this.pass.passTimeDurationType,
          duration: this.pass.duration,
          timeDuration: this.pass.timeDuration,
          available: this.pass.available
        }
      }).then(() => {
        this.$router.replace({ name: 'passes' })
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  },

  mounted() {
    this.getPass([this.gymId, this.id])
  }
}
</script>
