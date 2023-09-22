<template>
  <div>
	<el-card>
		<el-row :gutter="20">
		  <!-- 左侧表单填写 -->
		  <el-col :span="10">
		    <el-card style="height:320px">
			<div>
				<p>保护地浏览：</p>
				<el-form ref="form" :model="form" label-width="80px">
				  <el-form-item label="活动名称">
				    <el-input v-model="form.name"></el-input>
				  </el-form-item>
				  <el-form-item label="活动名称">
				    <el-input v-model="form.region"></el-input>
				  </el-form-item>
				  <el-form-item>
				      <el-button type="primary" @click="onSubmit">检索</el-button>
				    </el-form-item>
				</el-form>
			</div>
		    </el-card>
		  </el-col>
		
		  <!-- 右侧展示搜索内容 -->
		 
		  <el-col :span="14">
		    <el-card style="height: 320px">
			  <div style="width: 100%">
				  <img class="img-index" src="../../assets/images/sign-in-2.jpg" style="width: 100%;height: 290px;margin-bottom: 20px;"/>
			  </div>
		    </el-card>
		  </el-col>
		</el-row>
	</el-card>
  </div>
</template>

<script>
	export default{
    // eslint-disable-next-line vue/multi-word-component-names
		name:"Vegetation",
		data() {
			return{
				form: {
				  name: '',
				  region: ''
				}

			}
		},
		methods:{
			onSubmit(){
				console.log("数据已经取到")
			}
		}
	}
</script>

<style>
</style>