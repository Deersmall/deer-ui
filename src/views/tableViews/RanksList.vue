<template>
  <div class="ranksList">

<!--    查询条件-->
    <div class="queryCfg">
      <div class="condition"><span>用户名称：</span><el-input v-model="where['name']"  size="small" placeholder="用户名称" /></div>
      <div class="condition">
        <span>服务器：</span>
        <el-select v-model="where['surfServer']" class="m-2" placeholder="Select">
          <el-option v-for="item in selecrSurf" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
      </div>
    </div>

<!--    功能按键-->
    <div class="functionBtn">
      <el-button color="#be86ff" :dark="isDark" plain @click="queryRank">查询</el-button>
<!--      <el-button color="#be86ff" :dark="isDark" plain>修改</el-button>-->
<!--      <el-button color="#be86ff" :dark="isDark" plain>删除</el-button>-->
    </div>


<!--    列表-->
    <div class="listTable">
      <el-table :data="ranks" style="width: 100%">
        <el-table-column prop="name" label="用户名" width="400" />
        <el-table-column prop="points" label="Pts" width="400" />
        <el-table-column prop="playtime" label="游玩时间" width="400" />
        <el-table-column prop="lastlogin" label="上一次在线"/>

      </el-table>
    </div>


<!--    分页-->
    <div class="page-list">
      <el-pagination
          v-model:current-page="page.current"
          :page-size="page.size"
          :total="page.total"
          :small="false"
          :disabled="false"
          :background="true"
          layout="total, prev, pager, next"
          @size-change="queryRank"
          @current-change="queryRank"/>
    </div>
  </div>
</template>

<script>
const Qs=require('qs');
import request from "@/utils/request";

export default {
  name: "RanksList",
  components: {},

  created() {

  },
  data(){
    return {
      where:{
        'name':'',
        'surfServer':'`surf-1`',
      },
      page:{
        current:1,
        size:10,
        total: 0,
      },
      selecrSurf: [
        {
          value: '`surf-1`',
          label: 'surf-1  64Tick',
        },
        {
          value: '`surf-2`',
          label: 'surf-2  102.4Tick',
        },
      ],

      tableData:[
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      ranks:[],

      isDark:false,

    }
  },
  methods:{
    queryRank(){

      let postData = {};

      postData.page = this.page
      postData.where = this.where

        request.post("/rank/queryRank",postData).then(ref => {
        debugger
        if (ref.code === 200){
          // this.$router.push("/main/home");// 重定向
          this.page.total = ref.data.total;
          this.ranks = ref.data.records;
        }
      }).catch((err)=>{
        console.log(err);
      });
    },
  },
}
</script>


<style lang="scss" scoped>

.ranksList{
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;

  .queryCfg{
    display: flex;
    width: 98%;
    margin: 8px 0;
    flex-wrap: wrap;
    flex-direction: row;

    .condition{
      display: flex;
      margin: 5px 3%;
      width: 25%;
      flex-direction: row;
      align-items: center;

      span{
        width: 111px;
      }

      /deep/
      .el-input__wrapper {
        width: 98%;
        height: 30px;
        border-radius: 25px;
        display: inline-flex;
        flex-grow: 0;
        align-items: center;
        justify-content: center;
        padding: 1px 25px;
      }


    }
  }

  .functionBtn{
    display: flex;
    width: 98%;
    margin: 2px 100px 2px 0;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .el-button+.el-button {
      margin-left: 25px;
    }
  }

  .listTable{
    flex: 6;
    height: 100%;
    width: 98%;
    margin: 5px 0;
  }

  .page-list{
    margin: 25px 0;
  }
}


</style>