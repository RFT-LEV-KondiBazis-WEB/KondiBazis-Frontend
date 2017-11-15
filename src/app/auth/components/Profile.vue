<template>
  <div class="container py-8">
    <div class="constrain-lg mx-auto">
      <div class="card br1 box-shadow">
        <div class="px-8 py-6">
          <div class="text-xl text-center text-regular mb-6">Profile</div>
            <form @submit.prevent="submit">
              <div class="flex row md:mb-0">
                <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.firstName }">
                  <label for="firstName" class="block text-grey-darker text-sm font-bold mb-2">First name</label>
                  <input type="text" id="firstName" class="form-control" name="firstName" placeholder="First name" autofocus v-model="user.firstName">
                  <span class="help-block" v-if="errors.firstName">
                    {{ errors.firstName[0] }}
                  </span>
                </div>

                <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.lastName }">
                  <label for="lastName" class="block text-grey-darker text-sm font-bold mb-2">Last name</label>
                  <input type="text" id="lastName" class="form-control" name="lastName" placeholder="Last name" v-model="user.lastName">
                  <span class="help-block" v-if="errors.lastName">
                    {{ errors.lastName[0] }}
                  </span>
                </div>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.username }">
                <label for="username" class="block text-grey-darker text-sm font-bold mb-2">Username</label>
                <input type="text" id="username" disabled class="form-control" name="username" placeholder="Username" v-model="user.username">
                <span class="help-block" v-if="errors.username">
                  {{ errors.username[0] }}
                </span>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.email }">
                <label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email address</label>
                <input type="text" id="email" class="form-control" name="email" placeholder="Email address" v-model="user.email">
                <span class="help-block" v-if="errors.email">
                  {{ errors.email[0] }}
                </span>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.password }">
                <label for="password" class="block text-grey-darker text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" class="form-control" name="password" placeholder="******************" v-model="user.password">
                <span class="help-block" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
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

export default {
  data() {
    return {
      errors: []
    }
  },
  
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  methods: {
    ...mapActions({
      'updateProfile': 'auth/updateProfile'
    }),

    submit() {
      this.updateProfile({
        payload: this.user
      }).then(() => {
        this.$router.replace({ name: 'home' })
      }).catch((errors) => {
        this.errors = errors
      })
    }
  }
}
</script>
