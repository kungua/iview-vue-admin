<template>
  <div class="folder-wrapper">
    <folder-tree
      :folder-list.sync="folderList"
      :file-list.sync="fileList"
      :folder-drop="folderDrop"
      :file-drop="fileDrop"
      :before-delete="beforeDelete"
    />
  </div>
</template>

<script>
import { getFileList, getFolderList } from '../../api/data'
import FolderTree from '../../components/folder-tree'

export default {
  name: 'FolderTreePage',
  components: {
    FolderTree
  },
  data () {
    return {
      folderList: [],
      fileList: [],
      folderDrop: [
        {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除文件夹'
        },
      ],
      fileDrop: [
        {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除文件'
        },
      ]
    }
  },
  methods: {
    beforeDelete () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let error = null
          error = new Error()
          if (!error) {
            resolve()
          } else {
            reject(error)
          }
        }, 2000)
      })
    }
  },
  mounted () {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.folderList = res[0].data
      this.fileList = res[1].data
    })
  }
}
</script>

<style lang="less"></style>
