<template>
  <el-container>
    <el-aside width="200px">
        <aaa></aaa>
    </el-aside>
    <el-container>
      <el-header>
          <hheader></hheader>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import aaa from '../../components/home/aside'
import hheader from '../../components/home/header'
export default {
  components: { aaa, hheader }
}
</script>

<style lang='less' scoped>
  .el-aside {

    background-color: #353b4e;
    height: 100vh;
  }
</style>
