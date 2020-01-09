<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script type="text/jsx">
import clonedeep from 'clonedeep'

export default {
  name: 'EditTableMul',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      insideColumns: [],
      insideData: [],
      editingContent: ''
    }
  },
  watch: {
    columns () {
      this.handleColumns()
    },
    value () {
      this.handleColumns()
    }
  },
  mounted () {
    this.handleColumns()
  },
  methods: {
    handleInput ({ row, index, column }, newVal) {
      this.insideData[index][column.key] = newVal
    },
    handleColumns () {
      this.insideData = clonedeep(this.value)
      this.insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const keyArr = this.insideData[index] ? this.insideData[index].editingKeyArr : []
            const isEditing = keyArr && keyArr.indexOf(column.key) > -1
            console.log('keyArr')
            console.log(keyArr)
            return (
              <div>
                {
                  isEditing ? <i-input value={row[column.key]} on-input={this.handleInput.bind(this, { row, index, column })} style="width: 50px;"/>
                    : <span>{row[column.key]}</span>
                }
                <i-button on-click={this.handleClick.bind(this, { row, index, column })}>
                  {isEditing ? '保存' : '编辑'}
                </i-button>
              </div>
            )
          }
        }
        return item
      })
    },
    handleClick ({ row, index, column }) {
      let keyIndex = this.insideData[index].editingKeyArr ? this.insideData[index].editingKeyArr.indexOf(column.key) : -1
      let rowObj = this.insideData[index]
      if (keyIndex > -1) {
        rowObj.editingKeyArr.splice(keyIndex, 1)
        this.insideData.splice(index, 1, rowObj)
        this.$emit('input', this.insideData)
        this.$emit('on-edit', { row, index, column, newValue: this.insideData[index][column.key] })
      } else {
        rowObj.editingKeyArr = (rowObj.editingKeyArr)
          ? [...rowObj.editingKeyArr, column.key]
          : [column.key]
        this.insideData.splice(index, 1, rowObj)
      }
    }
  }
}
</script>

<style scoped>

</style>
