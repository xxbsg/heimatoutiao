<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: [require('../../assets/img/login1.jpg'), require('../../assets/img/login2.jpg'), require('../../assets/img/login_bg.jpg')]
    }
  }
}
</script>

<style>
</style>
