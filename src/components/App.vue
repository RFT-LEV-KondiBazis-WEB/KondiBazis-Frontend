<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: { Navigation }
}
</script>
