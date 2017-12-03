<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Update Customer</div>
    <form @submit.prevent="send()">
      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('firstName') }">
          <label for="firstName" class="block text-grey-darker text-sm font-bold mb-2">First name</label>
          <input type="text" id="firstName" class="form-control" name="firstName" autofocus v-model="customer.firstName">
          <span class="help-block" v-if="errors.has('firstName')">
            {{ errors.get('firstName').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('lastName') }">
          <label for="lastName" class="block text-grey-darker text-sm font-bold mb-2">Last name</label>
          <input type="text" id="lastName" class="form-control" name="lastName" v-model="customer.lastName">
          <span class="help-block" v-if="errors.has('lastName')">
            {{ errors.get('lastName').validationMessage }}
          </span>
        </div>
      </div>

      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('email') }">
          <label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email address</label>
          <input type="text" id="email" class="form-control" name="email" v-model="customer.email">
          <span class="help-block" v-if="errors.has('email')">
            {{ errors.get('email').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('phoneNumber') }">
          <label for="phoneNumber" class="block text-grey-darker text-sm font-bold mb-2">Phone number</label>
          <input type="text" id="phoneNumber" class="form-control" name="phoneNumber" v-model="customer.phoneNumber">
          <span class="help-block" v-if="errors.has('phoneNumber')">
            {{ errors.get('phoneNumber').validationMessage }}
          </span>
        </div>
      </div>

      <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.has('password') }">
        <label for="password" class="block text-grey-darker text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" class="form-control" name="password" placeholder="******************" v-model="customer.password">
        <span class="help-block" v-if="errors.has('password')">
          {{ errors.get('password').validationMessage }}
        </span>
      </div>

      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('gender') }">
          <label for="gender" class="block text-grey-darker text-sm font-bold mb-2">Gender</label>
          <select id="gender" class="form-control" name="gender" v-model="customer.gender">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span class="help-block" v-if="errors.has('gender')">
            {{ errors.get('gender').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('birthdayDate') }">
          <label for="birthdayDate" class="block text-grey-darker text-sm font-bold mb-2">Birth date</label>
          <input type="text" id="birthdayDate" class="form-control" name="birthdayDate" v-model="customer.birthdayDate">
          <span class="help-block" v-if="errors.has('birthdayDate')">
            {{ errors.get('birthdayDate').validationMessage }}
          </span>
        </div>
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
  props: ['id'],

  data() {
    return {
      errors: new Errors()
    }
  },

  computed: {
    ...mapGetters({
      customer: 'customers/currentCustomer'
    })
  },

  methods: {
    ...mapActions({
      getCustomer: 'customers/getCustomer',
      updateCustomer: 'customers/updateCustomer'
    }),

    send() {
      this.updateCustomer({
        id: this.customer.id,
        payload: this.customer
      }).then(() => {
        this.$router.replace({ name: 'customers' })
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  },

  mounted() {
    this.getCustomer(this.id)
  }
}
</script>
