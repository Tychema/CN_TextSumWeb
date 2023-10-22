<template>
  <div>
    <el-card style="height: 800px">
      <el-col>
        <el-row style="margin-bottom: 20px">
          <el-row type="flex" justify="center">
            <el-col :span="12" style="margin-right: 20px">
              <el-input
                  v-model="searchKeyword"
                  placeholder="输入关键词"
                  clearable
                  style="width: 500px;"
                  @clear="clearSearch"
              >
                <el-button type="primary" slot="append" icon="el-icon-search" @click="performSearch" style="background-color: #0099FF; color: white;">
                  搜索
                </el-button>
              </el-input>
            </el-col>
            <el-col>
              <el-card style="height: 40px;width: 400px"></el-card>
            </el-col>
            <el-col style="height: 40px;width: 200px">
              <el-button style="margin: 0px" class="button" type="primary" icon="el-icon-star-off" circle></el-button>
            </el-col>
          </el-row>
        </el-row>
        <el-row>
          <el-col style="width: 32%;margin-right: 20px">
            <el-card style="height: 700px">
              <div>
                <el-table
                    :data="showData1"
                    style="width: 100%"
                    @row-click="handleRowClick"
                >
                  <el-table-column prop="title" label="Positive News"></el-table-column>
                  <el-table-column prop="datetime" label="Date" :width="100"></el-table-column>
                </el-table>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage1"
                    :page-size="pageSize"
                    :total="totalNews1"
                ></el-pagination>
              </div>

            </el-card>
          </el-col>
          <el-col style="width: 32%;margin-right: 20px">
            <el-card style="height: 700px">
              <div>
                <el-table
                    :data="showData1"
                    style="width: 100%"
                    @row-click="handleRowClick"
                >
                  <el-table-column prop="title" label="Positive News"></el-table-column>
                  <el-table-column prop="datetime" label="Date" :width="100"></el-table-column>
                </el-table>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage1"
                    :page-size="pageSize"
                    :total="totalNews1"
                ></el-pagination>
              </div>
            </el-card>
          </el-col>
          <el-col style="width: 33%">
            <el-card style="height: 700px">
              <div>
                <el-table
                    :data="showData1"
                    style="width: 100%"
                    @row-click="handleRowClick"
                >
                  <el-table-column prop="title" label="Positive News"></el-table-column>
                  <el-table-column prop="datetime" label="Date" :width="100"></el-table-column>
                </el-table>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage1"
                    :page-size="pageSize"
                    :total="totalNews1"
                ></el-pagination>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-card>
  </div>
</template>

<script>
// import ProIntroduction from "./ProIntroduction.vue"
// import ProTable from "./ProTable.vue"
//import axios from 'axios'; // 导入 Axios

export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"EconomyNews",
  components:{},
  data() {
    return {
      content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      str: '',
      editorOption: {},
      value: 1,
      input: " ",
      sum_result: '', // 用于存储请求返回的结果
      searchKeyword: '', // 用于存储搜索关键词

    }
  },
  methods: {
    performSearch() {
      // 在这里执行搜索操作，使用 this.searchKeyword 获取关键词
      console.log('搜索关键词:', this.searchKeyword);
      // 你可以在这里发送搜索请求或执行其他搜索操作
    },
    clearSearch() {
      // 当清除搜索关键词时执行的操作
      this.searchKeyword = ''; // 清空关键词
    },
  },
}

</script>

<style>

.button{
  margin-left: 800px;
  ;
}
.rounded-input {
  width: 95%;
  border-radius: 100px; /* 添加圆角样式 */
}
.el-textarea__inner {
  height: 500px;
}
.custom-button {
  width: 200px; /* 调整按钮的宽度 */
  background-color: #409EFF; /* 设置按钮的背景颜色为蓝色 */
  color: #fff; /* 设置按钮的文本颜色为白色 */
  font-size: 18px; /* 设置按钮的字体大小 */
  border-radius: 8px; /* 设置按钮的圆角 */
  padding: 10px 20px; /* 调整按钮的内边距 */
}
.custom-divider {
  margin-top: 0px;
  margin-bottom: 10px;
}
</style>

