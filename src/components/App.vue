<template>
  <div id="app">
    <Navigation/>
    <div class="container md:py-8">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: { Navigation }
}
</script>
