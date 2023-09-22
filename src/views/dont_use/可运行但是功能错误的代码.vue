<template>
	<div>
		<div>
			<el-row :gutter="20">
				<el-col :span="10">
				<el-card>
					<h3>样方浏览</h3>
					<el-form ref="form" label-width="100px" label-position="right">
						<el-form-item label="按县区名称:">
							<el-input v-model="ruleForm.county"></el-input>
						</el-form-item>
						<el-form-item label="按植被类型:">
							<el-input v-model="ruleForm.vegetation"></el-input>
						</el-form-item>
						<el-form-item label="按群落类型:">
							<el-input v-model="ruleForm.community"></el-input>
						</el-form-item>
						<el-form-item label="按样方等级:">
							<el-input v-model="ruleForm.level"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">检索</el-button>
						</el-form-item>
					</el-form>
				</el-card>
				</el-col>
				<el-col :span="14">
				<el-card style="height: 100%;">
					<div style="margin-bottom: 10px;">
						<el-button v-on:click="showMap">地图概览</el-button>
						<el-button v-on:click="showYF">样方数据</el-button>
					</div>
					<!-- 以下是地图展示 具体的大小，要按旁边的样方浏览的大小决定-->
					<div v-if="localShow">
<!--						<MapFirst ></MapFirst>-->
						<baidu-map  style="width: 100%; height: 325px" 
						:center="{lng: tableData[0].longitued, lat: tableData[0].latitude}"  
						:scroll-wheel-zoom="true" 
						:zoom="14"
						class="map">
							<bml-marker-clusterer :averageCenter="true" >
								<bm-marker v-for="sample in tableData"
													 :key="sample.sampleid"
													 @mouseover="testMouseOver(sample)"
													 @mouseout="testMouseleave()"
													 @click="handleClick(sample.sampleid)"
													 :position="{lng: sample.longitued, lat: sample.latitude}">
								</bm-marker>
								<bm-info-window v-show="show" :position="{lng:curLocal.lng,lat:curLocal.lat}" >
									<ul>
										<li>样方编码：{{curLocal.plotsitdid}}</li>
										<li>经纬度：{{curLocal.lat}}  {{curLocal.lng}}</li>
										<li>海拔：{{curLocal.altitude}}</li>
										<li>植被起源：{{curLocal.origin}}</li>
										<li>植被类型：{{curLocal.gardentype}}</li>
									</ul>
								</bm-info-window>
							</bml-marker-clusterer>
						</baidu-map>
					</div>
					<div v-if="!localShow">
						<el-table :data="tableData" style="width:100%;" border>
						<el-table-column prop="sampleid" label="样方号" min-width="15%"></el-table-column>
						<el-table-column  label="植被类型" min-width="25%">{{this.ruleForm.vegetation}}</el-table-column>
						<el-table-column  label="群落类型" min-width="40%">{{this.ruleForm.community}}</el-table-column>
						<el-table-column  label="操作" min-width="20%">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row.sampleid)" type="text" size="small">
									样方数据详情
								</el-button>
							</template>
						</el-table-column>
						</el-table>
					</div>
				</el-card>
				</el-col>
			</el-row>
		</div>

		<el-dialog titile="详情" :visible.sync="dialogVisible" width="50%">
			<el-row v-for="(item,index) in info"
							:key="index"
							style="font-size: 20px;margin: 10px"
							:class="`${index%2==0 && 'rowColor'}`">
				<el-col :span="4">{{item[0]}}</el-col>
				<el-col :span="8">{{ charToVar(item[1]) }}</el-col>
				<el-col :span="4">{{item[2]}}</el-col>
				<el-col :span="8">{{ charToVar(item[3]) }}</el-col>
			</el-row>
		</el-dialog>
	</div>
</template>


<script>
	// import MapFirst from "./MapFirst.vue"
	import {getDetailById, getQuadratId} from "../../api/quadrat";
	import {BmlMarkerClusterer} from 'vue-baidu-map'

	export default {
		// import 引入的组件需要注入到对象中才能使用
		name:"SurveyQuadratOne",
		components: {
			// MapFirst,
			BmlMarkerClusterer
		},
		props: {},
		// 这里用于存放数据
		data() {
			return {
				dialogVisible: false,
				localShow: true,
				show:false,
				temp:{
					lng: 103,
					lat: 26,
					altitude: 1258,
					gardentype: "公园绿地",
					plotsitdid: '东川1-1-2',
					origin: "人工",
				},
				ruleForm:{
					county:'元谋县',
					vegetation:'森林',
					community:'大青树',
					level:1
				},
				tableData: [{
					longitued: 103,
					latitude: 26
				}],
				compare:[
					['样地编码','this.detailInfo.plotsitdid','样地号','this.detailInfo.sampleid'],
					['样地名称','this.detailInfo.address','省区名称','this.detailInfo.province'],
					['地点','this.detailInfo.address','纬度(°)','this.detailInfo.latitude'],
					['经度(°)','this.detailInfo.longitued','海拔','this.detailInfo.address'],
					['地形','this.detailInfo.topographty','坡度','this.detailInfo.slope'],
					['坡向','this.detailInfo.aspect','坡位','this.detailInfo.slopeposition'],
					['植被起源','this.detailInfo.origin','演替阶段','this.detailInfo.disturbdegree'],
					['干扰','this.detailInfo.disturbdergree','坡度','this.detailInfo.slope'],
					['调查人','this.detailInfo.surveyman','地形','this.detailInfo.topographty'],
				],
				detailInfo:{
					address: '',
					altitude: '',
					area: '',
					aspect: '',
					city: '',
					comment: '',
					community: '',
					county: '',
					disturbdergree: '',
					grassdominant: '',
					grasscover: '',
					gressheight: '',
					habitattype: '',
					latitude: '',
					longitued: '',
					origin: '',
					plotsitdid: '',
					province: '',
					qmcover: '',
					qmdominant: '',
					qmheight: '',
					recordman: '',
					sampleid: '',
					slope: '',
					sloperposiition: '',
					solitype: '',
					sqmcover: '',
					sqmdominant: '',
					sqmheight: '',
					surveydate: '',
					surveyman: '',
					topographty: '',
				},
			};
		},
		//  计算属性 类似于data概念
		// longitued 经度   latitude 维度  altitude 海拔 gardentype 植被类型 origin 植被起源 plotsitdid 样方编码
		computed: {
			curLocal(){
				return {
					lng: this.temp.longitued,
					lat: this.temp.latitude,
					altitude: this.temp.altitude,
					gardentype: this.temp.gardentype,
					plotsitdid: this.temp.plotsitdid,
					origin: this.temp.origin,
				};
			},
		},
		//  监控data 中数据变化
		watch: {},
		created() {
			// // 移除水印的代码
			// const map = this.$baiduMap.getMap();
			// map.watermark = '';  // 去除水印信息
		},
		//  方法集合
		methods: {
			onSubmit(){
				getQuadratId(this.ruleForm).then(res=>{
					this.tableData = res.data
						
				})
			},
			charToVar(x){
				return eval(x)
			},
			testMouseOver(sample){
				
				this.temp = sample
				this.show = true
			},
			testMouseleave(){
				this.show = false
			},
			handleClick(sampleid) {
				getDetailById(this.ruleForm.vegetation,sampleid).then(res=>{
					this.detailInfo = res.data
				})
				this.dialogVisible = true
			},
			showYF() {
				this.localShow = false;
			},
			showMap() {
				this.localShow = true;
			},
		},
	};
</script>

<style>
	/* 去掉百度地图logo--begin */
	.BMap_cpyCtrl {
		display: none;
	}
	.anchorBL {
		display: none;
	}

	.rowColor{
		background-color: #e0dbdb;
	}
</style>
