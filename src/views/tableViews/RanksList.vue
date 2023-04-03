<template>
  <div style="border: 1px solid #333">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>

    <div class="page-list">
      <el-pagination
          v-model:current-page="currentPage3"
          :page-size="100"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, prev, pager, next"
          :total="pageSize3"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RanksList",
  components: {},

  created() {

  },
  data(){
    return {
      tableData:[
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      currentPage3: 1,
      pageSize3: 821,
      small: false,
      background: true,
      disabled: false,

    }
  },
  methods:{
    handleSizeChange(){
      console.log(this.currentPage3)
    },
    handleCurrentChange(){
      console.log(this.currentPage3)
    }
  },
}
</script>