<template>
  <div class="container py-8" v-if="user">
    <div class="constrain-lg mx-auto">
      <div class="card br1 box-shadow">
        <div class="px-8 py-6">
          <div class="text-xl text-center text-regular mb-6">Profile</div>
            <form @submit.prevent="submit">
              <div class="flex row md:mb-0">
                <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('firstName') }">
                  <label for="firstName" class="block text-grey-darker text-sm font-bold mb-2">First name</label>
                  <input type="text" id="firstName" class="form-control" name="firstName" placeholder="First name" autofocus v-model="user.firstName">
                  <span class="help-block" v-if="errors.has('firstName')">
                    {{ errors.get('firstName').validationMessage }}
                  </span>
                </div>

                <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('lastName') }">
                  <label for="lastName" class="block text-grey-darker text-sm font-bold mb-2">Last name</label>
                  <input type="text" id="lastName" class="form-control" name="lastName" placeholder="Last name" v-model="user.lastName">
                  <span class="help-block" v-if="errors.has('lastName')">
                    {{ errors.get('lastName').validationMessage }}
                  </span>
                </div>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.has('username') }">
                <label for="username" class="block text-grey-darker text-sm font-bold mb-2">Username</label>
                <input type="text" id="username" disabled class="form-control" name="username" placeholder="Username" v-model="user.username">
                <span class="help-block" v-if="errors.has('username')">
                  {{ errors.get('username').validationMessage }}
                </span>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.has('email') }">
                <label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email address</label>
                <input type="text" id="email" class="form-control" name="email" placeholder="Email address" v-model="user.email">
                <span class="help-block" v-if="errors.has('email')">
                  {{ errors.get('email').validationMessage }}
                </span>
              </div>

              <div class="flex row md:mb-0">
                <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('password') }">
                  <label for="password" class="block text-grey-darker text-sm font-bold mb-2">Password</label>
                  <input type="password" id="password" class="form-control" name="password" placeholder="******************" v-model="user.password">
                  <span class="help-block" v-if="errors.has('password')">
                    {{ errors.get('password').validationMessage }}
                  </span>
                </div>

                <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('passwordConfirm') }">
                  <label for="passwordConfirm" class="block text-grey-darker text-sm font-bold mb-2">Password confirmation</label>
                  <input type="password" id="passwordConfirm" class="form-control" name="passwordConfirm" placeholder="******************" v-model="user.passwordConfirm">
                  <span class="help-block" v-if="errors.has('passwordConfirm')">
                    {{ errors.get('passwordConfirm').validationMessage }}
                  </span>
                </div>

              </div>

              <div class="col-md-8 col-md-offset-4">
                <button type="submit" class="btn btn-primary btn-block mb-4">Update</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Errors from '../../../helpers/Errors'

export default {
  data() {
    return {
      errors: new Errors()
    }
  },
  
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  methods: {
    ...mapActions({
      'updateProfile': 'auth/updateProfile',
      'fetchUser': 'auth/fetchUser'
    }),

    submit() {
      this.updateProfile({
        payload: {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
          passwordConfirm: this.user.passwordConfirm
        }
      }).then(() => {
        this.$router.replace({ name: 'home' })
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  },

  mounted() {
    this.fetchUser()
  }
}
</script>
