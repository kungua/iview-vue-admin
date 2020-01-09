<template>
  <div>
    Table Page
    <edit-table  v-model="tableData" :columns="columns" @on-edit="handleEdit"></edit-table>
  </div>
</template>

<script>
import { getTableData } from '../api/data'
import EditTable from '../components/edit-table'

export default {
  name: 'Table',
  components: { EditTable },
  data () {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true },
      ]
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res
    })
  },
  methods: {
    handleEdit ({ row, index, column, newValue }) {
      console.log({ row, index, column, newValue })
    }
  }
}
</script>

<style scoped>

</style>
