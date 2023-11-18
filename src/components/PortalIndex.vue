<template>
  <el-container style="height: 100%;">
    <el-header class="header1" style="height: 50px;width: 100%;">
      <div class="block" style="float: right; margin-top: 0px; margin-right: 15px;">
        <el-avatar :size="35" :src="circleUrl" style="margin-top: 7px"></el-avatar>
      </div>
    </el-header >
    <el-header class="header2" style="width: 100%;">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1" v-on:click="toAllNews">&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;</el-menu-item>
              <el-menu-item index="AllNews" v-on:click="toAllNews">金融新闻</el-menu-item>
              <el-menu-item index="CompanySearch" v-on:click="toCompanySearch">公司搜索</el-menu-item>
              <el-menu-item index="PointNews" v-on:click="toPointNews">公司动态</el-menu-item>
              <el-menu-item index="CollectionNews" v-on:click="toCollectionNews">收藏新闻</el-menu-item>
              <el-menu-item index="History" v-on:click="toHistory">历史记录</el-menu-item>
<!--                <i class="el-icon-user" ></i>-->

            </el-menu>
    </el-header>
<!--    <el-container>-->
<!--      <el-aside width="150px">-->
<!--        <el-menu class="el-menu-vertical-demo" >-->
<!--&lt;!&ndash;        <el-menu class="el-menu-vertical-demo" @select="handleMenuSelect">&ndash;&gt;-->
<!--&lt;!&ndash;        <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" @select="handleMenuSelect">&ndash;&gt;-->

<!--&lt;!&ndash;          <el-menu-item index="TextSummary" v-on:click="toTextSummary">文本摘要</el-menu-item>&ndash;&gt;-->
<!--          &lt;!&ndash; 添加更多菜单项 &ndash;&gt;-->
<!--        </el-menu>-->
<!--      </el-aside>-->
      <el-container>
        <el-main >
          <router-view></router-view>
        </el-main>
        <el-footer></el-footer>
      </el-container>
<!--    </el-container>-->
  </el-container>
<!--  <el-container>-->
<!--    <el-header>-->
<!--      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
<!--        <el-menu-item index="1" v-on:click="toIndex">首页</el-menu-item>-->
<!--        <el-submenu index="2">-->
<!--          <template slot="title">调查样方</template>-->
<!--          <el-menu-item index="2-1" v-on:click="toSQ">浏览检索</el-menu-item>-->
<!--          <el-menu-item index="2-2" v-on:click="toSurveyDownload">数据下载</el-menu-item>-->
<!--        </el-submenu>-->
<!--        <el-menu-item index="3" v-on:click="toquillEditor">定点监测样方</el-menu-item>-->
<!--        <el-submenu index="4">-->
<!--          <template slot="title">生态系统固碳</template>-->
<!--          <el-menu-item index="4-1" v-on:click="toEcosystemScan">浏览检索</el-menu-item>-->
<!--          <el-menu-item index="4-2" v-on:click="toEcosystemDownload">数据下载</el-menu-item>-->
<!--        </el-submenu>-->
<!--        &lt;!&ndash; 不想要下拉样式的方式很简单，就是不用下拉样式的标签 &ndash;&gt;-->
<!--        <el-menu-item index="5" v-on:click="toVegetation">植被保护与利用</el-menu-item>-->
<!--        <el-menu-item index="6" v-on:click="toSoilBank">土壤库</el-menu-item>-->
<!--        <el-submenu index="7">-->
<!--          <template slot="title">照片库</template>-->
<!--          <el-menu-item index="7-1" v-on:click="toPictureOne">群落结构</el-menu-item>-->
<!--          <el-menu-item index="7-2" v-on:click="toPictureTwo">优势物种</el-menu-item>-->
<!--        </el-submenu>-->
<!--        <el-menu-item index="8" v-on:click="toSpecimen">标本库</el-menu-item>-->
<!--		&lt;!&ndash; 这里跳转其他网站，还是整合其他网站到自己的页面里面是都可以的，网上都有教程 &ndash;&gt;-->
<!--		<el-menu-item index="9">-->
<!--			<a href="http://192.168.31.226:8084/login" style="text-decoration: none;">-->
<!--				数据管理-->
<!--			</a>		-->
<!--		</el-menu-item>-->
<!--      </el-menu>-->
<!--      <div class="line"></div>-->
<!--    </el-header>-->
<!--    <el-container>-->
<!--      <el-main>-->
<!--        <router-view></router-view>-->
<!--      </el-main>-->
<!--      <el-footer>-->
<!--        联系方式等信息-->
<!--      </el-footer>-->
<!--    </el-container>-->
<!--  </el-container>-->
</template>

<script>
export default {
  name: 'ProtalIndex',
  components: {
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toCompanySearch() {
      this.$router.push('/CompanySearch')
    },
    toAllNews() {
      this.$router.push('/AllNews')
    },
    toPointNews() {
      this.$router.push('/PointNews')
    },
    toCollectionNews() {
      this.$router.push('/CollectionNews')
    },
    toHistory() {
      this.$router.push('/History')
    },
    toTextSummary() {
      this.$router.push('/TextSummary')
    },

    // toSoilBank(){
    //   // 这里这种配置是错误的，因为是要直接到达页面
    //   // this.$router.push('/SoilBank')
    //   // ok,反复点击导致部分页面空置的问题解决了
    //   // 这里设置了，就不要在SoilBank中设置，重复设置会出问题
    //   this.$router.push('/SoilBank/SoilBankOne')
    // },
    // toSpecimen(){
    //   this.$router.push('/Specimen')
    // }
  },
  mounted() {
    this.$router.push('/AllNews')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header1{
  background-color: #002E5D;
  color: white;
  text-align: center;
  line-height: 40px;
}
.custom-header {
  height: 40px !important; /* 使用 !important 覆盖之前的样式 */
}
.header2{
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/*.el-aside {*/
/*  background-color: #D3DCE6;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 200px;*/
/*}*/

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: initial;
  padding: 0px !important;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-demo {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 如果需要调整间距，可以添加 margin 或 padding 属性 */
.el-menu-item {
  margin: 0 10px;
}
.el-menu-item.is-active{
  color: white !important;
  background: linear-gradient(to bottom, #DFD37F, #CDA94A) !important;
  border-bottom: none !important;
}

</style>
