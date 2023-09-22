<template>
  <div>
    <el-row :gutter="20">
      <!-- 左侧表单填写 -->
      <el-col :span="10">
				<el-card style="height: 320px">
					<div>
						<p>固碳参数：</p>
						<el-select v-model="valueone" placeholder="请选择">
							<el-option
								v-for="item in optionsone"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</div>
					<div>
						<p>碳汇分析</p>
						<el-select v-model="valuetwo" placeholder="请选择">
							<el-option
									v-for="item in optionstwo"
									:key="item.value"
									:label="item.label"
									:value="item.value">
							</el-option>
						</el-select>
					</div>
        </el-card>
      </el-col>

      <!-- 右侧展示搜索内容 -->
      <el-col :span="14">
        <el-card style="height: 320px">
					<div style="width: 70%;float:left">
						<img class="img-index" src="../../assets/images/sign-in-1.jpg"
						style="width: 100%;height: 290px"/>
					</div>
							<!-- 以下是文字 -->
					<div style="width: 30%;float:right;">
						<p style="position: fixed; top: 35%;width: 200px;">过去二十年云南省的平均碳汇强度空间展示图，不随左侧选择变化</p>
					</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
	export default{
		name:"EcoSystemOne",
		data() {
			return{
				optionsone: [{
					value: '选项1',
					label: '生物量'
				}, {
					value: '选项2',
					label: '碳储量'
				}, {
					value: '选项3',
					label: '总初级生产力'
				}, {
					value: '选项4',
					label: '涡度通量'
				}, {
					value: '选项5',
					label: 'SIF'
				},{
					value: '选项6',
					label: '模型'
				}],
				optionstwo: [{
					value: '选项1',
					label: '涡度通量'
				}, {
					value: '选项2',
					label: '森林清查'
				}, {
					value: '选项3',
					label: '模型'
				}],
				valueone:"",
				valuetwo:"",
			}
		}
	}
</script>

<style>
</style>
