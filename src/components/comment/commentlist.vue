<template>
  <el-table :data="tdata">
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="comment_status" :formatter="gsxs" label="评论状态">
      <!-- <template slot-scope="scope">
        {{(!scope.row.comment_status)?"打开。。。":"关闭。。。"}}
      </template> -->
    </el-table-column>
    <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
    <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
    <el-table-column prop="date" label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">{{(!scope.row.comment_status)?"打开":"关闭"}}评论</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { MessageBox } from 'element-ui'
export default {
  data () {
    return {
      tdata: []
    }
  },
  methods: {
    handleDelete (index, row) {
      console.log(row.id)
      MessageBox.confirm('此操作将评论, 是否继续?', '提示').then(
        // this.$axios({
        //   url: '/articles',
        //   params: { response_type: 'comment' }
        // }).then(res => {
        //   console.log(res)
        //   this.tdata = res.data.results
        // })
        () => {
          this.$axios({
            url: '/comments/status',
            method: 'put',
            params: { article_id: row.id },
            data: { allow_comment: !row.comment_status }
          }).then(res => {
            this.getcomments()
          })
        }
      )
    },
    gsxs (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    getcomments () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        // console.log(res)
        this.tdata = res.data.results.concat(res.data.results)
      })
    }
  },
  created () {
    this.getcomments()
  }
}
</script>

<style>
</style>
