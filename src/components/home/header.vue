<template>
  <el-row type="flex" align="middle" class="hed">
    <el-col :span="12" class="left">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="12">
      <el-row type="flex" justify="end" class="you" align="middle">
        <img :src="imgurl?imgurl:mrimg" alt />
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link" >
              {{name}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="selfinfo">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      name: '用户名',
      mrimg: require('../../assets/img/404.png'),
      imgurl: ''
    }
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'selfinfo':
          console.log('11111111')
          break
        case 'git':
          location.href = 'https://github.com/xxbsg/heimatoutiao'
          break
        case 'logout':
          localStorage.removeItem('user-token')
          this.$router.replace('/')
          break
      }
    }
  },
  created () {
    this.$axios({
      url: '/user/profile',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('user-token') }
    }).then(res => {
    //   console.log(res.data)
      this.name = res.data.name
      this.imgurl = res.data.photo
    }).catch(() => {
      console.log('错误')
    })
  }
}
</script>

<style lang='less' scoped>
.hed {
  height: 60px;
  .left {
    font-size: 20px;
    span{
        margin-left: 6px
    }
  }
  .you {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    span {
      margin-left: 5px;
    }
  }
}
</style>
