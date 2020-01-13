<template>
  <Form
    v-if="Object.keys(valueList).length"
    :label-width="labelWidth"
    :model="valueList"
    :rules="rules"
    ref="form"
  >
    <FormItem
      v-for="(item, index) in list"
      :prop="item.name"
      :label="item.label"
      :key="`${_uid}_${index}`"
      :error="errorStore[item.name]"
      @click.native="handleFocus(item.name)"
      label-position="left"
    >
      <component
        v-model="valueList[item.name]"
        :is="item.type"
        :range="item.range"
      >
        <template v-if="item.children">
          <component
            v-for="(child, i) in item.children.list"
            :is="item.children.type"
            :value="child.value"
            :label="child.label"
            :key="`${_uid}_${index}_${i}`"
          >
            {{ child.title }}
          </component>
        </template>
      </component>
    </FormItem>

    <FormItem>
      <Button @click="handleSubmit" type="primary">提交</Button>
      <Button @click="handleReset">重置</Button>
    </FormItem>
  </Form>
</template>

<script>
import clonedeep from 'clonedeep'
import { sentFormData } from '../../api/data'

export default {
  name: 'FormGroup',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 65
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      initValueList: [],
      rules: {},
      valueList: {},
      errorStore: {},
    }
  },
  watch: {
    list () {
      this.setInitValue()
    }
  },
  mounted () {
    this.setInitValue()
  },
  methods: {
    setInitValue () {
      this.initValueList = this.list.map(item => item.value)
      const rules = {}
      const valueList = {}
      const initValueList = {}
      const errorStore = {}
      this.list.forEach(item => {
        rules[item.name] = item.rule
        valueList[item.name] = item.value
        initValueList[item.name] = item.value
        errorStore[item.name] = ''
      })
      this.rules = rules
      this.valueList = valueList
      this.initValueList = initValueList
      this.errorStore = errorStore
    },
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          sentFormData({
            url: this.url,
            data: this.valueList
          }).then(res => {
            this.$emit('on-submit-success', res)
            console.log(res)
          }).catch(err => {
            console.log(err)
            const fakeErr = { name: '你又把名字写错了！' }
            this.$emit('on-submit-error', fakeErr)
            for (let key in fakeErr) {
              this.errorStore[key] = fakeErr[key]
            }
            // this.$emit('on-submit-error', err)
          })
        }
      })
    },
    handleReset () {
      this.valueList = clonedeep(this.initValueList)
    },
    handleFocus (name) {
      console.log(name)
      this.errorStore[name] = ''
    }
  }
}
</script>

<style scoped></style>
