<template>
  <div>
    upload
    <Button @click="handleClick">download file</Button>
  </div>
</template>

<script>
import { downloadFiles } from '../lib/utils'

export default {
  name: 'Upload',
  methods: {
    handleClick () {
      downloadFiles({
        url: 'testInAdminSystem',
        params: {
          key: '001',
          type: 'download'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
