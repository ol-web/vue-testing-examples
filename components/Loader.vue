<template>
  <div class="loader">
    <div v-if="isLoading" class="loading-text">
      Hello, <span class="name" v-text="name" />. Please wait...
    </div>
    <slot v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isLoading: true,
      timeout: setTimeout(() => {}, 0)
    }
  },
  computed: {
    name(): string {
      return this.$accessor.name
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.isLoading = false
      this.$emit('loaded')
    }, 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }
})
</script>
