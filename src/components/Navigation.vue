<template>
  <div class="bg-light border-t border-brand bw3 box-shadow" v-if="user.authenticated">
    <nav>
      <div class="container">
        <div class="flex-spaced flex-y-center py-4">
          <div class="flex-y-center">
            <router-link :to="{ name: 'home' }" class="m-r-8 link-light-soft">
              <img src="/static/logo.svg" class="block img-7r" alt="FitBase" />
            </router-link>
          </div>

          <nav class="flex text-sm">
            <router-link :to="{ name: 'home' }" class="link-plain link-muted text-medium mr-7">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon text-light-muted mr-2" viewBox="0 0 20 20"><path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/></svg> Rooms
            </router-link>
            <router-link :to="{ name: 'customers' }" class="link-plain link-muted text-medium mr-7">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon text-light-muted mr-2" viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"/></svg> Customers
            </router-link>
            <router-link :to="{ name: 'passes' }" class="link-plain link-muted text-medium mr-7">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon text-light-muted mr-2" viewBox="0 0 20 20"><path d="M20 12v5H0v-5a2 2 0 1 0 0-4V3h20v5a2 2 0 1 0 0 4zM3 5v10h14V5H3zm7 7.08l-2.92 2.04L8.1 10.7 5.27 8.56l3.56-.08L10 5.12l1.17 3.36 3.56.08-2.84 2.15 1.03 3.4L10 12.09z"/></svg> Passes
            </router-link>
          </nav>

          <div>
            <a href="#" @click.prevent="signout" class="link-plain link-muted">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon text-light-muted" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>
            </a>
          </div>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),

    signout() {
      this.logout().then(() => {
        this.$router.replace({ name: 'login' })
      })
    }
  }
}
</script>
