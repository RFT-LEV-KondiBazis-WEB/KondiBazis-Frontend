<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Create Customer</div>
      <form @submit.prevent="send()">
        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('firstName') }">
            <label for="firstName" class="block text-grey-darker text-sm font-bold mb-2">First name</label>
            <input type="text" id="firstName" class="form-control" name="firstName" autofocus v-model="firstName">
            <span class="help-block" v-if="errors.has('firstName')">
              {{ errors.get('firstName').validationMessage }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('lastName') }">
            <label for="lastName" class="block text-grey-darker text-sm font-bold mb-2">Last name</label>
            <input type="text" id="lastName" class="form-control" name="lastName" v-model="lastName">
            <span class="help-block" v-if="errors.has('lastName')">
              {{ errors.get('lastName').validationMessage }}
            </span>
          </div>
        </div>

        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('email') }">
            <label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email address</label>
            <input type="text" id="email" class="form-control" name="email" v-model="email">
            <span class="help-block" v-if="errors.has('email')">
              {{ errors.get('email').validationMessage }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('phoneNumber') }">
            <label for="phoneNumber" class="block text-grey-darker text-sm font-bold mb-2">Phone number</label>
            <input type="text" id="phoneNumber" class="form-control" name="phoneNumber" v-model="phoneNumber">
            <span class="help-block" v-if="errors.has('phoneNumber')">
              {{ errors.get('phoneNumber').validationMessage }}
            </span>
          </div>
        </div>

        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('gender') }">
            <label for="gender" class="block text-grey-darker text-sm font-bold mb-2">Gender</label>
            <select id="gender" class="form-control" name="gender" v-model="gender">
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            <span class="help-block" v-if="errors.has('gender')">
              {{ errors.get('gender').validationMessage }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('birthdayDate') }">
            <label for="birthdayDate" class="block text-grey-darker text-sm font-bold mb-2">Birth date</label>
            <datepicker input-class="form-control" name="birthdayDate" v-model="birthdayDate"></datepicker>
            <span class="help-block" v-if="errors.has('birthdayDate')">
              {{ errors.get('birthdayDate').validationMessage }}
            </span>
          </div>
        </div>

        <div class="col-md-8 col-md-offset-4">
          <button type="submit" class="btn btn-primary mb-4">Create</button>
          <router-link :to="{ name: 'customers' }" class="ml-2">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import Errors from '../../../../helpers/Errors'

export default {

  components: {
    Datepicker
  },

  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      gender: "MALE",
      birthdayDate: null,
      errors: new Errors()
    }
  },

  methods: {
    ...mapActions({
      'createCustomer': 'customers/createCustomer'
    }),

    send() {
      this.createCustomer({
        payload: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          gender: this.gender,
          birthdayDate: this.birthdayDate,
        }
      }).then(() => {
        this.$router.replace({ name: 'customers' })
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  }
}
</script>
