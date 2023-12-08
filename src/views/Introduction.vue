<template>
  <div class="background-container">
    <el-card style="height:100%;width: 60%;margin-left: 19%" :body-style="{height: '711px'}">
      <el-container style="height: 660px; border: 1px solid #eee">
        <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']" >
              <el-menu-item index="Introduction" @click="towebIntroduction">网站介绍</el-menu-item>
              <el-menu-item index="PageFunction" @click="topageFunction">各页面功能</el-menu-item>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
<!--            <router-view></router-view>-->
            <el-card style="width: 99.8%" v-show="page1">
              <el-card style="width: 100%;height: 610px">
                <el-col>
                  <el-row>
                    <div style="width: 600px;margin-left: 40px;background-color: #002E5D">
                      <el-row>
                        <el-col style="width: 38%;padding-top: 10px;">
                          <el-image :src="logoUrl" style="width: 90px;height: 90px;float: right"></el-image>
                        </el-col>
                        <el-col style="width: 62%;padding-top: 30px;">
                          <h1 style="width: 200px;margin-top: 8px;margin-bottom:30px;color: white;font-size: 30px;">金融快讯系统</h1>
                        </el-col>
                      </el-row>
                    </div>
                  </el-row>
                  <el-row>
                    <h2 style="color: brown;float: left;margin-left: 40px;">项目介绍</h2>
                  </el-row>
                  <el-row>
                    <h3 style="color: #CDA94A;text-align: left;margin-top: 0px;text-indent:40px;">{{projectIntroduction}}</h3>
                  </el-row>
                </el-col>
              </el-card>
            </el-card>
            <el-card style="width: 99.8%" v-show="page2">
              <el-card style="width: 100%;height: 610px">
                <el-col>
                  <el-row>
                    <h2 style="color: brown;float: left;margin-left: 40px;">各页面功能介绍</h2>
                  </el-row>
                  <el-row>
                    <h3 style="color: #CDA94A;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">金融新闻页面</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: black;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">{{page1Func}}</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: #CDA94A;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">公司搜索页面</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: black;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">{{page2Func}}</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: #CDA94A;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">公司动态页面</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: black;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">{{page3Func}}</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: #CDA94A;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">收藏新闻页面</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: black;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">{{page4Func}}</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: #CDA94A;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">历史记录页面</h3>
                  </el-row>
                  <el-row>
                    <h3 style="color: black;text-align: left;margin-top: 0px;margin-bottom:5px;text-indent:40px;">{{page5Func}}</h3>
                  </el-row>
                </el-col>
              </el-card>
            </el-card>
          </el-main>
        </el-container>

      </el-container>

    </el-card>
  </div>
</template>

<script>
import logoUrl from '@/assets/logo.png'
export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Introduction",
  components:{},
  data() {
    return {
      str: '',
      editorOption: {},
      value: 1,
      input: " ",
      projectIntroduction : "这个金融新闻快讯网站是您获取及时财经资讯的理想去处。我们整合了全面的金融新闻报道，并利用先进的情感分类技术对新闻进行分析，帮助用户更好地了解市场情绪和态势。网站提供便捷的公司搜索功能，让您能快速获取感兴趣企业的相关新闻及动态。您还可以轻松收藏您喜欢的新闻，方便日后参考，同时查看历史记录，追溯您的阅读历程。我们致力于提供高质量、全面的金融资讯，并通过用户友好的界面和功能，让您轻松把握市场脉搏。无论是追踪个别公司动向，了解行业变化，还是捕捉市场情绪波动，我们都是您的信赖之选。",
      page1Func :"所有新闻页面：左侧的最热要闻排列出的点击率最高的新闻，右侧的新闻将所有的新闻按时间顺序和积极、普通、消极三类情感排列呈现，表格分别是新闻的摘要、新闻的时间和收藏按钮，点击此新闻的摘要可以进入到新闻详情页面。新闻的摘要通过基于mT5的金融新闻摘要模型进行摘要得到的数据。情感分类通过基于mT5的金融新闻情感分类模型得到，之后的数据同理。",
      page2Func :"公司搜索页面：可以通过搜索栏搜索用户期望关注的公司名称，下面展示该公司的所有新闻，右侧按钮可以关注该公司，关注之后可以在公司动态页面展示用户关注的公司的新闻。",
      page3Func :"公司动态页面：展示了用户关注的所有公司的新闻，如果用户没有关注公司此页面没有显示，可以去公司搜索页面关注公司来填充此页面。",
      page4Func :"新闻搜藏页面：展示了用户收藏的所有新闻，如果用户没有收藏任何新闻则此页面为空，可以去其他页面收藏新闻来填充此页面。",
      page5Func :"历史记录页面：展示了该用户点击过的所有新闻，同样按照三类情感分别展示。",
      page1 : true,
      page2 : false,
      logoUrl:logoUrl,

    }
  },
  methods:{
    towebIntroduction() {
      // this.$router.push('/webIntroduction')
      this.page1=true;
      this.page2=false;
    },
    topageFunction() {
      // this.$router.push('/pageFunction')
      this.page1=false;
      this.page2=true;
    },
  }
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
.el-card is-always-shadow{
  margin-left: 0px;
}
.background-container {
  background-image: url('../assets/images/back70.png'); /* Set the background image path */
  background-size: cover; /* Optional: Adjust background size */
  background-position: center; /* Optional: Adjust background position */
  height: 100%; /* Set the desired height */
  width: 100%;
  /* Add other styles as needed */
}
</style>
