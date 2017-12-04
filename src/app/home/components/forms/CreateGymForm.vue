<template>
  <div class="px-8 py-6">
    <div class="text-xl text-regular mb-4">Create Gym</div>
    <form @submit.prevent="send()">
      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('name') }">
          <label for="name" class="block text-grey-darker text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" class="form-control" name="name" placeholder="Name" autofocus v-model="name">
          <span class="help-block" v-if="errors.has('name')">
            {{ errors.get('name').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('city') }">
          <label for="city" class="block text-grey-darker text-sm font-bold mb-2">City</label>
          <input type="text" id="city" class="form-control" name="name" placeholder="City" v-model="city">
          <span class="help-block" v-if="errors.has('city')">
            {{ errors.get('city').validationMessage }}
          </span>
        </div>
      </div>

      <div class="flex row md:mb-0">
        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('address') }">
          <label for="address" class="block text-grey-darker text-sm font-bold mb-2">Address</label>
          <input type="text" id="address" class="form-control" name="address" placeholder="Address" v-model="address">
          <span class="help-block" v-if="errors.has('address')">
            {{ errors.get('address').validationMessage }}
          </span>
        </div>

        <div class="form-group md:col-6 sm:col-12 sm:mb-4" v-bind:class="{ 'has-error': errors.has('zipCode') }">
          <label for="zipCode" class="block text-grey-darker text-sm font-bold mb-2">Zip code</label>
          <input type="text" id="zipCode" class="form-control" name="zipCode" placeholder="Zip code" v-model="zipCode">
          <span class="help-block" v-if="errors.has('zipCode')">
            {{ errors.get('zipCode').validationMessage }}
          </span>
        </div>
      </div>

      <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.has('description') }">
        <label for="description" class="block text-grey-darker text-sm font-bold mb-2">Description</label>
        <textarea type="text" id="description" class="form-control" name="description" placeholder="Description" rows="3" v-model="description"></textarea>
        <span class="help-block" v-if="errors.has('description')">
          {{ errors.get('description').validationMessage }}
        </span>
      </div>

      <div class="form-group mb-4" v-bind:class="{ 'has-error': errors.has('openingHours') }">
        <label for="openingHours" class="block text-grey-darker text-sm font-bold mb-2">Opening hours</label>
        <textarea type="text" id="openingHours" class="form-control" name="openingHours" placeholder="Opening hours" rows="3" v-model="openingHours"></textarea>
        <span class="help-block" v-if="errors.has('openingHours')">
          {{ errors.get('openingHours').validationMessage }}
        </span>
      </div>

      <div class="col-md-8 col-md-offset-4">
        <button type="submit" class="btn btn-primary mb-4">Create</button>
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
      city: null,
      address: null,
      zipCode: null,
      description: null,
      openingHours: null,
      errors: new Errors()
    }
  },

  methods: {
    ...mapActions({
      createGym: 'home/createGym'
    }),
    
    send() {
      this.createGym({
        payload: {
          name: this.name,
          city: this.city,
          address: this.address,
          zipCode: this.zipCode,
          description: this.description,
          openingHours: this.openingHours
        }
      }).then(() => {
        this.$router.replace({ name: 'home' })
      }).catch((errors) => {
        this.errors.record(errors)
      })
    }
  }

}
</script>
