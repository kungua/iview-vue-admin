<template>
  <Form
    v-if="config"
    :label-width="100"
    :model="valueData"
    :rules="ruleData"
    ref="form"
  >
    <FormItem
      :prop="config.name"
      :label="config.label"
      :error="errorStore[config.name]"
      @click.native="handleFocus(config.name)"
      label-position="left"
    >
      <component
        v-model="valueData[config.name]"
        :is="config.type"
        :range="config.range"
      >
        <template v-if="config.children">
          <component
            v-for="(child, i) in config.children.list"
            :is="config.children.type"
            :value="child.value"
            :label="child.label"
            :key="`${_uid}_${i}`"
          >
            {{ child.title }}
          </component>
        </template>
      </component>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'FormSingle',
  props: {
    valueData: {
      type: Object,
      default: () => ({})
    },
    ruleData: {
      type: Object,
      default: () => ({})
    },
    errorStore: {
      type: Object,
      default: () => ({})
    },
    config: Object
  },
  methods: {
    handleFocus (name) {
      console.log(name)
      this.errorStore[name] = ''
    }
  }
}
</script>

<style scoped>

</style>
