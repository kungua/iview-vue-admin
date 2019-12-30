<template>
  <div>
    <a-input @input="handleInput"/>
    <p>Text: {{ inputValue }}</p>
    <a-show :content="inputValue"/>
  </div>
</template>

<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'

export default {
  name: 'Store',
  components: {
    AInput,
    AShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style scoped></style>
