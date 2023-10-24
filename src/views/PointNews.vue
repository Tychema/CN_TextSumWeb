<template>
  <div>
    <el-card style="height: 660px">
      <el-row>
        <el-col style="width: 32%;margin-right: 20px">
          <el-card style="height: 620px">
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
          <el-card style="height: 620px">
            <div>
              <el-table
                  :data="showData2"
                  style="width: 100%"
                  @row-click="handleRowClick"
              >s
                <el-table-column prop="title" label="Normal News"></el-table-column>
                <el-table-column prop="datetime" label="Date" :width="100"></el-table-column>
              </el-table>
              <el-pagination
                  background
                  layout="prev, pager, next"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange2"
                  :current-page="currentPage2"
                  :page-size="pageSize"
                  :total="totalNews2"
              ></el-pagination>
            </div>
          </el-card>
        </el-col>
        <el-col style="width: 33%">
          <el-card style="height: 620px">
            <div>
              <el-table
                  :data="showData3"
                  style="width: 100%"
                  @row-click="handleRowClick"
              >s
                <el-table-column prop="title" label="Negetive News"></el-table-column>
                <el-table-column prop="datetime" label="Date" :width="100"></el-table-column>
              </el-table>
              <el-pagination
                  background
                  layout="prev, pager, next"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange3"
                  :current-page="currentPage3"
                  :page-size="pageSize"
                  :total="totalNews3"
              ></el-pagination>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
// import ProIntroduction from "./ProIntroduction.vue"
// import ProTable from "./ProTable.vue"
//import {getDataList} from "@/api/dataSet"; // 导入 Axios

import axios from "axios";

export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"AllNews",
  components:{},
  data() {
    return {
      str: '',
      editorOption: {},
      value: 1,
      input: " ",
      sum_result: '', // 用于存储请求返回的结果
      tableData1: [], // 用于存储表格1积极数据
      tableData2: [], // 用于存储表格2一般数据
      tableData3: [], // 用于存储表格3消极数据
      currentPage1:1,
      currentPage2:1,
      currentPage3:1,
      pageSize: 7, // 每页显示的新闻数量
      totalNews1: 50,
      totalNews2: 50,
      totalNews3: 50,
      showData1:[],
      showData2:[],
      showData3:[],

    }
  },
  computed: {
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      // 使用 async/await 确保 fetchData 请求完成后再执行 getPageInfo
      await this.fetchData();
      await sleep(400);
      this.getPageInfo();
    },
    async fetchData() {
      var userid=1;
      const url0 = `http://localhost:8000/attentioncompany/getattentionlist?userid=${userid}`;
      axios.post(url0)
          .then(response => {
            // 从响应中提取标题数据
            var data=response.data
            if (data["state"] === "200") {
              console.log(data)
              // 如果状态码为 200，表示成功获取数据
              var tableData1 = data["sentiment2_news"].map(item => ({title: item.summary, company: item.company, datetime: item.datetime, url: item.url}));
              var tableData2 = data["sentiment1_news"].map(item => ({title: item.summary, company: item.company, datetime: item.datetime, url: item.url}));
              var tableData3 = data["sentiment0_news"].map(item => ({title: item.summary, company: item.company, datetime: item.datetime, url: item.url}));
              console.log(tableData2.length)
              if(tableData1.length==0 && tableData2.length==0 && tableData3.length==0){
                this.$message.error("您没有关注任何公司");
              }else {
                this.tableData1 = tableData1
                this.totalNews1 = this.tableData1.length;
                this.tableData2 = tableData2
                this.totalNews2 = this.tableData2.length;
                this.tableData3 = tableData3
                this.totalNews3 = this.tableData3.length;
                this.getPageInfo();
              }
            }
            else{
              this.$message.error("查询失败");
            }
          })
          .catch(error => {
            console.error('请求出错:', error);
          });
      console.log(url0)

    },
    handleCurrentChange1(page) {
      this.currentPage1 = page;
      this.getPageInfo();
    }, //分页时修改每页的行数,这里会自动传入一个size
    handleCurrentChange2(page) {
      this.currentPage2 = page;
      this.getPageInfo();
    }, //分页时修改每页的行数,这里会自动传入一个size
    handleCurrentChange3(page) {
      this.currentPage3 = page;
      this.getPageInfo();
    }, //分页时修改每页的行数,这里会自动传入一个size
    handleSizeChange(size){
      this.pageSize = size;
      //修改当前每页的数据行数//数据重新分配
      this.getPageInfo()
    },

    handleRowClick(row) {
      // 处理点击标题跳转到 URL
      window.open(row.url, this.showData1.url);
    },
    formatTooltip(val) {
      return val / 100;
    },
    // 获取当前页的数据信息
    getPageInfo(){
      //清空pageTicket中的数据
      //const showDataKey = `showData${tablename}`;
      //const tableDataKey = `tableData${tablename}`;
      this.showData1=[];
      this.showData2=[];
      this.showData3=[];
      // 获取当前页的数据
      // console.log("this.showData1")
      // console.log(this.tableData1)
      for(let i=(this.currentPage1-1)*this.pageSize;i<this.totalNews1;i++){
        //把遍历的数据添加到showData1里面
        this.showData1.push(this.tableData1[i]);
        // console.log(this.showData1)
        //判断是否达到一页的要求
        if(this.showData1.length===this.pageSize) break;
      }
      for(let i=(this.currentPage2-1)*this.pageSize;i<this.totalNews2;i++){
        //把遍历的数据添加到showData1里面
        this.showData2.push(this.tableData2[i]);
        //console.log(this.showData2)
        //判断是否达到一页的要求
        if(this.showData2.length===this.pageSize) break;
      }
      for(let i=(this.currentPage3-1)*this.pageSize;i<this.totalNews3;i++){
        //把遍历的数据添加到showData1里面
        this.showData3.push(this.tableData3[i]);
        //console.log(this.showData3)
        //判断是否达到一页的要求
        if(this.showData3.length===this.pageSize) break;
      }

    }
  }
}
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
</script>

<style>
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
