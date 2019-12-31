<template>
  <div>
    count-to
    <span :id="eleId"></span>
  </div>
</template>

<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    }
  },
  mounted () {
    this.$nextTick(() => {
      const { startVal } = this
      const counter = new CountUp('count_up', startVal)
    })
  }
}
</script>

<style scoped></style>
