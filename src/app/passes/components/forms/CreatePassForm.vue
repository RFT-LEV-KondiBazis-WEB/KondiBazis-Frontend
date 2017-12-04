<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Create Pass</div>
    <form @submit.prevent="send()">
      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('name') }">
          <label for="name" class="block text-grey-darker text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" class="form-control" name="name" autofocus v-model="name">
          <span class="help-block" v-if="errors.has('name')">
            {{ errors.get('name').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('price') }">
          <label for="price" class="block text-grey-darker text-sm font-bold mb-2">Price</label>
          <input type="text" id="price" class="form-control" name="price" v-model="price">
          <span class="help-block" v-if="errors.has('price')">
            {{ errors.get('price').validationMessage }}
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Errors from '../../../../helpers/Errors'

export default {
  
  data() {
    return {
      name: null,
      price: null,
      duration: null,
      isLimited: false,
      limitNumber: null,
      available: true,
      errors: new Errors()
    }
  },

  methods: {
    ...mapActions({
      createPass: 'passes/createPass'
    }),

    send() {
      this.createPass({
        payload: {
          name: this.name,
          price: this.price,
          duration: this.duration,
          isLimited: this.isLimited,
          limitNumber: this.limitNumber,
          available: this.available
        }
      }).then(() => {
        this.$router.replace({ name: 'passes' })
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  }
}
</script>
