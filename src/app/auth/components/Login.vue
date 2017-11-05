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
          <div class="text-xl text-center text-regular mb-6">Login</div>
          <form @submit.prevent="submit">
            <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.username }">
              <label for="username" class="block text-grey-darker text-sm font-bold mb-2">Username</label>
              <input type="text" id="username" class="form-control" name="username" placeholder="Username" autofocus v-model="username">
              <span class="help-block" v-if="errors.username">
                {{ errors.username[0] }}
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
              <button type="submit" class="btn btn-primary btn-block mb-4">Login</button>
              <router-link :to="{ name: 'register' }" class="btn btn-secondary btn-block mb-4">Register</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import localforage from 'localforage'

export default {
  data() {
      return {
        name: null,
        username: null,
        password: null,
        errors: []
      }
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    submit() {
      this.login({
        payload: {
          username: this.username,
          password: this.password
        }
      }).then(() => {
        localforage.getItem('intended').then((name) => {
          if (isEmpty(name)) {
            this.$router.replace({ name: 'home' })
            return
          }
          this.$router.replace({ name: name })
        })
      }).catch((errors) => {
        this.errors = errors
      })
    }
  }
}
</script>
