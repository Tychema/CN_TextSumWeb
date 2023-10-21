<template>
  <el-container>
    <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1" v-on:click="toAllNews">首页</el-menu-item>
<!--                <i class="el-icon-user" ></i>-->
                <div class="block" style="float: right; margin-top: 0px; margin-right: 15px;height: 60px"><el-avatar :size="35" :src="circleUrl" style="margin-top: 10px"></el-avatar></div>
            </el-menu>
    </el-header>
    <el-container>
      <el-aside width="150px">
        <el-menu class="el-menu-vertical-demo" >
<!--        <el-menu class="el-menu-vertical-demo" @select="handleMenuSelect">-->
<!--        <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" @select="handleMenuSelect">-->
          <el-menu-item index="AllNews" v-on:click="toAllNews">所有新闻</el-menu-item>
          <el-menu-item index="CompanySearch" v-on:click="toCompanySearch">公司搜索</el-menu-item>
          <el-menu-item index="PointNews" v-on:click="toPointNews">关注的新闻</el-menu-item>
          <el-menu-item index="CollectionNews" v-on:click="toCollectionNews">收藏新闻</el-menu-item>
          <el-menu-item index="History" v-on:click="toHistory">历史记录</el-menu-item>
          <el-menu-item index="TextSummary" v-on:click="toTextSummary">文本摘要</el-menu-item>
          <!-- 添加更多菜单项 -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
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
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: initial;
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
</style>
