<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Create Customer</div>
      <form @submit.prevent="send()">
        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('firstName') }">
            <label for="firstName" class="block text-grey-darker text-sm font-bold mb-2">First name</label>
            <input type="text" id="firstName" class="form-control" name="firstName" placeholder="First name" autofocus v-model="firstName">
            <span class="help-block" v-if="errors.has('firstName')">
              {{ errors.get('firstName').validationMessage }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('lastName') }">
            <label for="lastName" class="block text-grey-darker text-sm font-bold mb-2">Last name</label>
            <input type="text" id="lastName" class="form-control" name="lastName" placeholder="Last name" v-model="lastName">
            <span class="help-block" v-if="errors.has('lastName')">
              {{ errors.get('lastName').validationMessage }}
            </span>
          </div>
        </div>

        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('email') }">
            <label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email address</label>
            <input type="text" id="email" class="form-control" name="email" placeholder="Email address" v-model="email">
            <span class="help-block" v-if="errors.has('email')">
              {{ errors.get('email').validationMessage }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('phone') }">
            <label for="phone" class="block text-grey-darker text-sm font-bold mb-2">Phone number</label>
            <input type="text" id="phone" class="form-control" name="phone" placeholder="Phone number" v-model="phone">
            <span class="help-block" v-if="errors.has('phone')">
              {{ errors.get('phone').validationMessage }}
            </span>
          </div>
        </div>

        <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.has('password') }">
          <label for="password" class="block text-grey-darker text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" class="form-control" name="password" placeholder="******************" v-model="password">
          <span class="help-block" v-if="errors.get('password')">
            {{ errors.get('password').validationMessage }}
          </span>
        </div>

        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('gender') }">
            <label for="gender" class="block text-grey-darker text-sm font-bold mb-2">Gender</label>
            <select id="gender" class="form-control" name="gender" placeholder="Gender" v-model="gender">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span class="help-block" v-if="errors.has('gender')">
              {{ errors.get('gender').validationMessage }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('birth_date') }">
            <label for="birth_date" class="block text-grey-darker text-sm font-bold mb-2">Birth date</label>
            <input type="text" id="birth_date" class="form-control" name="birth_date" placeholder="Birth date" v-model="birth_date">
            <span class="help-block" v-if="errors.has('birth_date')">
              {{ errors.get('birth_date').validationMessage }}
            </span>
          </div>
        </div>

        <div class="col-md-8 col-md-offset-4">
          <button type="submit" class="btn btn-primary mb-4">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Errors from '../../../../helpers/Errors'

export default {

  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      password: null,
      gender: "",
      birth_date: null,
      errors: new Errors()
    }
  },

  methods: {
    ...mapActions({
      'createCustomer': 'customer/createCustomer'
    }),

    send() {
      this.createCustomer({
        payload: {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          gender: this.gender,
          birth_date: this.birth_date,
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
