<template>
  <Tree :data="folderTree" :render="renderFunc" />
</template>

<script type="text/jsx">
import { putFileInFolder, transferFolderToTree, expandSpecifiedFolder } from '../../lib/utils'
import clonedeep from 'clonedeep'

export default {
  name: 'FolderTree',
  props: {
    folderList: {
      type: Array,
      default: () => []
    },
    fileList: {
      type: Array,
      default: () => []
    },
    folderDrop: Array,
    fileDrop: Array,
    beforeDelete: Function
  },
  data () {
    return {
      folderTree: [],
      currentRenamingId: '',
      currentRenamingContent: '',
      renderFunc: (h, { root, node, data }) => {
        const dropList = data.type === 'folder' ? this.folderDrop : this.fileDrop
        const isRenaming = this.currentRenamingId === `${data.type || 'file'}_${data.id}`
        const dropdownRender = dropList.map(item => {
          return (
            <dropdownItem name={item.name}>{item.title}</dropdownItem>
          )
        })
        return (
          <div class="tree-item">
            {data.type === 'folder'
              ? <icon type="ios-folder" color="#2d8cf8" style="margin-right: 10px;" /> : ''}
            {
              isRenaming ? (<span>
                <i-input type="text" value={data.title} on-input={this.handleInput} class="tree-rename-input" />
                <i-button on-click={this.saveRename.bind(this, data)} size="small" type="text"><icon
                  type="md-checkmark" /></i-button>
                <i-button size="small" type="text"><icon type="md-close" /></i-button>
              </span>)
                : <span>{data.title}</span>
            }
            {
              dropList && !isRenaming ? (
                <dropdown placement="right-start" on-on-click={this.handleDropdownClick.bind(this, data)}>
                  <i-button size="small" type="text">
                    <icon type="md-more" size="12" />
                  </i-button>

                  <dropdownMenu slot="list">
                    {dropdownRender}
                  </dropdownMenu>
                </dropdown>)
                : ''
            }
          </div>
        )
        //   return h(
        //     'div',
        //     {
        //       class: 'tree-item'
        //     },
        //     [
        //       data.type === 'folder'
        //         ? h('icon', {
        //           props: {
        //             type: 'ios-folder',
        //             color: '#2d8cf0'
        //           },
        //           style: {
        //             marginRight: '10px'
        //           }
        //         })
        //         : h(''),
        //       h('span', data.title),
        //       h('Dropdown', {}, [
        //         h(
        //           'Button',
        //           {
        //             class: 'tree-item-button',
        //             props: {
        //               size: 'small',
        //               type: 'text'
        //             }
        //           },
        //           [
        //             h('icon', {
        //               props: {
        //                 type: 'md-more',
        //                 size: 12
        //               }
        //             })
        //           ]
        //         ),
        //         h(
        //           'DropdownMenu',
        //           {
        //             slot: 'list'
        //           },
        //           [h('DropdownItem', 111), h('DropdownItem', 222)]
        //         )
        //       ])
        //     ]
        //   )
      }
    }
  },
  watch: {
    folderList () {
      this.transData()
    },
    fileList () {
      this.transData()
    }
  },
  mounted () {
    this.transData()
  },
  methods: {
    isFolder (type) {
      return type === 'folder'
    },
    handleDelete (data) {
      const isFolder = this.isFolder(data.type)
      let updateListName = isFolder ? 'folder-list' : 'file-list'
      let list = isFolder ? clonedeep(this.folderList) : clonedeep(this.fileList)
      list = list.filter(item => item.id !== data.id)
      this.$emit(`update:${updateListName}`, list)
      this.$nextTick(() => {
        expandSpecifiedFolder(this.folderTree, data.folder_id)
      })
    },
    handleDropdownClick (data, name) {
      if (name === 'rename') {
        this.currentRenamingId = `${data.type || 'file'}_${data.id}`
      } else if (name === 'delete') {
        this.$Modal.confirm({
          title: '提示',
          content: `您确定要删除${this.isFolder(data.type) ? '文件夹' : '文件'}《${data.title}》`,
          onOk: () => {
            this.beforeDelete ? this.beforeDelete()
              .then(() => {
                this.handleDelete(data)
              }).catch(() => {
                this.$Message.error('删除失败')
              }) : this.handleDelete(data)
          }
        })
        // this.currentRenamingId = `${data.type || 'file'}_${data.id}`
      }
    },
    updateList (list, id) {
      let i = -1
      let len = list.length
      while (++i < len) {
        let item = list[i]
        if (item.id === id) {
          item.name = this.currentRenamingContent
          list.splice(i, 1, item)
          break
        }
      }
      return list
    },
    saveRename (data) {
      const { id, type } = data
      if (type === 'folder') {
        const list = this.updateList(clonedeep(this.folderList), id)
        this.$emit('update:folder-list', list)
      } else {
        const list = this.updateList(clonedeep(this.fileList), id)
        this.$emit('update:file-list', list)
      }
      this.currentRenamingId = ''
    },
    handleInput (val) {
      this.currentRenamingContent = val
    },
    transData () {
      const { folderList, fileList } = this
      this.folderTree = transferFolderToTree(
        putFileInFolder(folderList, fileList)
      )
    }
  }
}
</script>

<style lang="less">
.folder-wrapper {
  width: 300px;

  .tree-item {
    display: inline-block;
    width: ~"calc(100% - 50px)";
    height: 30px;
    line-height: 30px;

    & > .ivu-dropdown {
      float: right;
    }

    .tree-rename-input {
      width: ~"calc(100% - 80px)";
    }
  }
}
</style>
