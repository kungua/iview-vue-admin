<template>
  <div>
    大文件上传
    <p></p>
    <input type="file" @change="handleFileChange"/>
    <i-button @click="handleUpload">上传</i-button>
  </div>
</template>

<script>
import request from '../lib/request'

const LEN = 30 // 切片数量

export default {
  name: 'UploadBigFile',
  data () {
    return {
      container: {
        file: null,
        data: []
      }
    }
  },
  methods: {
    // 生成文件切片
    createFileChunk (file, length = LEN) {
      const fileChunkList = []
      const chunkSize = Math.ceil(file.size / length)
      let cur = 0
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + chunkSize) })
        cur += chunkSize
      }
      return fileChunkList
    },
    async uploadChunks () {
      const { container: { file, data } } = this
      const requestList = data
        .map(({ chunk, hash }) => {
          const formData = new FormData()
          formData.append('chunk', chunk)
          formData.append('hash', hash)
          formData.append('filename', file.filename)
          return { formData }
        })
        .map(async (item) => {
          request({
            url: '3000',
            data: item.formData
          })
        })
      await Promise.all(requestList)
      console.log(requestList)
    },
    handleFileChange (ev) {
      const [file] = ev.target.files
      if (!file) return
      this.container.file = file
      console.log(ev)
      console.log(this.$data)
      console.log(this.$options.data())
    },
    async handleUpload () {
      // 用户点击上传按钮
      const { container: { file } } = this
      if (!file) return

      const fileChunkList = this.createFileChunk(file)
      console.log(fileChunkList)

      this.container.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: `${this.container.file.name}-${index}`
      }))
      await this.uploadChunks()
    }
  }
}
</script>

<style scoped>

</style>
