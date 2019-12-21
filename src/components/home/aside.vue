<template>
  <div class="cebian" id='cebian'>
    <div class="top">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color='#409EFF' router >
      <el-menu-item index="/home">
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="neirong">
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">文章列表</el-menu-item>
        <el-menu-item index="/home/comment">评论管理</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>

      <el-submenu index="fensi">
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="1-3">图文数据</el-menu-item>
        <el-menu-item index="1-3">粉丝概况</el-menu-item>
        <el-menu-item index="1-3">粉丝画像</el-menu-item>
        <el-menu-item index="1-3">粉丝列表</el-menu-item>
      </el-submenu>

      <el-menu-item index="/home/account">
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' >
#cebian[class='cebian']{
    .top{
        padding: 10px 0;
        text-align: center;
        img{
            height: 35px;
        }
    }
    .el-menu{
        border-right:none
    }
}
</style>
