<template>
  <div class="container py-8">
    <div class="constrain-sm mx-auto">
      <div class="text-center p-6">
        <a href="#">
          <img src="/static/logo.svg" alt="FitBase" class="img-16r" />
        </a>
      </div>
      <div class="card br1 box-shadow">
        <div class="px-8 py-6">
          <div class="text-xl text-center text-regular mb-6">Register</div>
          <form @submit.prevent="submit">

            <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.first_name }">
              <label for="first_name" class="block text-grey-darker text-sm font-bold mb-2">First name</label>
              <input type="text" id="first_name" class="form-control" name="first_name" placeholder="First name" autofocus v-model="first_name">
              <span class="help-block" v-if="errors.first_name">
                {{ errors.first_name[0] }}
              </span>
            </div>

            <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.last_name }">
              <label for="last_name" class="block text-grey-darker text-sm font-bold mb-2">Last name</label>
              <input type="text" id="last_name" class="form-control" name="last_name" placeholder="Last name" v-model="last_name">
              <span class="help-block" v-if="errors.last_name">
                {{ errors.last_name[0] }}
              </span>
            </div>

            <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.username }">
              <label for="username" class="block text-grey-darker text-sm font-bold mb-2">Username</label>
              <input type="text" id="username" class="form-control" name="username" placeholder="Username" v-model="username">
              <span class="help-block" v-if="errors.username">
                {{ errors.username[0] }}
              </span>
            </div>

            <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.email }">
              <label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email address</label>
              <input type="text" id="email" class="form-control" name="email" placeholder="Email address" v-model="email">
              <span class="help-block" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>

            <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.password }">
              <label for="password" class="block text-grey-darker text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" class="form-control" name="password" placeholder="******************" v-model="password">
              <span class="help-block" v-if="errors.password">
                {{ errors.password[0] }}
              </span>
            </div>

            <div class="col-md-8 col-md-offset-4">
              <button type="submit" class="btn btn-primary btn-block mb-4">Register</button>
              <router-link :to="{ name: 'login' }" class="btn btn-secondary btn-block mb-4">Login</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      password: null,
      errors: []  
    }
  },

  methods: {
    ...mapActions({
      register: 'auth/register'
    }),

    submit() {
      this.register({
        payload: {
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
          email: this.email,
          password: this.password
        }
      }).then(() => {
        this.$router.replace({ name: 'home' })
      }).catch((errors) => {
        this.errors = errors
      })
    }
  }
}
</script>
