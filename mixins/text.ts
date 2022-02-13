import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      text: 'Hello'
    }
  },
  methods: {
    changeText(text: string) {
      this.text = text
    }
  }
})
