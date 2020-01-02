<template>
  <div class="split-pane-wrapper" ref="outer">
    <div
      class="pane pane-left"
      :style="{
        width: leftOffsetPercent,
        paddingRight: `${this.triggerWidth / 2}px`
      }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      :style="{ left: triggerLeft, width: `${triggerWidth}px` }"
      @mousedown="handleMousedown"
    ></div>
    <div
      class="pane pane-right"
      :style="{
        left: leftOffsetPercent,
        paddingLeft: `${this.triggerWidth / 2}px`
      }"
    >
      <slot name="left"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      // leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.target.getBoundingClientRect().left
      this.canMove = true
    },
    handleMousemove (event) {
      if (!this.canMove) return
      const { left, width } = this.$refs.outer.getBoundingClientRect()
      const { pageX } = event
      let offsetPercent =
        (pageX - this.initOffset + this.triggerWidth / 2 - left) / width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>

<style scoped lang="less">
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .pane {
    position: absolute;
    top: 0;
    height: 100%;

    &-left {
      background-color: paleturquoise;
    }

    &-right {
      right: 0;
      background-color: palevioletred;
    }

    &-trigger-con {
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      cursor: col-resize;
    }
  }
}
</style>
