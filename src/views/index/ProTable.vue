<template>
	<div>
<!--		<el-card>-->
<!--			<h4 style="float: left;" >通知公告</h4>-->
<!--			<el-link type="primary" style="float: right;padding-top: 4%">more</el-link>-->
<!--			<el-table :data="reportList" style="width: 100%" :show-header="false" @row-click="rowClick">-->
<!--				<el-table-column style="max-height: 100px" prop="title" width="400" :show-overflow-tooltip='true'></el-table-column>-->
<!--				<el-table-column prop="time" width="100" fixed="right"></el-table-column>-->
<!--			</el-table>-->
<!--		</el-card>-->

<!--		<el-dialog :visible.sync="dialogVisible" width="50%">-->
<!--			<div style="padding-left: 20px;padding-right: 20px;padding-bottom: 20px">-->
<!--				<h2>{{this.dialogMessage.title}}</h2>-->
<!--				<h8>{{this.dialogMessage.time}}</h8>-->
<!--				<p v-html="dialogMessage.content"></p>-->
<!--				<span style="float: right">{{this.dialogMessage.author}}</span>-->
<!--			</div>-->
<!--		</el-dialog>-->
	</div>
</template>
<script>
	import {getReportList} from '../../api/project';
	export default{
		name:"ProTable",
		data() {
			return {
				reportList:[],
				dialogVisible: false,
				dialogMessage:{
					author: '',
					content: '',
					time: '',
					title: '',
				},
			}
		},
		created() {
			this.getReports()
		},
		methods:{
			getReports(){
				getReportList().then(res=>{
					this.reportList = res.data.splice(0,5)
				})
			},
			rowClick(row){
				this.dialogVisible = true
				this.dialogMessage = row
			}
		}
	}
</script>

<style>

</style>
