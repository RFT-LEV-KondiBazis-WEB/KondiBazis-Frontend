<template>
  <div class="container py-8">
    <div class="constrain-sm mx-auto">
      <div class="card br1 box-shadow">
        <div class="px-8 py-6">
          <div class="text-xl text-center text-regular mb-6">Profile</div>
            <form class="form-horizontal" @submit.prevent="submit">
              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.first_name }">
                <label for="first_name" class="sr-only">First name</label>
                <input type="text" id="first_name" class="form-control" name="first_name" placeholder="First name" autofocus v-model="user.first_name">
                <span class="help-block" v-if="errors.first_name">
                  {{ errors.first_name[0] }}
                </span>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.last_name }">
                <label for="last_name" class="-only">Last name</label>
                <input type="text" id="last_name" class="form-control" name="last_name" placeholder="Last name" v-model="user.last_name">
                <span class="help-block" v-if="errors.last_name">
                  {{ errors.last_name[0] }}
                </span>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.username }">
                <label for="username" class="sr-only">Username</label>
                <input type="text" id="username" disabled class="form-control" name="username" placeholder="Username" v-model="user.username">
                <span class="help-block" v-if="errors.username">
                  {{ errors.username[0] }}
                </span>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.email }">
                <label for="email" class="sr-only">Email address</label>
                <input type="text" id="email" class="form-control" name="email" placeholder="Email address" v-model="user.email">
                <span class="help-block" v-if="errors.email">
                  {{ errors.email[0] }}
                </span>
              </div>

              <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.password }">
                <label for="password" class="sr-only">Password</label>
                <input type="password" id="password" class="form-control" name="password" placeholder="Password" v-model="user.password">
                <span class="help-block" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
              </div>

              <div class="form-group">
                <div class="col-md-8 col-md-offset-4">
                  <button type="submit" class="btn btn-primary btn-block mb-4">Update</button>
                </div>
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
