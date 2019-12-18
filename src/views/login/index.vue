<template>
  <div class="zhu">
    <el-card class="box-card">
        <div class="top">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="moble">
          <el-input v-model="form.moble" placeholder='输入手机号码'></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="form.code" style="width:65%" placeholder='输入验证码'></el-input>
          <el-button plain style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop='check'>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="form.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
             <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: { moble: '', code: '', check: false },
      rules: {
        moble: [{ required: true, message: '请输入手机号码' }],
        code: [{ required: true, message: '请输入验证码' }],
        check: []
      }
    }
  }
}
</script>

<style lang='less' scoped>
.zhu {
  height: 100vh;
  background-image: url("../../assets/img/login2.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 576px;
  }
  .top{
      text-align: center

  }
  .top  img{
          height: 45px;
          vertical-align: baseline
      }
}
</style>
