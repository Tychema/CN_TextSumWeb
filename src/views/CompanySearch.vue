<template>
  <div>
    <el-card style="height: 800px">
      <el-col>
        <el-row style="margin-bottom: 20px">
          <el-row type="flex" justify="center">
            <el-col :span="12" style="margin-right: 20px">
              <el-input
                  v-model="input"
                  placeholder="输入关键词"
                  style="width: 500px;"
                  id="searchCompany"
              >
                <el-button type="primary" slot="append" icon="el-icon-search" @click="performSearch" style="background-color: #0099FF; color: white;">
                  搜索
                </el-button>
              </el-input>
            </el-col>
            <el-col>
              <el-card style="height: 40px;width: 400px" v-show="companySearchState"></el-card>
            </el-col>
            <el-col style="height: 40px;width: 200px">
              <el-button style="margin: 0px" class="button"
                         @click="handleCollection"
                         icon="this.iconState" circle v-show="companySearchState" ref="collectionButton">

              </el-button>

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
                    :data="showData2"
                    style="width: 100%"
                    @row-click="handleRowClick"
                >
                  <el-table-column prop="title" label="Normal News"></el-table-column>
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
                    :data="showData3"
                    style="width: 100%"
                    @row-click="handleRowClick"
                >
                  <el-table-column prop="title" label="Negetive News"></el-table-column>
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
import axios from "axios";

export default {
  name: "CompanySearch",
  components: {},
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
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      pageSize: 7, // 每页显示的新闻数量
      totalNews1: 50,
      totalNews2: 50,
      totalNews3: 50,
      showData1: [],
      showData2: [],
      showData3: [],
      collectionState: 0,
      companySearchState:0,
      iconOnState: "el-icon-star-on",
      iconOffState: "el-icon-star-off",
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    async loadData() {
      // 使用 async/await 确保 fetchData 请求完成后再执行 getPageInfo
      await this.fetchData();
      await sleep(400);
      this.getPageInfo();
    },
    async performSearch() {
      //清空数据
      this.tableData1=[]
      this.tableData2=[]
      this.tableData3=[]
      //显示
      var company =  document.getElementById('searchCompany').value;
      company = company.replace(/\s/g, "");
      const url0 = `http://localhost:8000/news/getCompanyList?sentiment=2&company=${company}`;
      const url1 = `http://localhost:8000/news/getCompanyList?sentiment=1&company=${company}`;
      const url2 = `http://localhost:8000/news/getCompanyList?sentiment=0&company=${company}`;
      var stateNum=0;
      console.log(url1)
      //const stateNum = ref(0);
      axios.post(url0)
          .then(response => {
            // 从响应中提取标题数据
            var data=response.data;
            if (data["state"] === "200") {
              // 如果状态码为 200，表示成功获取数据
              var tableData1 = response.data["collect_record"].map(item => ({title: item.summary, company: item.company, datetime: item.datetime, url: item.url}));
              this.tableData1 = tableData1
              this.totalNews1 = this.tableData1.length;
            } else if (data["state"] === "404") {// 如果状态码为 404，表示没有该公司，显示消息提示
              stateNum=stateNum+1;this.totalNews1 = 0;
            }
            else{stateNum=stateNum+1;}
          }).catch(error => {console.error('请求出错:', error);});
      axios.post(url1)
          .then(response => {
            // 从响应中提取标题数据
            var data=response.data;
            console.log("response.data");
            console.log(response.data);
            if (data["state"] === "200") {
              // 如果状态码为 200，表示成功获取数据
              var tableData2 = response.data["collect_record"].map(item => ({title: item.summary, company: item.company, datetime: item.datetime, url: item.url}));
              this.tableData2 = tableData2
              this.totalNews2 = this.tableData2.length;
            } else if (data["state"] === "404") {// 如果状态码为 404，表示没有该公司，显示消息提示
              stateNum=stateNum+1;
              this.totalNews2 = 0;
            }
            else{stateNum=stateNum+1;}
          }).catch(error => {console.error('请求出错:', error);});
      axios.post(url2)
          .then(response => {
            // 从响应中提取标题数据
            var data=response.data;
            //console.log(data["collect_record"]);
            if (data["state"] === "200") {
              // 如果状态码为 200，表示成功获取数据
              var tableData3 = response.data["collect_record"].map(item => ({title: item.summary, company: item.company, datetime: item.datetime, url: item.url}));
              this.tableData3 = tableData3
              this.totalNews3 = this.tableData3.length;
            } else if (data["state"] === "404") {// 如果状态码为 404，表示没有该公司，显示消息提示
              stateNum=stateNum+1;this.totalNews3 = 0;
            }
            else{stateNum=stateNum+1;}
          }).catch(error => {console.error('请求出错:', error);});
      await sleep(400);
      console.log(stateNum)
      if(stateNum===3){
        this.$message.error("该公司不存在");
        this.companySearchState=0;
      }else{
        this.$message({message: '查询成功', type: 'success'});
        // console.log(this.tableData1)
        // console.log(this.tableData2)
        // console.log(this.tableData3)
        this.getPageInfo();
        this.companySearchState=1;
      }
      //搜藏查询
      this.searchCollection(company)
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
    handleSizeChange(size) {
      this.pageSize = size;
      //修改当前每页的数据行数//数据重新分配
      this.getPageInfo()
    },

    handleRowClick(row) {
      // 处理点击标题跳转到 URL
      window.open(row.url, this.showData1.url);
    },
    searchCollection(company){
      var userid=1;
      const url0 = `http://localhost:8000/attentioncompany/whetherattention?userid=${userid}&company=${company}`;
      axios.post(url0)
          .then(response => {
            // 从响应中提取标题数据
            var data=response.data;
            if (data["state"] === "201") {
              this.collectionState=1;
              this.$refs.collectionButton.icon=this.iconOnState;
            }else{
              this.collectionState=0;
              this.$refs.collectionButton.icon=this.iconOffState;
            }
          }).catch(error => {console.error('请求出错:', error);});

    },
    handleCollection(){
      var company =  document.getElementById('searchCompany').value;
      var userid=1;
      company = company.replace(/\s/g, "");
      if(this.collectionState ===0){
        const url0 = `http://localhost:8000/attentioncompany/attentioncompanylist?userid=${userid}&company=${company}`;
        axios.post(url0)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              if (data["state"] === "200") {
                // 如果状态码为 200，表示成功获取数据
                this.$message({message: '搜藏成功', type: 'success'});
                this.collectionState=1;
                this.$refs.collectionButton.icon=this.iconOnState;
              }
              else{
                this.$message.error("收藏失败");
              }
            }).catch(error => {console.error('请求出错:', error);});
      }else{
        const url0 = `http://localhost:8000/attentioncompany/deletecompany?userid=${userid}&company=${company}`;
        axios.post(url0)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              if (data["state"] === "200") {
                // 如果状态码为 200，表示成功获取数据
                this.$message({message: '取消收藏成功', type: 'success'});
                this.collectionState=0;
                this.$refs.collectionButton.icon=this.iconOffState;
              }
              else{
                this.$message.error("取消收藏失败");
              }
            }).catch(error => {console.error('请求出错:', error);});
      }
      this.changeCollectionState();
    },
    changeCollectionState(){
      if(this.collectionState===1){
        this.collectionState=0;
        this.$refs.collectionButton.icon=this.iconOffState;
      }else{
        this.collectionState=1;
        this.$refs.collectionButton.icon=this.iconOnState;
      }
    },
    // 获取当前页的数据信息
    getPageInfo() {
      //清空pageTicket中的数据
      //const showDataKey = `showData${tablename}`;
      //const tableDataKey = `tableData${tablename}`;
      this.showData1 = [];
      this.showData2 = [];
      this.showData3 = [];
      // 获取当前页的数据
      // console.log("this.showData1")
      // console.log(this.tableData1)
      for (let i = (this.currentPage1 - 1) * this.pageSize; i < this.totalNews1; i++) {
        //把遍历的数据添加到showData1里面
        this.showData1.push(this.tableData1[i]);
        // console.log(this.showData1)
        //判断是否达到一页的要求
        if (this.showData1.length === this.pageSize) break;
      }
      for (let i = (this.currentPage2 - 1) * this.pageSize; i < this.totalNews2; i++) {
        //把遍历的数据添加到showData1里面
        this.showData2.push(this.tableData2[i]);
        console.log(this.showData2)
        //判断是否达到一页的要求
        if (this.showData2.length === this.pageSize) break;
      }
      for (let i = (this.currentPage3 - 1) * this.pageSize; i < this.totalNews3; i++) {
        //把遍历的数据添加到showData1里面
        this.showData3.push(this.tableData3[i]);
        //console.log(this.showData3)
        //判断是否达到一页的要求
        if (this.showData3.length === this.pageSize) break;
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

