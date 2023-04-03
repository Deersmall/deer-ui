<template>
  <div>
    <img class="logo-img" alt="Vue logo" src="../assets/logo.png">
    <el-button type="primary" @click="ds">ds请求</el-button>
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: 'HomeView',
  components: {},

  data(){
    return {

      data:{

      }
    }
  },

  methods: {
    ds(){
      request.post("/dtest/ds",null).then(res => {
        console.log("ok")
      })

    }
  }
}
</script>

<style scoped>
.logo-img{
    width: 200px;
    height: 200px;
  }
</style>
