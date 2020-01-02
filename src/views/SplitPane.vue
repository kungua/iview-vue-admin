<template>
  <div class="split-pane-con">
    <!--    <split-pane :value="offset" @input="handleInput"/>-->
    <!--    <split-pane v-model="offset" />-->
    <split-pane :value.sync="offset">
      <div slot="left">左边鸭</div>
      <div slot="right">
        右边呀
      </div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '../components/split-pane'

export default {
  name: 'SplitPanePage',
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.7
    }
  },
  methods: {
    handleInput (val) {
      this.offset = val
    }
  }
}
</script>

<style scoped lang="less">
.split-pane-con {
  width: 400px;
  height: 300px;
  background-color: papayawhip;
}
</style>
