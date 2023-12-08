<template>
  <div class="background-container">
    <el-card style="height:100%;width: 60%;margin-left: 19%" :body-style="{height: '711px'}">
      <template>
        <el-tabs v-model="activeName">
          <el-tab-pane label="正面新闻" name="first">
            <el-card style="height: 620px">
              <div>
                <el-table
                    :data="showData1"
                    style="width: 100%;height: 550px;"
                >
                  <el-table-column prop="title" label="新闻" :width="600">
                    <template slot-scope="scope1">
                      <a :href="scope1.row.url" target="_blank" rel="noopener noreferrer" style="color: black; text-decoration: none;" @click="clickHerf(scope1.row)">
                        {{ scope1.row.title }}
                      </a>
                    </template>
                  </el-table-column>
                  <el-table-column prop="datetime" label="时间" :width="200"></el-table-column>
                  <el-table-column :width="100">
                    <template slot-scope="scope1">
                      <el-button style="margin: 0px" class="button"
                                 @click="handleCollection1(scope1.row,scope1.$index)"
                                 :icon="scope1.row.icon"
                                 circle
                                 ref="collectionButton">

                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage1"
                    :page-size="pageSize"
                    :total="totalNews1"
                    style="float: bottom"
                ></el-pagination>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="普通新闻" name="second">
            <el-card style="height: 620px">
              <div>
                <el-table
                    :data="showData2"
                    style="width: 100%"
                >
                  <el-table-column prop="title" label="新闻" :width="600">
                    <template slot-scope="scope2">
                      <a :href="scope2.row.url" target="_blank" rel="noopener noreferrer" style="color: black; text-decoration: none;" @click="clickHerf(scope1.row)">
                        {{ scope2.row.title }}
                      </a>
                    </template>
                  </el-table-column>
                  <el-table-column prop="datetime" label="时间" :width="200"></el-table-column>
                  <el-table-column :width="100">
                    <template slot-scope="scope2">
                      <el-button style="margin: 0px" class="button"
                                 @click="handleCollection1(scope2.row,scope2.$index)"
                                 :icon="scope2.row.icon"
                                 circle
                                 ref="collectionButton">

                      </el-button>
                    </template>
                  </el-table-column>
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
          </el-tab-pane>
          <el-tab-pane label="负面新闻" name="third">
            <el-card style="height: 620px">
              <div>
                <el-table
                    :data="showData3"
                    style="width: 100%"
                >
                  <el-table-column prop="title" label="新闻" :width="600">
                    <template slot-scope="scope3">
                      <a :href="scope3.row.url" target="_blank" rel="noopener noreferrer" style="color: black; text-decoration: none;" @click="clickHerf(scope1.row)">
                        {{ scope3.row.title }}
                      </a>
                    </template>
                  </el-table-column>
                  <el-table-column prop="datetime" label="时间" :width="200"></el-table-column>
                  <el-table-column :width="100">
                    <template slot-scope="scope3">
                      <el-button style="margin: 0px" class="button"
                                 @click="handleCollection1(scope3.row,scope3.$index)"
                                 :icon="scope3.row.icon"
                                 circle
                                 ref="collectionButton">

                      </el-button>
                    </template>
                  </el-table-column>
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

          </el-tab-pane>

        </el-tabs>
      </template>
      <!--      <el-row>-->
      <!--        <el-col style="width: 32%;margin-right: 20px">-->

      <!--        </el-col>-->
      <!--        <el-col style="width: 32%;margin-right: 20px">-->

      <!--        </el-col>-->
      <!--        <el-col style="width: 33%">-->

      <!--        </el-col>-->
      <!--      </el-row>-->
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
      activeName: 'first',
      iconOnState: "el-icon-star-on",
      iconOffState: "el-icon-star-off",
      PositiveiconState :["el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off",],
      NormaliconState : ["el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off",],
      NegetiveiconState :["el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off","el-icon-star-off",],
      PositivecollectionState :[0,0,0,0,0,0,0,0],
      NormalcollectionState : [0,0,0,0,0,0,0,0],
      NegetivecollectionState :[0,0,0,0,0,0,0,0],

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
      const url0 = `http://localhost:8000/collectnews/getnewslist?userid=${userid}`;
      axios.post(url0)
          .then(response => {
            // 从响应中提取标题数据
            var data=response.data
            if (data["state"] === "200") {
              console.log(data)
              // 如果状态码为 200，表示成功获取数据
              var tableData1 = data["sentiment2_news"].map(item => ({title: item.summary,company:item.company,datetime:item.datetime,url:item.url,id:item.id,icon:"el-icon-star-off",collectionState:0,tableName:2}));
              var tableData2 = data["sentiment1_news"].map(item => ({title: item.summary,company:item.company,datetime:item.datetime,url:item.url,id:item.id,icon:"el-icon-star-off",collectionState:0,tableName:2}));
              var tableData3 = data["sentiment0_news"].map(item => ({title: item.summary,company:item.company,datetime:item.datetime,url:item.url,id:item.id,icon:"el-icon-star-off",collectionState:0,tableName:2}));
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
    formatTooltip(val) {
      return val / 100;
    },
    // 获取当前页的数据信息
    // getPageInfo(){
    //   //清空pageTicket中的数据
    //   //const showDataKey = `showData${tablename}`;
    //   //const tableDataKey = `tableData${tablename}`;
    //   this.showData1=[];
    //   this.showData2=[];
    //   this.showData3=[];
    //   // 获取当前页的数据
    //   // console.log("this.showData1")
    //   // console.log(this.tableData1)
    //   for(let i=(this.currentPage1-1)*this.pageSize;i<this.totalNews1;i++){
    //     //把遍历的数据添加到showData1里面
    //     this.showData1.push(this.tableData1[i]);
    //     // console.log(this.showData1)
    //     //判断是否达到一页的要求
    //     if(this.showData1.length===this.pageSize) break;
    //   }
    //   for(let i=(this.currentPage2-1)*this.pageSize;i<this.totalNews2;i++){
    //     //把遍历的数据添加到showData1里面
    //     this.showData2.push(this.tableData2[i]);
    //     //console.log(this.showData2)
    //     //判断是否达到一页的要求
    //     if(this.showData2.length===this.pageSize) break;
    //   }
    //   for(let i=(this.currentPage3-1)*this.pageSize;i<this.totalNews3;i++){
    //     //把遍历的数据添加到showData1里面
    //     this.showData3.push(this.tableData3[i]);
    //     //console.log(this.showData3)
    //     //判断是否达到一页的要求
    //     if(this.showData3.length===this.pageSize) break;
    //   }
    //
    // },
    getPageInfo(){
      //清空pageTicket中的数据
      //const showDataKey = `showData${tablename}`;
      //const tableDataKey = `tableData${tablename}`;
      this.showData1=[];
      this.showData2=[];
      this.showData3=[];
      var userid=1;
      var whetherCollectUrl=`http://localhost:8000/collectnews/whethercollect?userid=${userid}&newid=`;
      // 获取当前页的数据
      // console.log("this.showData1")
      // console.log(this.tableData1)
      for(let i=(this.currentPage1-1)*this.pageSize;i<this.totalNews1;i++){
        //把遍历的数据添加到showData1里面
        this.showData1.push(this.tableData1[i]);
        var whetherCollectUrl1=whetherCollectUrl+this.tableData1[i]["id"]
        axios.post(whetherCollectUrl1)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              // console.log(data)
              // console.log(data["state"])
              if (data["state"] === "201") {
                this.showData1[i%this.pageSize].collectionState=1;
                this.showData1[i%this.pageSize].icon='el-icon-star-on';
              }else if(data["state"] === "200"){
                this.showData1[i%this.pageSize].collectionState=0;
                this.showData1[i%this.pageSize].icon='el-icon-star-off';
              }
              else{
                this.$message.error("查询是否收藏该新闻发生错误");
              }
              console.log()
            })
            .catch(error => {
              console.error('请求出错:', error);
            });
        //判断是否达到一页的要求
        if(this.showData1.length===this.pageSize) break;
      }
      console.log(this.showData1)
      for(let i=(this.currentPage2-1)*this.pageSize;i<this.totalNews2;i++){
        //把遍历的数据添加到showData1里面
        this.showData2.push(this.tableData2[i]);
        var whetherCollectUrl2=whetherCollectUrl+this.tableData2[i]["id"]
        axios.post(whetherCollectUrl2)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              // console.log(data)
              // console.log(data["state"])
              if (data["state"] === "201") {
                this.showData2[i%this.pageSize].collectionState=1;
                this.showData2[i%this.pageSize].icon='el-icon-star-on';
              }else if(data["state"] === "200"){
                this.showData2[i%this.pageSize].collectionState=0;
                this.showData2[i%this.pageSize].icon='el-icon-star-off';
              }
              else{
                this.$message.error("查询是否收藏该新闻发生错误");
              }
            })
            .catch(error => {
              console.error('请求出错:', error);
            });
        //判断是否达到一页的要求
        if(this.showData2.length===this.pageSize) break;
      }
      for(let i=(this.currentPage3-1)*this.pageSize;i<this.totalNews3;i++){
        //把遍历的数据添加到showData1里面
        this.showData3.push(this.tableData3[i]);
        var whetherCollectUrl3=whetherCollectUrl+this.tableData3[i]["id"]
        axios.post(whetherCollectUrl3)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              // console.log(data)
              // console.log(data["state"])
              if (data["state"] === "201") {
                this.showData3[i%this.pageSize].collectionState=1;
                this.showData3[i%this.pageSize].icon='el-icon-star-on';
              }else if(data["state"] === "200"){
                this.showData3[i%this.pageSize].collectionState=0;
                this.showData3[i%this.pageSize].icon='el-icon-star-off';
              }
              else{
                this.$message.error("查询是否收藏该新闻发生错误");
              }
            })
            .catch(error => {
              console.error('请求出错:', error);
            });
        //判断是否达到一页的要求
        if(this.showData3.length===this.pageSize) break;
      }

    },
    handleCollection1(row,index){
      var userid=1;
      console.log(row.id)
      var newsid=row.id;
      var newsCollectState = row.collectionState;
      const collectionUrl = `http://localhost:8000/collectnews/collectnewsById?userid=${userid}&newid=${newsid}`;
      const deleterCollectionUrl = `http://localhost:8000/collectnews/deletecollect?userid=${userid}&newid=${newsid}`;
      if(newsCollectState===0){
        axios.post(collectionUrl)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              console.log(index)
              console.log(data["state"])
              if (data["state"] === "200") {
                this.$message({message: '收藏成功', type: 'success'});
                this.loadData()
              }
              else if(data["state"] === "202"){
                this.$message.error("您已经收藏该新闻");
              }else{
                this.$message.error("发生错误");
              }

            }).catch(error => {console.error('请求出错:', error);});
      }else{
        axios.post(deleterCollectionUrl)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              console.log(data)
              console.log(data["state"])
              if (data["state"] === "200") {
                this.$message({message: '取消收藏成功', type: 'success'});
                this.loadData();
              }else if(data["state"] === "202"){
                this.$message.error("您还未收藏该新闻");
              }
              else{
                this.$message.error("发生错误");
              }
            }).catch(error => {console.error('请求出错:', error);});
      }
    },    handleCollection2(row,index){
      var userid=1;
      console.log(row.id)
      var newsid=row.id;
      var newsCollectState = row.collectionState;
      console.log(row.collectionState)
      const collectionUrl = `http://localhost:8000/collectnews/collectnewsById?userid=${userid}&newid=${newsid}`;
      const deleterCollectionUrl = `http://localhost:8000/collectnews/deletecollect?userid=${userid}&newid=${newsid}`;
      if(newsCollectState===0){
        console.log(collectionUrl);
        axios.post(collectionUrl)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              console.log(index)
              console.log(data["state"])
              if (data["state"] === "200") {
                this.$message({message: '收藏成功', type: 'success'});
                this.loadData()
              }
              else if(data["state"] === "202"){
                this.$message.error("您已经收藏该新闻");
              }else{
                this.$message.error("发生错误");
              }

            }).catch(error => {console.error('请求出错:', error);});
      }else{
        console.log(deleterCollectionUrl);
        axios.post(deleterCollectionUrl)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              console.log(data)
              console.log(data["state"])
              if (data["state"] === "200") {
                this.$message({message: '取消收藏成功', type: 'success'});
                this.loadData();
              }else if(data["state"] === "202"){
                this.$message.error("您还未收藏该新闻");
              }
              else{
                this.$message.error("发生错误");
              }
            }).catch(error => {console.error('请求出错:', error);});
      }
    },
    handleCollection3(row,index){
      var userid=1;
      console.log(row.id)
      var newsid=row.id;
      var newsCollectState = row.collectionState;
      const collectionUrl = `http://localhost:8000/collectnews/collectnewsById?userid=${userid}&newid=${newsid}`;
      const deleterCollectionUrl = `http://localhost:8000/collectnews/deletecollect?userid=${userid}&newid=${newsid}`;
      if(newsCollectState===0){
        axios.post(collectionUrl)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              console.log(index)
              console.log(data["state"])
              if (data["state"] === "200") {
                this.$message({message: '收藏成功', type: 'success'});
                this.loadData()
              }
              else if(data["state"] === "202"){
                this.$message.error("您已经收藏该新闻");
              }else{
                this.$message.error("发生错误");
              }

            }).catch(error => {console.error('请求出错:', error);});
      }else{
        axios.post(deleterCollectionUrl)
            .then(response => {
              // 从响应中提取标题数据
              var data=response.data;
              console.log(data)
              console.log(data["state"])
              if (data["state"] === "200") {
                this.$message({message: '取消收藏成功', type: 'success'});
                this.loadData();
              }else if(data["state"] === "202"){
                this.$message.error("您还未收藏该新闻");
              }
              else{
                this.$message.error("发生错误");
              }
            }).catch(error => {console.error('请求出错:', error);});
      }
    },clickHerf(row){
      var clickTime=new Date();
      var userid=1;
      var historyUrl=`http://localhost:8000/history/historynewsById?userid=${userid}&newid=${row.id}&clickTime=${clickTime}`;
      axios.post(historyUrl)
          .then(response => {
            // 从响应中提取标题数据
            var data=response.data;
            console.log(data["state"])
            if (data["state"] === "200") {
              console.log(data)
            } else{
              this.$message.error("发生错误");
            }

          }).catch(error => {console.error('请求出错:', error);});
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
.background-container {
  background-image: url('../assets/images/back70.png'); /* Set the background image path */
  background-size: cover; /* Optional: Adjust background size */
  background-position: center; /* Optional: Adjust background position */
  height: 100%; /* Set the desired height */
  width: 100%;
  /* Add other styles as needed */
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
