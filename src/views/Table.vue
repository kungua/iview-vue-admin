<template>
  <div>
    Table Page
    <edit-table-mul v-model="tableData" :columns="columns"/>
    <div style="height: 20px;"></div>
    <Button @click="turnTo">打开参数页面</Button>
    <!--    <edit-table v-model="tableData" :columns="columns" @on-edit="handleEdit"></edit-table>-->
  </div>
</template>

<script>
import { getTableData } from '../api/data'
// import EditTable from '../components/edit-table'
import EditTableMul from '../components/edit-table-mul'

export default {
  name: 'Table',
  components: {
    EditTableMul,
    // EditTable
  },
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
    },
    turnTo () {
      let id = 'params' + (Math.random() * 1000).toFixed()
      this.$router.push({
        name: 'params',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
