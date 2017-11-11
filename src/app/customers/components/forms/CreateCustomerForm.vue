<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Create Customer</div>
      <form @submit.prevent="send()">
        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.first_name }">
            <label for="first_name" class="block text-grey-darker text-sm font-bold mb-2">First name</label>
            <input type="text" id="first_name" class="form-control" name="first_name" placeholder="First name" autofocus v-model="first_name">
            <span class="help-block" v-if="errors.first_name">
              {{ errors.first_name[0] }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.last_name }">
            <label for="last_name" class="block text-grey-darker text-sm font-bold mb-2">Last name</label>
            <input type="text" id="last_name" class="form-control" name="last_name" placeholder="Last name" v-model="last_name">
            <span class="help-block" v-if="errors.last_name">
              {{ errors.last_name[0] }}
            </span>
          </div>
        </div>

        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.email }">
            <label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email address</label>
            <input type="text" id="email" class="form-control" name="email" placeholder="Email address" v-model="email">
            <span class="help-block" v-if="errors.email">
              {{ errors.email[0] }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.phone }">
            <label for="phone" class="block text-grey-darker text-sm font-bold mb-2">Phone number</label>
            <input type="text" id="phone" class="form-control" name="phone" placeholder="Phone number" v-model="phone">
            <span class="help-block" v-if="errors.phone">
              {{ errors.phone[0] }}
            </span>
          </div>
        </div>

        <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.password }">
          <label for="password" class="block text-grey-darker text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" class="form-control" name="password" placeholder="******************" v-model="password">
          <span class="help-block" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </div>

        <div class="flex row md:mb-0">
          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.gender }">
            <label for="gender" class="block text-grey-darker text-sm font-bold mb-2">Gender</label>
            <select id="gender" class="form-control" name="gender" placeholder="Gender" v-model="gender">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span class="help-block" v-if="errors.gender">
              {{ errors.gender[0] }}
            </span>
          </div>

          <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.birth_date }">
            <label for="birth_date" class="block text-grey-darker text-sm font-bold mb-2">Birth date</label>
            <input type="text" id="birth_date" class="form-control" name="birth_date" placeholder="Birth date" v-model="birth_date">
            <span class="help-block" v-if="errors.birth_date">
              {{ errors.birth_date[0] }}
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
      errors: []
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
        this.errors = errors
      })
    }
  }
}
</script>
