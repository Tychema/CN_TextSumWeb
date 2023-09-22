<template>
	<el-card>
	  <div style="margin-bottom:5px;">
			<el-button v-on:click="showSoilTable" size="mini">理化属性表</el-button>
			<el-button v-on:click="showSoilImg" size="mini">剖面图片</el-button>
	  </div>
	  <div v-if="soilShow">
			<el-table :data="tableData" style="width: 100%" height="340">
				<el-table-column prop="date" label="土壤层次编号" width="100"></el-table-column>
				<el-table-column prop="name" label="土壤含水率(%)" width="100"></el-table-column>
				<el-table-column prop="province" label="土壤容重(g/cm^3)" width="100"></el-table-column>
				<el-table-column prop="city" label="土壤有机碳含量(mg/g)" width="100"></el-table-column>
				<el-table-column prop="address" label="土壤全氮含量(mg/g)" width="100"></el-table-column>
				<el-table-column prop="address" label="土壤碱解氮含量(mg/g)" width="100"></el-table-column>
				<el-table-column prop="address" label="土壤全磷含量(mg/g)" width="100"></el-table-column>
				<el-table-column prop="address" label="土壤速效磷含量(mg/g)" width="100"></el-table-column>
				<el-table-column prop="address" label="土壤全钾含量(mg/g)" width="100"></el-table-column>
				<el-table-column prop="address" label="土壤速效钾含量(mg/g)" width="100"></el-table-column>
				<el-table-column prop="name" label="沙粒含量(%)" width="100"></el-table-column>
				<el-table-column prop="name" label="粉粒含量(%)" width="100"></el-table-column>
				<el-table-column prop="name" label="黏粒含量(%)" width="100"></el-table-column>
			</el-table>
	  </div>
	  <div v-if="!soilShow">
		<img class="img-index" src="../../assets/images/sign-in-6.jpg" style="width: 100%;height: 340px;"/>
	  </div>
	</el-card>
</template>

<script>
	export default{
		name:"SoilBankOne",
		data() {
			return {
				soilShow:true,
				tableData: [{
				  date: '123',
				  name: '123',
				  province: '123',
				  city: '123',
				  address: '123',
				},
				 {
				   date: '123',
				   name: '123',
				   province: '123',
				   city: '123',
				   address: '123',
				 },
				 {
				   date: '123',
				   name: '123',
				   province: '123',
				   city: '123',
				   address: '123',
				 },
				 {
				   date: '123',
				   name: '123',
				   province: '123',
				   city: '123',
				   address: '123',
				 },
				 {
				   date: '123',
				   name: '123',
				   province: '123',
				   city: '123',
				   address: '123',
				 },
				 {
				   date: '123',
				   name: '123',
				   province: '123',
				   city: '123',
				   address: '123',
				 },
				 {
				   date: '123',
				   name: '123',
				   province: '123',
				   city: '123',
				   address: '123',
				 },
				 {
				   date: '123',
				   name: '123',
				   province: '123',
				   city: '123',
				   address: '123',
				 },],
			}
		},
		methods:{
			showSoilTable() {
			  this.soilShow = true;
			},
			showSoilImg() {
			  this.soilShow = false;
			},
		}
	}
</script>

<style>
</style>
