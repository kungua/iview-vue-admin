<template>
  <div class="form-wrapper">
    Form 组件

    <form-group :list="formList" :url="url"></form-group>
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
import FormGroup from '../components/form-group'
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
    FormGroup
  },
  data () {
    return {
      url: '/data/formData',
      formList: [
        {
          name: 'name',
          type: 'i-input',
          value: '',
          label: '姓名',
          rule: [
            { required: true, message: '你又不写名！', trigger: 'blur' }
          ]
        },
        {
          name: 'range',
          type: 'slider',
          value: [10, 40],
          range: true,
          label: '范围'
        },
        {
          name: 'gender',
          type: 'i-select',
          value: '',
          label: '性别',
          children: {
            type: 'i-option',
            list: [
              { title: '男', value: 'male' },
              { title: '女', value: 'female' }
            ]
          }
        },
        {
          name: 'education',
          type: 'radio-group',
          value: 1,
          label: '学历',
          children: {
            type: 'radio',
            list: [
              { label: 1, title: '本科' },
              { label: 2, title: '研究生' },
              { label: 3, title: '博士生' }
            ]
          }
        },
        {
          name: 'skill',
          type: 'checkbox-group',
          value: [1, 2],
          label: '技能',
          children: {
            type: 'checkbox',
            list: [
              { label: 1, title: 'Vue' },
              { label: 2, title: 'Nodejs' },
              { label: 3, title: 'MySql' }
            ]
          }
        },
        {
          name: 'inWork',
          type: 'i-switch',
          value: false,
          label: '在职'
        },
      ]
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
  methods: {
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
