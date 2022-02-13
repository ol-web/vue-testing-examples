<template>
  <span
    :data-text-items="textArray.length"
    class="pretty-text"
    :class="{ 'pretty-text--big': textArray.length >= 2 }"
    v-text="prettyText"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'

export interface TextObject {
  value1?: any
  value2?: any
  text: string
}

export default Vue.extend({
  props: {
    textArray: {
      type: Array as PropType<TextObject[]>,
      required: true
    }
  },
  computed: {
    prettyText(): string {
      return this.textArray.map(obj => obj.text).join(' ❤ ')
    }
  }
})
</script>
