<template>
  <div class="form-wrapper">
    Form 组件

    <Form :model="formData" :rules="rule" :label-width="80" ref="form">
      <FormItem label="姓名" prop="name">
        <Input v-model="formData.name"/>
      </FormItem>

      <FormItem label="年龄">
        <Input v-model="formData.age"/>
      </FormItem>

      <FormItem>
        <Button @click="handleSubmit" type="primary">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { sentFormData } from '../api/data'

const validateName = (rule, value, callback) => {
  if (value !== 'hongkun') {
    callback(new Error('Name Error'))
  } else {
    callback()
  }
}

export default {
  name: 'FormPage',
  data () {
    return {
      formData: {
        name: '',
        age: 18
      },
      rule: {
        name: [
          { required: true, message: '你还不填名字?', trigger: 'blur' },
          { validator: validateName, trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          sentFormData(this.formData)
            .then(res => {
              console.log(res)
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.form-wrapper {
  background-color: #ddd;
  padding: 20px;
}
</style>
