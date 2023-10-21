<template>
	<div>
		<el-card>
        <el-row>
          <el-col style="width: 17%;margin-right: 20px">
            <el-card style="height: 540px">
              <el-col>
                <el-row>
                <el-row>
                  <el-col style="width: 36px">
                    <i class="el-icon-setting" style="float: left;font-size: 35px"></i>
                  </el-col>
                  <el-col style="width: 70px">
                    <h3 style="margin-top: 5px;margin-left: 0px">设置</h3>
                  </el-col>
                </el-row>
                </el-row>
                <el-divider class="custom-divider"></el-divider>
                <el-row>
                  <div class="block">
                    <span class="demonstration">定义摘要长度</span>
                    <el-slider v-model="value" :min="1" :max="10"></el-slider>
                  </div>
                </el-row>
                <el-row>
                  <div style="height: 350px"></div>
                  <el-button type="primary" class="custom-button" @click.native="fetchData">
                    摘要生成
                  </el-button>
                </el-row>
<!--              <input type="checkbox" class="switch">-->
              </el-col>
            </el-card>
          </el-col>
          <el-col style="width: 40%;margin-right: 20px">
            <el-card >
            <el-input v-model="input" :rows="8" type="textarea" style="" class="rounded-input"></el-input>
            </el-card>
          </el-col>
          <el-col style="width: 40%">
            <el-card>
<!--              <el-input v-model="conclude" :rows="8" type="textarea" class="rounded-input">-->

<!--              </el-input>-->
              <el-empty description="这里是您的摘要" style="height: 500px"></el-empty>
            </el-card>
          </el-col>
        </el-row>
			</el-card>
			<el-row :gutter="20">
				<!-- 左侧表单填写 -->
				<el-col :span="12">
				</el-col>
				<el-col :span="12">
				</el-col>
			</el-row>
	</div>
</template>

<script>
	// import ProIntroduction from "./ProIntroduction.vue"
	// import ProTable from "./ProTable.vue"
  import axios from 'axios'; // 导入 Axios

	export default{
    // eslint-disable-next-line vue/multi-word-component-names
		name:"Index",
		components:{},
    data() {
      return {
        content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
        str: '',
        editorOption: {},
        value: 1,
        input: " ",
        sum_result: '', // 用于存储请求返回的结果

      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
      fetchData() {
        // 发送 POST 请求到 127.0.0.1:8080，传递输入数据
        var url='/TextSummarization'
        var result=axios.post(url, { "txt": this.input })
            .then(response => {
              // 请求成功，将返回的数据存储到 result 中
              this.result = response.data;
            })
            .catch(error => {
              // 请求失败，可以处理错误情况
              console.error('请求失败:', error);
            });
        console.log(result)
      },
    },
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
