<template>
  <div>
	<div>
		<el-row :gutter="20">
			<el-col :span="14">
				<ul style="margin-top: 2%">
					<li style="list-style: none;">数据下载</li>
				</ul>
			</el-col>
			<el-col :span="8">
				<el-input v-model="input" placeholder="请输入内容" style="float: left;width: 80%;"></el-input>
				<el-button type="primary" @click="onSubmit" size="small" style="float: right;margin-top: 1%">检索</el-button>
			</el-col>
		</el-row>
		<!-- 样方浏览的数据下载页面 -->
		<el-table :data="tableData" style="width:100%" height="400" border>
		  <el-table-column prop="id" label="序号" min-width="5%"></el-table-column>
		  	<el-table-column prop="datasetname" label="名称" min-width="25%"></el-table-column>
		  	<el-table-column prop="digest" label="摘要" min-width="20%"></el-table-column>
				<el-table-column prop="begintime" label="开始时间" min-width="5%"></el-table-column>
				<el-table-column prop="endtime" label="结束时间" min-width="5%"></el-table-column>
				<el-table-column prop="sharemode" label="共享方式" min-width="10%"></el-table-column>
				<el-table-column prop="provider" label="提供者" min-width="10%"></el-table-column>
				<el-table-column label="操作" min-width="20%">
					<template slot-scope="scope">
						<el-button type="text" style="padding-right: 5px;" size="small" @click="getMetadata(scope.row.id,1)">
							元数据下载
							<!-- <a :href="'http://192.168.31.226:8084/dataset/download_metadata/'+scope.row.id+'/1'">元数据下载</a> -->
						</el-button>
						<el-button type="text" style="padding-right: 5px;" size="small" @click="getDateset(scope.row.id,1)">
							数据集下载
							<!-- <a :href="'http://113.55.120.105:8084/dataset/download/'+scope.row.id+'/1'">数据集下载</a> -->
						</el-button>
						<el-tag size="small">次数:<span v-text="scope.row.downloadcount"></span></el-tag>
					</template>
				</el-table-column>
		</el-table>
	<!-- </div>
	<div v-if="selectShow">
		<el-button type="text" @click="dialogTableVisible=true">数据上传页面详情</el-button> -->
		<el-dialog title="" :visible.sync="dialogTableVisible" :modal-append-to-body='false'>
			<div v-if="typeOption==='one'">
				<p>
					1.{{this.selects.typeOne.titleOne}}
				</p>
				<p>
					2.{{this.selects.typeOne.titleTwo}}
				</p>
			</div>
			<div v-else-if="typeOption==='two'">
			  <p>
			  	1.{{this.selects.typeTwo.titleOne}}
			  </p>
			  <p>
			  	2.{{this.selects.typeTwo.titleTwo}}
			  </p>
			</div>
			<div v-else-if="typeOption==='three'">
			  <p>
			  	1.{{this.selects.typeThree.titleOne}}
			  </p>
			  <p>
			  	2.{{this.selects.typeThree.titleTwo}}
			  </p>
			</div>
			<div v-else>
			  <p>
			  	1.{{this.selects.typeFour.titleOne}}
			  </p>
			  <p>
			  	2.{{this.selects.typeFour.titleTwo}}
			  </p>
			</div>
			<el-select v-model="value" placeholder="请选择应用类型" @change="selectChange(value)">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<div v-if="typeOption==='one'">
				<el-row :gutter="24">
					<el-col :span="12">
						<div>
							{{this.selects.typeOne.optionTwo}}：
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div>
							{{this.selects.typeOne.optionFour}}：
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div>
							{{this.selects.typeOne.optionSix}}：
							<div class="block">
							    <el-date-picker
							      v-model="value1"
							      type="date"
							      placeholder="选择日期">
							    </el-date-picker>
							  </div>
						</div>
					</el-col>
					<el-col :span="12">
						<div>
							{{this.selects.typeOne.optionOne}}：
							<el-select v-model="valueTwo" placeholder="选择课题级别" @change="selectChangeTwo(value)">
							    <el-option
							      v-for="item in optionsTwo"
							      :key="item.valueTwo"
							      :label="item.label"
							      :value="item.valueTwo">
							    </el-option>
							</el-select>
						</div>
						<div>
							{{this.selects.typeOne.optionThree}}：
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
						<div>
							{{this.selects.typeOne.optionFive}}：
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="24">
					<el-col :span="12">
						<div>
							相关材料：
							<el-upload
							  class="upload-demo"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :on-change="handleChange"
							  :file-list="fileList">
							  <el-button size="small" type="primary">点击上传</el-button>
							</el-upload>
						</div>
					</el-col>
					<el-col :span="12">
						<el-button type="primary">提交</el-button>
						  <el-button type="success">关闭</el-button>
					</el-col>	
				</el-row>
			</div>
			<div v-else-if="typeOption==='two'">
			  <el-row :gutter="24">
			  	<el-col :span="12">
					<div>
						{{this.selects.typeTwo.optionOne}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeTwo.optionThree}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeTwo.optionFive}}：
						<div class="block">
						    <el-date-picker
						      v-model="value1"
						      type="date"
						      placeholder="选择日期">
						    </el-date-picker>
						  </div>
					</div>
			  	</el-col>
			  	<el-col :span="12">
					<div>
						{{this.selects.typeTwo.optionTwo}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeTwo.optionFour}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
			  	</el-col>
			  </el-row>
			  <el-row :gutter="24">
			  	<el-col :span="12">
			  		<div>
			  			相关材料：
			  			<el-upload
			  			  class="upload-demo"
			  			  action="https://jsonplaceholder.typicode.com/posts/"
			  			  :on-change="handleChange"
			  			  :file-list="fileList">
			  			  <el-button size="small" type="primary">点击上传</el-button>
			  			</el-upload>
			  		</div>
			  	</el-col>
			  	<el-col :span="12">
			  		<el-button type="primary">提交</el-button>
			  		  <el-button type="success">关闭</el-button>
			  	</el-col>	
			  </el-row>
			</div>
			<div v-else-if="typeOption==='three'">
			  <el-row :gutter="24">
			  	<el-col :span="12">
					<div>
						{{this.selects.typeThree.optionOne}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeThree.optionThree}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeThree.optionFive}}：
						<div class="block">
							<el-date-picker
							  v-model="value1"
							  type="date"
							  placeholder="选择日期">
							</el-date-picker>
						  </div>
					</div>
			  	</el-col>
			  	<el-col :span="12">
					<div>
						{{this.selects.typeThree.optionTwo}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeThree.optionFour}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
			  	</el-col>
			  </el-row>
			  <el-row :gutter="24">
			  	<el-col :span="12">
			  		<div>
			  			相关材料：
			  			<el-upload
			  			  class="upload-demo"
			  			  action="https://jsonplaceholder.typicode.com/posts/"
			  			  :on-change="handleChange"
			  			  :file-list="fileList">
			  			  <el-button size="small" type="primary">点击上传</el-button>
			  			</el-upload>
			  		</div>
			  	</el-col>
			  	<el-col :span="12">
			  		<el-button type="primary">提交</el-button>
			  		  <el-button type="success">关闭</el-button>
			  	</el-col>	
			  </el-row>
			</div>
			<div v-else>
			  <el-row :gutter="24">
			  	<el-col :span="12">
					<div>
						{{this.selects.typeFour.optionOne}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeFour.optionThree}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeFour.optionFive}}：
						<div class="block">
							<el-date-picker
							  v-model="value1"
							  type="date"
							  placeholder="选择日期">
							</el-date-picker>
						  </div>
					</div>
			  	</el-col>
			  	<el-col :span="12">
					<div>
						{{this.selects.typeFour.optionTwo}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						{{this.selects.typeFour.optionFour}}：
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
			  	</el-col>
			  </el-row>
			  <el-row :gutter="24">
			  	<el-col :span="12">
			  		<div>
			  			相关材料：
			  			<el-upload
			  			  class="upload-demo"
			  			  action="https://jsonplaceholder.typicode.com/posts/"
			  			  :on-change="handleChange"
			  			  :file-list="fileList">
			  			  <el-button size="small" type="primary">点击上传</el-button>
			  			</el-upload>
			  		</div>
			  	</el-col>
			  	<el-col :span="12">
			  		<el-button type="primary">提交</el-button>
			  		  <el-button type="success">关闭</el-button>
			  	</el-col>	
			  </el-row>
			</div>
		</el-dialog>
	</div>
  </div>
</template>

<script>
	import {getDataList,getDatesetByTwoId,getMetadataByTwoId} from "../../api/dataSet";

	export default {
		name:"SurveyQuadratTwo",
		// import 引入的组件需要注入到对象中才能使用
		components: {},
		props: {},
		// 这里用于存放数据
		data () {
			return {
				dialogTableVisible: false,
				selectShow:true,
				order:15,
				input:'',
				form:{
					message:"",
				},
				tableData: [],
				typeOption:"One",
				selects:{
					typeOne:{
						titleOne:"如果所申请的数据用于项目研究，请填写项目相关信息(项目类型、名称、编号、负责人等)， 并将数据所支撑项目/课题的任务书或合同书首页、预期成果及研究目标、考核指标、主要参加人员以及任务书盖章页扫描后通过附件上传。",
						titleTwo:"所上传的附件文件大小不要超过5MB！",
						optionOne:"课题级别",
						optionTwo:"项目名称",
						optionThree:"项目编号",
						optionFour:"项目负责人",
						optionFive:"项目承担单位",
						optionSix:"执行结束时间",
					},
					typeTwo:{
						titleOne:"如果所申请的数据用于支撑学术论文或毕业论文，填写论文名称、学校信息、预计毕业时间，以及指导老师的姓名及联系方式。",
						titleTwo:"所上传的附件文件大小不要超过5MB！",
						optionOne:"论文名称",
						optionTwo:"学校信息",
						optionThree:"导师姓名",
						optionFour:"导师联系方式",
						optionFive:"预计毕业时间",
					},
					typeThree:{
						titleOne:"如果所申请的数据用于支撑学术论文或毕业论文，填写论文名称、学校信息、预计毕业时间，以及指导老师的姓名及联系方式。",
						titleTwo:"所上传的附件文件大小不要超过5MB！",
						optionOne:"竞赛题目",
						optionTwo:"学校信息",
						optionThree:"导师姓名",
						optionFour:"导师联系方式",
						optionFive:"预计完成时间",
					},
					typeFour:{
						titleOne:"如果所申请的数据用于其他用途，请填写用途名称、应用类型，以及负责人的单位及姓名等信息。",
						titleTwo:"所上传的附件文件大小不要超过5MB！",
						optionOne:"名称",
						optionTwo:"应用类型",
						optionThree:"负责人",
						optionFour:"承担单位",
						optionFive:"执行结束时间",
					}
				},
				fileList:[],
				optionsTwo:[
					{
					  valueTwo: '1',
					  label: '项目级'
					}, {
					  valueTwo: '2',
					  label: '课题级'
					}, {
					  valueTwo: '3',
					  label: '专题级'
					},
				],
				options: [
					{
					  value: '1',
					  label: '国家重点研发计划'
					}, {
					  value: '2',
					  label: '国家重大专项'
					}, {
					  value: '3',
					  label: '国家重大工程'
					}, {
					  value: '4',
					  label: '国家973计划项目'
					}, {
					  value: '5',
					  label: '国家863计划项目'
					}, {
					  value: '6',
					  label: '国家级科技支撑课题'
					}, {
					  value: '7',
					  label: '国家自然科学基金'
					}, {
					  value: '8',
					  label: '国家社会科学基金'
					}, {
					  value: '9',
					  label: '国际合作项目'
					}, {
					  value: '10',
					  label: '中国科学院项目'
					}, {
					  value: '11',
					  label: '省部级项目'
					}, {
					  value: '12',
					  label: '博士论文'
					}, {
					  value: '13',
					  label: '硕士论文'
					}, {
					  value: '14',
					  label: '学士论文'
					}, {
					  value: '15',
					  label: '大学生竞赛'
					}, {
					  value: '16',
					  label: '其他用途'
					}],
				    value: '',
					valueTwo: '',
					pickerOptions: {
					  disabledDate(time) {
						return time.getTime() > Date.now();
						}
					},
					value1:"",
			};
		},
		created() {
			this.getData(null)
			// 为了页面一显示出来，就可以展示
			this.typeOption = "one"
		},
		methods: {
			handleClick(row) {
				console.log(row);
			},
			onSubmit(){

			},
			selectChange(value){
				// console.log(value)
				if(value<=11){
					this.typeOption = "one"
				}else if (value>11 && value<=14) {
					this.typeOption = "two"
				}else if (value==15) {
					this.typeOption = "three"
				}else{
					this.typeOption = "four"
				}
			},
			// selectChangeTwo(value){
			//
			// },
			handleChange(file, fileList) {
			        this.fileList = fileList.slice(-3);
			},
			getData(condition){
				getDataList(condition).then(res=>{
					this.tableData = res.data
				})
			},
			getMetadata(id,userid){
				getMetadataByTwoId(id,userid).then(res=>{
					console.log(res.status)
					// 这里本地调用以下url就可，不使用borb,这个太难实现了，一次请求，两次调用
				}).catch(error => {
					console.log(error.response.status)
					if(error.response.status == '401')
					{
						alert("请进行资格验证")
						this.dialogTableVisible=true
					}
					
				})
			},
			getDateset(id,userid){
				getDatesetByTwoId(id,userid).then(res=>{
					console.log(res.status)
				}).catch(error => {
					console.log(error.response.status)
					if(error.response.status == '401')
					{
						alert("请进行资格验证")
						this.dialogTableVisible=true
					}
					
				})
			},
			
		}
	}
</script>

<style scoped>

</style>
