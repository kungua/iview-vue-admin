<template>
  <div>
    <slot name="left"></slot>
    <span :id="eleId" :class="countClass" ref="number"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
// import './CountTo.less'

export default {
  name: 'CountTo',
  props: {
    /**
     * @description 起始值
     */
    startVal: { type: Number, default: 0 },
    /**
     * @description 最终值
     */
    endVal: { type: Number, required: true },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: { type: Number, default: 0 },
    /**
     * @description 渐变时长
     */
    duration: { type: Number, default: 1 },
    /**
     * @description 是否使用变速效果
     */
    useEasing: { type: Boolean, default: false },
    /**
     * @description 是否使用分组效果
     */
    useGrouping: { type: Boolean, default: true },
    /**
     * @description 分组符号
     */
    separator: { type: String, default: ',' },
    /**
     * @description 整数和小数分割符号
     */
    decimal: { type: String, default: '.' },
    /**
     * @description 动画延迟开始时间
     */
    delay: { type: Number, default: 0 },
    /**
     * @description 外部传进来的类名
     */
    className: { type: String, default: '' }
  },
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return ['count-to-number', this.className]
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    const {
      eleId,
      startVal,
      endVal,
      decimals,
      duration,
      useEasing,
      useGrouping,
      separator,
      decimal,
      delay
    } = this
    this.$nextTick(() => {
      this.counter = new CountUp(eleId, startVal, endVal, decimals, duration, {
        useEasing,
        useGrouping,
        separator,
        decimal
      })
    })
    setTimeout(() => {
      this.counter.start()
      this.emitEndEvent()
    }, delay)
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$emit('on-animation-end', Number(this.getCount()))
      }, this.duration * 1000 + 23)
    }
  }
}
</script>

<style scoped lang="less">
@import "./CountTo.less";
</style>
