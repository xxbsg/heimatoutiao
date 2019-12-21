<template>
  <el-card>
    <mb-xie  slot="header">
      <template slot="juti">
        评论管理
      </template>

    </mb-xie>
    <comment-table></comment-table>
  </el-card>
</template>

<script>
import mbx from '../../components/comment/mianbaox'
import commentTable from '../../components/comment/commentlist'
export default {
  components: {
    'mb-xie': mbx,
    'comment-table': commentTable
  }

}
</script>

<style>

</style>
