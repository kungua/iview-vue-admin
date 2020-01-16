<template>
  <div class="form-wrapper">
    Form 组件
    <Button @click="handleSubmit" type="primary">提交</Button>
    <Button @click="handleReset">重置</Button>

    <form-single
      v-for="(item, index) in formList"
      :config="item"
      :value-data="valueData"
      :rule-data="ruleData"
      :error-store="errorStore"
      :key="`form_${index}`"
      ref="formSingle">
    </form-single>
    <!--    <form-group :list="formList" :url="url"></form-group>-->
    <!--    <Form :model="formData" :rules="rule" :label-width="80" ref="form">-->
    <!--      <FormItem label="姓名" prop="name">-->
    <!--        <Input v-model="formData.name"/>-->
    <!--      </FormItem>-->

    <!--      <FormItem label="年龄">-->
    <!--        <Input v-model="formData.age"/>-->
    <!--      </FormItem>-->

    <!--      <FormItem>-->
    <!--        <Button @click="handleSubmit" type="primary">提交</Button>-->
    <!--      </FormItem>-->
    <!--    </Form>-->
  </div>
</template>

<script>
// import FormGroup from '../components/form-group'
import clonedeep from 'clonedeep'
import formData from '../mock/reponse/formData'
import FormSingle from '../components/form-single'
// import { sentFormData } from '../api/data'

// const validateName = (rule, value, callback) => {
//   if (value !== 'hongkun') {
//     callback(new Error('Name Error'))
//   } else {
//     callback()
//   }
// }

export default {
  name: 'FormPage',
  components: {
    FormSingle
    // FormGroup
  },
  data () {
    return {
      url: '/data/formData',
      formList: formData,
      valueData: {},
      ruleData: {},
      errorStore: {},
      // formData: {
      //   name: '',
      //   age: 18
      // },
      // rule: {
      //   name: [
      //     { required: true, message: '你还不填名字?', trigger: 'blur' },
      //     { validator: validateName, trigger: 'blur' },
      //   ]
      // }
    }
  },
  mounted () {
    const valueData = {}
    const ruleData = {}
    const errorStore = {}
    formData.forEach(item => {
      valueData[item.name] = item.value
      ruleData[item.name] = item.rule
      errorStore[item.name] = ''
    })
    this.valueData = valueData
    this.ruleData = ruleData
    this.errorStore = errorStore
  },
  methods: {
    handleSubmit () {
      this.$refs.singleForm.validate()
      // this.$refs.form.validate(valid => {
      //   if (valid) {
      //     sentFormData({
      //       url: this.url,
      //       data: this.valueList
      //     }).then(res => {
      //       this.$emit('on-submit-success', res)
      //       console.log(res)
      //     }).catch(err => {
      //       console.log(err)
      //       const fakeErr = { name: '你又把名字写错了！' }
      //       this.$emit('on-submit-error', fakeErr)
      //       for (let key in fakeErr) {
      //         this.errorStore[key] = fakeErr[key]
      //       }
      //       // this.$emit('on-submit-error', err)
      //     })
      //   }
      // })
    },
    handleReset () {
      this.valueList = clonedeep(this.initValueList)
    },
    // handleSubmit () {
    //   this.$refs.form.validate(valid => {
    //     if (valid) {
    //       sentFormData(this.formData)
    //         .then(res => {
    //           console.log(res)
    //         })
    //     }
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.form-wrapper {
  background-color: #ddd;
  padding: 20px;
}
</style>
