<template>
	<el-row :gutter="20">
		<el-form
		  :rules="form"
		  label-width="100px"
		>
			<el-form-item label="土壤层次">
				<el-input v-model="soilTwo"></el-input>
			</el-form-item>
		</el-form>
	  <!-- 左侧表单填写 -->
	  <el-col :span="12">
	    <el-card>
		<div>
			<el-descriptions class="margin-top" title="" :column="3" :size="mini" border>
			    <el-descriptions-item>
			      <template slot="label">
			        用户名
			      </template>
			      kooriookami
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        手机号
			      </template>
			      18100000000
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        居住地
			      </template>
			      苏州市
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        备注
			      </template>
			     学校
			    </el-descriptions-item>
			    <el-descriptions-item>
			      <template slot="label">
			        联系地址
			      </template>
			      江苏省苏州市吴中区吴中大道 1188 号
			    </el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    备注
				  </template>
				 学校
				</el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    备注
				  </template>
				 学校
				</el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    备注
				  </template>
				 学校
				</el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    备注
				  </template>
				 学校
				</el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    备注
				  </template>
				 学校
				</el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    备注
				  </template>
				 学校
				</el-descriptions-item>
				<el-descriptions-item>
				  <template slot="label">
				    备注
				  </template>
				 学校
				</el-descriptions-item>
				
			
			  </el-descriptions>
		</div>
	    </el-card>
	  </el-col>
	 
	  <el-col :span="12">
	    <el-card>
		  <div style="width: 100%;height: 100%;">
			  <img class="img-index" src="../../assets/images/sign-in-8.jpg" style="width: 100%;height: 330px;margin-bottom: 20px;"/>
		  </div>
	    </el-card>
	  </el-col>
	</el-row>
</template>

<script>
	export default{
		name:"SoilBankTwo",
		data() {
			return {
				soilTwo:""
			}
		}
	}
</script>

<style>
</style>