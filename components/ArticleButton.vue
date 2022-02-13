<template>
  <div>
    <p>Your article has a slug of: <span class="slug" v-text="slug" /></p>
    <button type="button" @click="onClick" v-text="label" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    slug(): string {
      return this.$route.params.slug
    }
  },
  methods: {
    onClick() {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        window.open(
          'https://google.com',
          '_blank',
          'noopener,noreferrer,resizable'
        )
      }
    }
  }
})
</script>
