<template>
  <el-card :body-style="{ padding: '0 20px 0' }">
    <mb-xie slot="header">
      <template slot="juti">素材管理</template>
    </mb-xie>
    <el-row type='flex' justify='end' style="height:50px" align='middle'>
      <el-upload
        class="upload-demo"
        :show-file-list='false'
        action=""
        :before-upload="shangchuan"
      >
        <el-button size="small" type="primary">点击上传</el-button>

      </el-upload>
    </el-row>
    <el-tabs type="border-card" v-model="activeName" @tab-click="chengetab">
      <el-tab-pane label="所有图片" name="all">
        <el-row type="flex" style="flex-wrap: wrap">
          <el-card
            class="imgit"
            shadow="hover"
            :body-style="{ padding: '0px' }"
            v-for="item in list"
            :key="item.id"
          >
            <img :src="item.url" alt />
            <el-row class="xuanx" type="flex" justify="space-around">
              <i
                :class="item.is_collected ? 'el-icon-star-on':'el-icon-star-off'"
                @click="changsc(item)"
              ></i>

              <i class="el-icon-delete" @click="del(item)"></i>
            </el-row>
          </el-card>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="shouc">
        <el-row type="flex" style="flex-wrap: wrap">
          <el-card
            class="imgit"
            shadow="hover"
            :body-style="{ padding: '0px' }"
            v-for="item in list"
            :key="item.id"
          >
            <img :src="item.url" alt />
            <!-- <el-row class="xuanx" type='flex' justify='space-around'>

                  <i :class="item.is_collected ? 'el-icon-star-on':'el-icon-star-off'"></i>

                  <i class="el-icon-delete"></i>
            </el-row>-->
          </el-card>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-row type="flex" justify="center" align="middle" style="height:45px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="currc"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
import mbx from '../../components/comment/mianbaox'
export default {
  data () {
    return {
      list: [],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      activeName: 'all'
    }
  },
  components: {
    'mb-xie': mbx
  },
  methods: {
    shangchuan (file) {
      console.log(file)
      let fd = new FormData()
      fd.append('image', file)
      this.$axios({
        url: '/user/images',
        headers: { 'Content-Type': 'multipart/form-data' },
        method: 'post',
        data: fd
        // data: { 'image': file }
      }).then(res => {
        console.log('aaaa', res)
        this.getimg()
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
      })
    },
    del (item) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          url: '/user/images/' + item.id,
          method: 'delete'
          // data: { collect: !item.is_collected }
        }).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getimg()
        })
      })
    },
    changsc (item) {
      this.$axios({
        url: '/user/images/' + item.id,
        method: 'put',
        data: { collect: !item.is_collected }
      }).then(res => {
        this.getimg()
      })
    },
    chengetab (tab, event) {
      console.log(tab.name)
      this.currentPage = 1
      this.getimg()
    },
    currc (newval) {
      this.currentPage = newval
      this.getimg()
    },
    getimg () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'shouc',
          page: this.currentPage,
          per_page: this.pageSize
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.results
        this.total = res.data.total_count
        // console.log(this.total, res.data.total_count)
      })
    }
  },
  created () {
    this.getimg()
  }
}
</script>

<style lang='less' scoped>
.imgit {
  position: relative;
  width: 200px;
  height: 240px;
  margin: 10px 35px;
  img {
    width: 100%;
  }
  .xuanx {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: gray;
    i {
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
