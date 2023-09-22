<template>
  <div>
	<el-card>
		<el-row :gutter="20">
		  <!-- 左侧表单填写 -->
		  <el-col :span="8">
		    <el-card style="height: 540px;">
				<div>
					<p>样方浏览：</p>
					<el-form ref="queryInfo" label-width="100px" label-position="right" size="mini">
					  <el-form-item label="植被群落类型">
							<el-input v-model="queryInfo.Community"></el-input>
						</el-form-item>
					  <el-form-item label="按土纲">
							<el-input v-model="queryInfo.Soilclass"></el-input>
					  </el-form-item>
					  <el-form-item label="按土类">
						<el-input v-model="queryInfo.Soilprogram"></el-input>
					  </el-form-item>
					  <el-form-item>
						  <el-button type="primary" @click="onSubmit">检索</el-button>
						</el-form-item>
					</el-form>
				</div>
				<div style="width: 100%;float:left">
					<baidu-map  style="width: 100%; height: 325px" :center="center"  scroll-wheel-zoom :zoom="14">
						<bml-marker-clusterer :averageCenter="true" >
							<bm-marker v-for="point in coordinate"
									 :key="point.Sampleid"
									 @click="handleClick(point.Sampleid)"
									 :position="{lng: point.Longitude, lat: point.Latitude}">
							</bm-marker>
						</bml-marker-clusterer>
					</baidu-map>
				</div>
			</el-card>
			</el-col>

		  <!-- 右侧展示搜索内容 -->
		  <el-col :span="16">
		    <el-card style="height: 540px;">
			  <div style="width: 100%;margin-top: 2px;">
				  <div>
					  <!-- <el-button type="text" v-on:click="showSoilOne" size="mini">样方号</el-button>
					  <el-button type="text" v-on:click="showSoilTwo" size="mini">土壤样品编号</el-button> -->
					  <el-button type="text" size="mini">样方号：{{sampleid}}</el-button>
					  <el-button type="text" size="mini">土壤样品编号：功能错误</el-button>
				  </div>
				  <el-card>
				    <div style="margin-bottom:5px;">
				  		<el-button v-on:click="showSoilTable" size="mini">理化属性表</el-button>
				  		<el-button v-on:click="showSoilImg" size="mini">剖面图片</el-button>
				    </div>
				    <div v-if="soilShow">
				  		<el-table :data="tableData" style="width: 100%" height="340">
				  			<el-table-column prop="soildepth" label="土壤层次编号" width="100"></el-table-column>
				  			<el-table-column prop="soilwater" label="土壤含水率(%)" width="100"></el-table-column>
				  			<el-table-column prop="gravelbulk" label="土壤容重(g/cm^3)" width="100"></el-table-column>
				  			<el-table-column prop="soilsoc" label="土壤有机碳含量(mg/g)" width="100"></el-table-column>
				  			<el-table-column prop="soiltn" label="土壤全氮含量(mg/g)" width="100"></el-table-column>
				  			<el-table-column prop="soiln" label="土壤碱解氮含量(mg/g)" width="100"></el-table-column>
				  			<el-table-column prop="soiltp" label="土壤全磷含量(mg/g)" width="100"></el-table-column>
				  			<el-table-column prop="soilp" label="土壤速效磷含量(mg/g)" width="100"></el-table-column>
				  			<el-table-column prop="soiltk" label="土壤全钾含量(mg/g)" width="100"></el-table-column>
				  			<el-table-column prop="soilk" label="土壤速效钾含量(mg/g)" width="100"></el-table-column>
				  			<el-table-column prop="sand" label="沙粒含量(%)" width="100"></el-table-column>
				  			<el-table-column prop="powder" label="粉粒含量(%)" width="100"></el-table-column>
				  			<el-table-column prop="clay" label="黏粒含量(%)" width="100"></el-table-column>
				  		</el-table>
				    </div>
				    <div v-if="!soilShow">
					<el-carousel trigger="click" style="width: 100%;height: 340px;">
					      <el-carousel-item v-for="item in soilurls" :key="item.Comment">
					        <!-- <h3 class="small">{{ item }}</h3> -->
							<!-- 这里这个图片地址拼接的功能实现很重要啊 -->
							<el-image
							      style="width: 100%; height: 100%"
							      :src="'http://192.168.31.226:8084/'+item.Comment"
							      fit="contain"></el-image>
					      </el-carousel-item>
					    </el-carousel>
				    </div>
				  </el-card>
			  </div>
		    </el-card>
		  </el-col>
		</el-row>
	</el-card>
  </div>
</template>

<script>
	import {getCoordinate,getSoilInfo,getSoilUrl} from "../../api/soil";
	import {BmlMarkerClusterer} from 'vue-baidu-map'

	export default{
		name:"SoliBank",
		components: {
			BmlMarkerClusterer
		},
		data() {
			return{
				soilShow:true,
				queryInfo: {
					Community: '',
					Soilprogram: '',
					Soilclass: ''
				},
				center:{lng: 119, lat: 32},
				coordinate:[],
				tableData: [{
				  date: '请点击具体位置',
				  name: '',
				  province: '',
				  city: '',
				  address: '',
				}],
				sampleid:"请点击具体位置",
				soilid:"请点击具体位置",
				soilurls:[]
			}
		},
		created() {
			this.getSoilList()
		},
		methods:{
			onSubmit(){
				this.getSoilList()
			},
			getSoilList(){
				getCoordinate(this.queryInfo).then(res=>{
					console.log(res.data)
					this.coordinate = res.data
					if (this.coordinate.length!=0){
						// 这里的两个参数是经纬度
						this.center.lng = this.coordinate[0].Longitude
						this.center.lat = this.coordinate[0].Latitude
					}
				})
			},
			handleClick(soilsampleid){
				this.sampleid = soilsampleid
				getSoilInfo(soilsampleid).then(res=>{
					console.log(res.data)
					this.tableData = res.data
				})
				getSoilUrl(soilsampleid).then(res=>{
					console.log(res.data)
					this.soilurls = res.data
				})
			},
			showSoilTable() {
			  this.soilShow = true;
			},
			showSoilImg() {
			  this.soilShow = false;
			},
			// showSoilOne(){
			// 	this.$router.push('/SoilBank/SoilBankOne')
			// },
			// showSoilTwo(){
			// 	this.$router.push('/SoilBank/SoilBankTwo')
			// }
		},
	}
</script>

<style>
	/* 去掉百度地图logo--begin */
	.BMap_cpyCtrl {
		display: none;
	}
	.anchorBL {
		display: none;
	}
	/* 走马灯页面style */
	/* .el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	
	  .el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #d3dce6;
	  } */
</style>
