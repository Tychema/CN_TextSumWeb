<template>
	<div>
		<el-card>
        <el-row>
          <el-col style="width: 17%;margin-right: 20px">
            <el-card style="height: 540px">
            </el-card>
          </el-col>
          <el-col style="width: 40%;margin-right: 20px">
            <el-card >
            <el-input v-model="conclude" :rows="8" type="textarea" style="" class="rounded-input"></el-input>
            </el-card>
          </el-col>
          <el-col style="width: 40%">
            <el-card>
              <el-input v-model="conclude" :rows="8" type="textarea" class="rounded-input"></el-input>
            </el-card>
          </el-col>
        </el-row>
			</el-card>
			<el-row :gutter="20">
				<!-- 左侧表单填写 -->
				<el-col :span="12">
					<ProIntroduction></ProIntroduction>
				</el-col>
				<el-col :span="12">
					<ProTable></ProTable>
				</el-col>
			</el-row>
	</div>
</template>

<script>
	import ProIntroduction from "./ProIntroduction.vue"
	import ProTable from "./ProTable.vue"
	export default{
    // eslint-disable-next-line vue/multi-word-component-names
		name:"Index",
		components:{ProIntroduction,ProTable},
    data() {
      return {
        content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
        str: '',
        editorOption: {}
      }
    },
  methods: {

  },
  computed: {

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
</style>
