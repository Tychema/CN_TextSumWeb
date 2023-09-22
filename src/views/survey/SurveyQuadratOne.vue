<template>
	<div>
		<div v-if="localShow">
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
						<div v-if="mapShow">

							<baidu-map  style="width: 100%; height: 325px" 
							:center="{lng: tableData[0].longitued, lat: tableData[0].latitude}"  
							:scroll-wheel-zoom="true" 
							:zoom="14"
							class="map">
								<bml-marker-clusterer :averageCenter="true" >
									<bm-marker v-for="sample in tableData"
														 :key="sample.sampleid"
														 @click="handleClick(sample)"
														 :position="{lng: sample.longitued, lat: sample.latitude}">
									</bm-marker>
									<!-- :position="{lng:partInfo.longitued,lat:partInfo.latitude}" -->
									<bm-info-window :show="windowShow" @close="infoWindowClose"
									:position="{lng:partInfo.longitued,lat:partInfo.latitude}"  >
										<ul>
											<li>样方编码：{{partInfo.plotsitdid}}</li>
											<li>经纬度：{{partInfo.longitued}}  {{partInfo.latitude}}</li>
											<li>海拔：{{partInfo.altitude}}</li>
											<li>群落类型：{{this.ruleForm.vegetation}}</li>
											<li>植被类型：{{partInfo.gardentype}}</li>
											<li>调查人：{{partInfo.surveyman}}</li>
											<li>调查日期：{{partInfo.surveydate}}</li>
										</ul>
										<div style="margin-top: 10px;">
											<el-button type="text" @click="datainfo()">数据详情</el-button>
											<el-button type="text" @click="dialogTableVisible=true">详情</el-button>
											<el-dialog title="" :visible.sync="dialogTableVisible" :modal-append-to-body='false'>
<!--												<el-descriptions title="详情" span="10">-->
<!--													<el-descriptions-item v-for="(item, index) in fullDate" :label="index">{{item}}</el-descriptions-item>-->
<!--												</el-descriptions>-->
											</el-dialog>
										</div>
									</bm-info-window>
								</bml-marker-clusterer>
							</baidu-map>
						</div>
						<div v-if="!mapShow">
							<el-table :data="tableData" style="width:100%;" border>
							<el-table-column prop="sampleid" label="样方号" min-width="15%"></el-table-column>
							<el-table-column  label="植被类型" min-width="25%">{{this.ruleForm.vegetation}}</el-table-column>
							<el-table-column  label="群落类型" min-width="40%">{{this.ruleForm.community}}</el-table-column>
							<el-table-column  label="操作" min-width="20%">
								<template slot-scope="scope">
									<el-button @click="handleClickTwo(scope.row.sampleid)" type="text" size="small">
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
		<div v-if="tableShow">
			<el-row :gutter="24">
				<el-col :span="24">
					<el-button type="text" @click="notShowTable"><h4>样方分布</h4></el-button>
					<el-card>
						<el-table
						    :data="tableData"
						    border
						    style="width: 100%">
						    <el-table-column
						      label="样方编码"
						      width="120">
							    {{this.ruleForm.vegetation}}
						    </el-table-column>
<!--							<el-table-column-->
<!--							  v-for="(item, index) in detailInfo"-->
<!--							  :label="index"-->
<!--							  width="120">-->
<!--								{{item}}-->
<!--							</el-table-column>-->
							<el-table-column
						      fixed="right"
						      label="操作"
						      width="100">
<!--						      <template slot-scope="scope">-->
<!--						        <el-button @click="handleClickThree()" type="text" size="small">数据调查表详情</el-button>-->
<!--						      </template>-->
						    </el-table-column>
						  </el-table>
					</el-card>
				</el-col>
			</el-row>
		</div>
		<div v-if="staticShow">
			<el-row :gutter="20">
				<el-col :span="16">
					<el-button-group>
					  <el-button type="primary" >乔木层</el-button>
					  <el-button type="success">灌木层</el-button>
					  <el-button type="info">草本层</el-button>
					  <el-button type="warning">地被层</el-button>
					  <el-button >......</el-button>
					  <el-button type="danger">凋落物层</el-button>
					</el-button-group>
				</el-col>
			</el-row>
			<el-row>
				<el-table :data="tableData" style="width:100%; margin-top: 20px;" height="400" border>
					<el-table-column prop="id" label="样方编码" min-width="7%">----</el-table-column>
					<el-table-column prop="id" label="样方号" min-width="7%">----</el-table-column>
					<el-table-column prop="id" label="样格号" min-width="7%">-----</el-table-column>
					<el-table-column prop="id" label="物种中文名" min-width="10%">-----</el-table-column>
					<el-table-column prop="id" label="物种拉丁名" min-width="11%">-----</el-table-column>
					<el-table-column prop="id" label="样丛数" min-width="8%">----</el-table-column>
					<el-table-column prop="id" label="盖度(%)" min-width="8%">----</el-table-column>
					<el-table-column prop="id" label="平均高度(cm)" min-width="10%">----</el-table-column>
					<el-table-column prop="id" label="基径(cm)" min-width="8%">----</el-table-column>
					<el-table-column prop="id" label="冠幅a(cm)" min-width="8%">----</el-table-column>
					<el-table-column prop="id" label="冠幅b(cm)" min-width="8%">----</el-table-column>
					<el-table-column prop="id" label="备注" min-width="8%">----</el-table-column>

				</el-table>
			</el-row>	
		</div>
	</div>
</template>


<script>
	// 显示不出来数据的原因是，我的tabledate中的所有属性都加了双引号
	// import MapFirst from "./MapFirst.vue"
	import {getPartDetail, getQuadratId} from "../../api/quadrat";
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
				dialogTableVisible: false,
				localShow: true,
				windowShow:false,
				mapShow:true,
				tableShow:false,
				staticShow:false,
				partInfo:{
					longitued: '',
					latitude: '',
					altitude: '',
					gardentype: "",
					plotsitdid: '',
					origin: "",
					sampleid:"",
					surveydate: "",
					surveyman:""
				},
				ruleForm:{
					county:'元谋县',
					vegetation:'森林',
					community:'大青树',
					level:1,
				},
				tableData: [{
					latitude: 26.927,
					longitued: 99.4083,
				}],
				// 这个是编码-名称对应表，将来功能做的完的时候再做相关补充
				comparePart:{
					plotsitdid:"样地编码",sampleid:"样地号",community:"群落类型",
					qmheight:"乔木层层高",
				},
				// 3-3，
				compareAll:{
					plotsitdid:"样地编码",community:"群落类型",
					qmheight:"乔木层层高(m)",qmcover:"乔木层盖度(%)",qmdominant:"乔木层优势种",
					sqmheight:"亚乔木层层高(m)",sqmcover:"亚乔木层盖度(%)",sqmdominant:"亚乔木层优势种",
					shrubheight:"灌木层层高(m)",shrubcover:"灌木层盖度(%)",shrubdominant:"灌木层优势种",
					grassheight:"杂草层/草本层/群落(草地)层高(m)",
					grasscover:"杂草层/草本层/群落(草地)盖度(%)",
					grassdominant:"杂草层/草本层/群落(草地)优势种",
					naturalheight:"群落自然高度(m)",actualheight:"群落实际高度(m)",dominantspecies:"优势种",companionspecies:"主要伴生种",
					age:"菜龄(天)",masterlayerheight:"主作层高度(cm)",masterlayercover:"主作层盖度(%)",masterlayerdominant:"主作层优势种",
					interlayersheight:"间套层高度(cm)",interlayerscover:"间套层盖度(%)",interlayersdominant:"间套层优势种",
					cultivationunit:"栽培单位",cultivationtel:"栽培单位联系方式",
					variety:"定植品种",colonizationyear:"定植年份",cuttingyear:"开割年份",decade:"几代胶园",
				},
				allOil:{
					plotsitdid:"",community:"",
				},
				allSmoke:{
					plotsitdid:"",community:"",
				},
				allProduce:{
					plotsitdid:"",community:"",
					grassheight:"",grasscover:"",grassdominant:"",
					cultivationunit:"",cultivationtel:"",
				},
				allWild:{
					plotsitdid:"",community:"",
				},
				allDry:{
					plotsitdid:"",community:"",
					qmheight:"",qmcover:"",qmdominant:"",
					sqmheight:"",sqmcover:"",sqmdominant:",",
					shrubheight:"",shrubcover:"",shrubdominant:"",
					grassheight:"",grasscover:"",grassdominant:"",
				},
				allFlower:{
					plotsitdid:"",community:"",
					qmheight:"",qmcover:"",qmdominant:"",
					sqmheight:"",sqmcover:"",sqmdominant:",",
					shrubheight:"",shrubcover:"",shrubdominant:"",
					grassheight:"",grasscover:"",grassdominant:"",
				},
				allRubber:{
					plotsitdid:"",community:"",
					qmheight:"",qmcover:"",qmdominant:"",
					sqmheight:"",sqmcover:"",sqmdominant:",",
					shrubheight:"",shrubcover:"",shrubdominant:"",
					grassheight:"",grasscover:"",grassdominant:"",
					variety:"",colonizationyear:"",cuttingyear:"",decade:"",
				},
				allCity:{
					plotsitdid:"",community:"",
					qmheight:"",qmcover:"",qmdominant:"",
					sqmheight:"",sqmcover:"",sqmdominant:",",
					shrubheight:"",shrubcover:"",shrubdominant:"",
					grassheight:"",grasscover:"",grassdominant:"",
				},
				allForest:{
					plotsitdid:"",community:"",
					qmheight:"",qmcover:"",qmdominant:"",
					sqmheight:"",sqmcover:"",sqmdominant:",",
					shrubheight:"",shrubcover:"",shrubdominant:"",
					grassheight:"",grasscover:"",grassdominant:"",
				},
				allGrass:{
					plotsitdid:"",community:"",
					grassheight:"",grasscover:"",grassdominant:"",
				},
				allFallow:{
					plotsitdid:"",community:"",
					shrubheight:"",shrubcover:"",shrubdominant:"",
					grassheight:"",grasscover:"",grassdominant:"",
				},
				allWater:{
					plotsitdid:"",community:"",
					naturalheight:"",actualheight:"",dominantspecies:"",companionspecies:"",
					
				},
				allVegetable:{
					plotsitdid:"",community:"",
					age:"",masterlayerheight:"",masterlayercover:"",masterlayerdominant:"",
					interlayersheight:"",interlayerscover:"",interlayersdominant:"",
					grassheight:"",
					grasscover:"",
					grassdominant:"",
				},
				fullDate:{
					address :"",
					altitude: "",
					area: "",
					aspect: "",
					city: "",
					comment: "",
					community: "",
					county: "",
					disturbdergree: "",
					gardentype: "",
					grasscover: "",
					grassdominant: "",
					gressheight: "",
					habitattype: "",
					latitude: "",
					longitued: "",
					origin: "",
					plotsitdid: "",
					province: "",
					qmcover: "",
					qmdominant: "",
					qmheight: "",
					recordman: "",
					sampleid: "",
					shrubcover: "",
					shrubdominant: "",
					shrubheight: "",
					slope: "",
					sloperposiition: "",
					solitype: "",
					sqmcover: "",
					sqmdominant: "",
					sqmheight: "",
					surveydate: "",
					surveyman: "",
					topographty: ""
				},
				detailInfo:{
				},
			};
		},
		//  计算属性 类似于data概念
		// longitued 经度   latitude 维度  altitude 海拔 gardentype 植被类型 origin 植被起源 plotsitdid 样方编码
		computed: {
		},
		//  监控data 中数据变化
		watch: {},
		created() {
		},
		//  方法集合
		methods: {
			onSubmit(){
				getQuadratId(this.ruleForm).then(res=>{
					this.tableData = res.data
					console.log(this.tableData)
						
				})
			},
			infoWindowClose(){
				this.windowShow = false
			},
			handleClick(sample) {
				getPartDetail(this.ruleForm.vegetation,sample.plotsitdid).then(res=>{
					this.partInfo = res.data
					// this.windowShow = true  需要执行两次的原因，我认为是因为这个方法中有.then函数
				})
		},
	  }
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
	.el-col-16 {
		/* 按钮组左移 */
	    width: 10px;
	}
	.rowColor{
		background-color: #e0dbdb;
	}
</style>
