<template>
  <el-card>
    <mbx slot="header">
      <template slot="juti">发布文章</template>
    </mbx>
    <el-form label-width="100px" v-model="form">
      <el-form-item label="标题:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="内容:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="封面:">
        <el-radio-group v-model="form.radio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
        <el-select v-model="form.value" placeholder="请选择">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">发表</el-button>
        <el-button plain>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import mbx from '../../components/comment/mianbaox'
export default {
  data () {
    return {
      form: {
        value: '',
        radio: 3
      },
      channels: []
    }
  },
  methods: {
    // 获取分类
    getPindao () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
        // console.log(this.channels)
      })
    }
  },
  created () {
    this.getPindao()
  },
  components: {
    mbx
  }
}
</script>

<style>
</style>
