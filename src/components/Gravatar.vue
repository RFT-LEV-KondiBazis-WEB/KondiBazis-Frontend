<template>
  <img :src="url" :alt="alt" />
</template>

<script>
import md5 from 'md5'

export default {
  props: {
    email: {
      type: String
    },
    size: {
      type: Number,
      default: 64
    },
    rating: {
      type: String,
      default: 'g'
    },
    alt: {
      type: String
    }
  },

  computed: {
    url() {
      const img = [
        '//www.gravatar.com/avatar/',
        md5(this.email.trim().toLowerCase()),
        `?s=${this.size}`,
        `&r=${this.rating}`
      ]

      return img.join('')
    }
  }
}
</script>
