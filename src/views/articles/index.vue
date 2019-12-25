<template>
  <el-card class="cs">
    <mbx slot="header">
      <template slot="juti">文章管理</template>
    </mbx>
    <el-form class="biao" label-width="100px">
      <el-form-item label="文章状态:">
        <el-radio-group v-model="form.radio">
          <el-radio :label="-1">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
        <el-select v-model="form.value" placeholder="请选择">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择:">
        <el-date-picker
          v-model="form.data"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <el-row class="hang" type="flex" align="middle">共找到{{page.totle}}条符合条件的内容</el-row>
    <div class="aitem" v-for="item in list" :key="item.id.toString()">
      <div class="left">
        <img :src="item.cover.images.length?item.cover.images[0]:defimg" alt />
        <div class="neir">
          <span>{{item.title}}</span>

          <el-tag class="tag" :type="item.status|lei">{{item.status|stat}}</el-tag>
          <span>{{item.pubdate}}</span>
        </div>
      </div>
      <div class="right">
        <span>
          <i class="el-icon-edit"></i>修改
        </span>
        <span @click="del(item.id)">
          <i class="el-icon-delete"></i>删除
        </span>
      </div>
    </div>
    <el-row type="flex" justify="center" style="height:50px" align="middle">
      <el-pagination
        background
        @current-change="qieye"
        layout="prev, pager, next"
        :total="page.totle"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
import mianbx from '../../components/comment/mianbaox'
export default {
  data () {
    return {
      defimg: require('../../assets/img/404.png'),
      form: {
        radio: -1,
        value: '',
        data: ''
      },
      page: {
        totle: 0,
        currentPage: 1,
        pageSize: 10
      },

      channels: [],
      list: []
    }
  },
  filters: {
    stat (val) {
      switch (val) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '审核通过'
        case 3:
          return '审核失败'
      }
    },
    lei (val) {
      switch (val) {
        case 0:
          return 'success'
        case 1:
          return 'info'
        case 2:
          return 'warning'
        case 3:
          return 'danger'
      }
    }
  },
  components: {
    mbx: mianbx
  },
  watch: {
    form: {
      deep: true,
      handler (a) {
        this.page.currentPage = 1
        this.getwenzhang()
      }
    }
  },
  methods: {
    // 删除
    del (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          url: '/articles/' + id.toString(),
          method: 'delete'
        }).then(res => {
          this.getwenzhang()
        })
      })
    },
    // 切换页码
    qieye (newpage) {
      console.log(this.page.currentPage, newpage)

      this.page.currentPage = newpage
      this.getwenzhang()
    },
    // 获取分类
    getPindao () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
        // console.log(this.channels)
      })
    },
    // 获取文章
    getwenzhang () {
      this.$axios({
        url: '/articles',

        params: {
          status: this.form.radio === -1 ? null : this.form.radio,
          channel_id: this.form.value ? this.form.value : null,
          begin_pubdate: this.form.data ? this.form.data[0] : null,
          end_pubdate: this.form.data ? this.form.data[1] : null,
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(res => {
        console.log(res.data)
        this.list = res.data.results
        this.page.totle = res.data.total_count
      })
    }
  },
  created () {
    this.getPindao()
    this.getwenzhang()
  }
}
</script>

<style lang='less' scoped>
.biao {
  margin-bottom: 20px;
}
.hang {
  height: 50px;
  border-bottom: 1px dashed #999;
}
.aitem {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    justify-content: flex-start;
    img {
      width: 150px;
      height: 100px;
      display: block;
    }
    .neir {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .tag {
        width: 100px;
        text-align: center;
      }
    }
  }
  .right {
    span {
      margin-left: 6px;
      cursor: pointer;
    }
  }
}
</style>
