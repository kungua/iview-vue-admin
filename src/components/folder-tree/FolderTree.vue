<template>
  <Tree :data="folderTree" :render="renderFunc"/>
</template>

<script type="text/jsx">
import { putFileInFolder, transferFolderToTree } from '../../lib/utils'

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
    folderDrop: { type: Array },
    fileDrop: { type: Array },
  },
  data () {
    return {
      folderTree: [],
      currentRenamingId: '',
      renderFunc: (h, { root, node, data }) => {
        const dropList = data.type === 'folder' ? this.folderDrop : this.fileDrop
        const dropdownRender = dropList.map(item => {
          return (
            <dropdownItem name={item.name}>{item.title}</dropdownItem>
          )
        })
        return (
          <div class="tree-item">
            {data.type === 'folder'
              ? <icon type="ios-folder" color="#2d8cf8" style="margin-right: 10px;"/> : ''}
            { this.currentRenamingId === `${data.type || 'file'}_${data.id}`}
            {dropList
              ? (<dropdown placement="right-start" on-on-click={this.handleDropdownClick.bind(this, data)}>
                <i-button size="small" type="text">
                  <icon type="md-more" size="12"/>
                </i-button>

                <dropdownMenu slot="list">
                  {dropdownRender}
                </dropdownMenu>
              </dropdown>)
              : ''}
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
    handleDropdownClick (data, name) {
      console.log(name)
      if (name === 'rename') {
        this.currentRenamingId = `${data.type || 'file'}_${data.id}`
      }
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
  }
}
</style>
