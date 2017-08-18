<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="nav-left">
          <div class="nav-logo">
            <img src="../../assets/logo.png">
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div>
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item index="4">处理中心</el-menu-item>
            <el-menu-item index="5">处理中心</el-menu-item>
            <el-menu-item index="6">处理中心</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
      }
    }
  }
</script>
<style scoped>
  .nav-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .nav-logo img{
    width: 100%;
    height: 100%;
  }
  .nav-left{
    height: 60px;
  }

  .el-menu{
    background-color: white;
  }
</style>
