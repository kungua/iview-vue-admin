<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script type="text/jsx">
import clonedeep from 'clonedeep'

export default {
  name: 'EditTable',
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
      editingId: '',
      editingContent: ''
    }
  },
  watch: {
    columns () {
      this.handleColumns()
    }
  },
  mounted () {
    this.handleColumns()
  },
  methods: {
    handleInput (newVal) {
      this.editingContent = newVal
    },
    handleColumns () {
      this.insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const isEditing = this.editingId === `${column.key}_${index}`
            return (
              <div>
                {
                  isEditing ? <i-input value={row[column.key]} on-input={this.handleInput} style="width: 50px;"/>
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
      if (this.editingId === `${column.key}_${index}`) {
        let tableData = clonedeep(this.value)
        tableData[index][column.key] = this.editingContent
        this.$emit('input', tableData)
        this.$emit('on-edit', { row, index, column, newValue: this.editingContent })
        this.editingId = ''
        this.editingContent = ''
      } else {
        this.editingId = `${column.key}_${index}`
        this.editingContent = row[column.key]
      }
    }
  }
}
</script>

<style scoped>

</style>
