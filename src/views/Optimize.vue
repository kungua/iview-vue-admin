<template>
  <div class="wrapper">
    <CheckboxGroup v-model="checkedArr">
      <virtual-list :size="30" :remain="6">
        <p v-for="item in list" :key="`check${item.value}`" style="height: 30px;">
          <Checkbox :label="item.value">
            <Icon type="logo-twitter"></Icon>
            <span>{{ item.label }}</span>
          </Checkbox>
        </p>
      </virtual-list>
    </CheckboxGroup>
    <!--    <Select v-model="selectData" style="width:200px">-->
    <!--      <Option-->
    <!--        v-for="item in list"-->
    <!--        :value="item.value"-->
    <!--        :key="item.value">-->
    <!--        {{ item.label }}-->
    <!--      </Option>-->
    <!--    </Select>-->
    <!--    <Select v-model="selectData" style="width:200px">-->
    <!--      <virtual-list :size="30" :remain="4">-->
    <!--        <Option-->
    <!--          v-for="item in list"-->
    <!--          :value="item.value"-->
    <!--          :key="item.value">-->
    <!--          {{ item.label }}-->
    <!--        </Option>-->
    <!--      </virtual-list>-->
    <!--    </Select>-->
    <!--    <Select v-model="selectData" style="width:200px">-->
    <!--      <virtual-list :size="30" :remain="6">-->
    <!--        <Option-->
    <!--          v-for="item in list"-->
    <!--          :value="item.value"-->
    <!--          :key="item.value">-->
    <!--          {{ item.label }}-->
    <!--        </Option>-->
    <!--      </virtual-list>-->
    <!--    </Select>-->
  </div>
</template>

<script>
import { doCustomTimes } from '../lib/tools'
import VirtualList from 'vue-virtual-scroll-list'

export default {
  name: 'Optimize',
  component: {
    VirtualList
  },
  data () {
    return {
      list: [],
      selectData: 0,
      checkedArr: []
    }
  },
  mounted () {
    const list = []
    doCustomTimes(700, index => {
      list.push({
        value: index,
        label: `select${index}`
      })
    })
    this.list = list
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 370px;
  overflow: auto;
}
</style>
