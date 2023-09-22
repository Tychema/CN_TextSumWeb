<template>
	  <el-card>
		  <div v-if="specimen.show">
		  	    <el-row :gutter="20">
		  	      <!-- 左侧表单填写 -->
		  	      <el-col :span="8">
		  	        <el-card style="height: 440px;">
						<div>
							<p>标本库</p>
							<el-form ref="queryInfo" label-width="100px" label-position="right" size="mini">
							  <el-form-item label="物种中文名:">
								<el-input v-model="queryInfo.Specieschinese"></el-input>
							  </el-form-item>
							  <el-form-item label="物种拉丁名:">
								<el-input v-model="queryInfo.Specieslatin"></el-input>
							  </el-form-item>
							  <el-form-item>
								  <el-button type="primary" @click="onSubmit">检索</el-button>
								</el-form-item>
							</el-form>
						</div>
		  	  		</el-card>
		  	      </el-col>
		  	  
		  	      <!-- 右侧展示搜索内容 -->
		  	   
		  	      <el-col :span="16">
		  	        <el-card style="height: 440px;">
		  	  		  <div style="width: 100%;height: 400px;">
		  	  			<el-table 
		  	  			:data="tableData" 
		  	  			style="width:100%" 
		  	  			height="400" 
		  	  			:row-style="{height:'80px'}" :cell-style="{padding: '0'}">
		  	  			  <el-table-column fixed prop="date" label="图样" width="100">
		  	  				  <template slot-scope="scope">
								<el-image
								      style="width: 100%; height: 60px"
								      :src="'http://192.168.31.226:8084/'+scope.row.Url"
								      fit="contain"></el-image>
									  <!-- <image :src="scope.row.image" width="100" height="100"/> -->
		  	  				  </template>
		  	  			  </el-table-column>
		  	  			  <el-table-column prop="Specieschinese" label="中文名称" width="100" >
		  	  			  </el-table-column>
		  	  			  <el-table-column  prop="Specieslatin" label="拉丁名称" width="140">
		  	  			  </el-table-column>
		  	  			  <el-table-column  prop="Longitude" label="经度" width="80">
		  	  			  </el-table-column>
						  <el-table-column  prop="Latitude" label="纬度" width="80">
						  </el-table-column>
		  	  			  <el-table-column  prop="Altitude" label="海拔" width="100">
		  	  			  </el-table-column>
		  	  			  <el-table-column  prop="Address" label="采集地点" width="100">
		  	  			  </el-table-column>
		  	  			  <el-table-column  label="操作" width="50" fixed="right">
		  	  			    <template slot-scope="scope">
		  	  			      <el-button @click="handleClick(scope.row.id)" type="text" size="small">
		  	  						详情
		  	  				   </el-button>
		  	  			    </template>
		  	  			  </el-table-column>
		  	  			</el-table>
		  	  		  </div>
		  	        </el-card>
		  	      </el-col>
		  	    </el-row>
		  	  </div>
		  	  <div v-if="!specimen.show">
		  	    <el-row :gutter="20">
		  	      <!-- 左侧表单填写 -->
		  	      <el-col :span="8">
		  	        <el-card>
		  				<div style="margin-bottom: 10px;">
		  					<el-image
		  					      style="width: 100%; height: 250px"
		  					      :src="'http://192.168.31.226:8084/'+detailInfo.url"
		  					      fit="contain">
							</el-image>
		  	  			</div>
		  	  		</el-card>
		  	  		<el-card>
		  	  			<div style="width: 100%;height: 200px;">
		  	  				<baidu-map  style="width: 100%; height: 325px" :center="center"  scroll-wheel-zoom :zoom="14">
		  	  						<bm-marker :key="detailInfo.plotsiteid"
		  	  								 :position="{lng: detailInfo.longitude, lat: detailInfo.latitude}">
		  	  						</bm-marker>
		  	  				</baidu-map>
		  	  			</div>
		  	  		</el-card>
		  	      </el-col>
		  	  
		  	      <!-- 右侧展示搜索内容 -->
		  	   
		  	      <el-col :span="16">
		  	        <el-card style="height: 545px;">
		  			  <p>有关{{detailInfo.specieschinese}}的介绍</p>
		  	  		  <div style="width: 100%;height: 500px;">
		  				  <el-descriptions class="margin-top" :title="detailInfo.traits" :column="3" size="small" border>
		  					  <template slot="extra">
		  					        <el-button type="primary" size="small" @click="showback">返回</el-button>
		  					      </template>
							  <el-descriptions-item>
							    <template slot="label">
							      样方编码
							    </template>
							    {{detailInfo.plotsiteid}}
							  </el-descriptions-item>
		  				      <el-descriptions-item>
		  				        <template slot="label">
		  				          物种中文名称
		  				        </template>
		  				        {{detailInfo.specieschinese}}
		  				      </el-descriptions-item>
		  				      <el-descriptions-item>
		  				        <template slot="label">
		  				          物种拉丁名称
		  				        </template>
		  				        {{detailInfo.specieslatin}}
		  				      </el-descriptions-item>
		  				      <el-descriptions-item>
		  				        <template slot="label">
		  				          种下等级
		  				        </template>
		  				        {{detailInfo.downgrade}}
		  				      </el-descriptions-item>
		  					  <el-descriptions-item>
		  					    <template slot="label">
		  					      种下名称
		  					    </template>
		  					    {{detailInfo.downgradename}}
		  					  </el-descriptions-item>
		  					  <el-descriptions-item>
		  					    <template slot="label">
		  					      属拉丁名
		  					    </template>
		  					    {{detailInfo.shulatin}}
		  					  </el-descriptions-item>
		  					  <el-descriptions-item>
		  					    <template slot="label">
		  					      纲拉丁名
		  					    </template>
		  					    {{detailInfo.ganglatin}}
		  					  </el-descriptions-item>
		  					  <el-descriptions-item>
		  					    <template slot="label">
		  					      目拉丁名
		  					    </template>
		  					    {{detailInfo.mulatin}}
		  					  </el-descriptions-item>
		  					  <el-descriptions-item>
		  					    <template slot="label">
		  					      科拉丁名
		  					    </template>
		  					    {{detailInfo.kelatin}}
		  					  </el-descriptions-item>
		  					  <el-descriptions-item>
		  					    <template slot="label">
		  					      采集地点
		  					    </template>
		  					    {{detailInfo.address}}
		  					  </el-descriptions-item>
		  					  <el-descriptions-item>
		  					    <template slot="label">
		  					      经纬度
		  					    </template>
		  					    {{detailInfo.longitude}}--{{detailInfo.latitude}}
		  					  </el-descriptions-item>
							  <el-descriptions-item>
							    <template slot="label">
							      鉴定人
							    </template>
							    {{detailInfo.identifypeople}}
							  </el-descriptions-item>
							  <el-descriptions-item>
							    <template slot="label">
							      保存单位名称
							    </template>
							    {{detailInfo.saveplacename}}
							  </el-descriptions-item>
							  <el-descriptions-item>
							    <template slot="label">
							      联系人
							    </template>
							    {{detailInfo.linkman}}
							  </el-descriptions-item>  					  
		  				    </el-descriptions>
		  	  		  </div>
		  	        </el-card>
		  	      </el-col>
		  	    </el-row>
		  	  </div>
	  </el-card>
</template>

<script>
	// 注意点杠
	import {getSpecimens,getSpecimensDetail} from "../../api/specimen.js";
	import {BmlMarkerClusterer} from 'vue-baidu-map'
	export default{
    // eslint-disable-next-line vue/multi-word-component-names
		name:"Specimen",
    // eslint-disable-next-line vue/no-unused-components
		components:{BmlMarkerClusterer},
		data() {
			return{
				specimen:{
					show:true
				},
				tableData: [
					{
						Specieschinese: "",
						Address: "",
						Latitude: '',
						id: '',
						Specieslatin: "",
						Longitude: '',
						Altitude: '',
						Url:''
					}
				],
				detailInfo:{
					// access: "2.现场获取",
					// address: "河西乡",
					// altitude: 2679,
					// city: "",
					// collectiondate: "1970-01-01 12:21:01",
					// collectionid: "96",
					// collectionpeople: "云南大学唐勤植被组",
					// country: "中国",
					// county: "兰坪县",
					// downgrade: "",
					// downgradename: "",
					// downgradepeople: "",
					// ganglatin: "Magnoliopsida",
					// habit: "常绿灌木",
					// habitat: "潮湿",
					// host: "无",
					// id: '',
					// identifydate: "2023-05-04 16:00:00",
					// identifypeople: "李帅峰",
					// kelatin: "Ericaceae",
					// latitude: '',
					// linkman: "唐勤",
					// linkmanaddress: "云南省昆明市",
					// linkmanemail: "cindytang@ynu.edu.cn",
					// linkmanpostal: "650500",
					// linkmantel: "18313830704",
					// linkmanworkplace: "云南大学",
					// longitude: '',
					// modle: "否",
					// mulatin: "Ericales",
					// picname: "大白杜鹃.jpg",
					// plantae: "Plantae",
					// plotsiteid: "yndxtqTSDU-YN-YD-P3",
					// province: "云南省",
					// realstate: "1.完整",
					// resourceid: "",
					// sampleid: "TSDU-YN-YD-P3",
					// saveplaceid: "",
					// saveplacename: "云南大学",
					// savetype: "腊叶标本",
					// sharestate: "完全开放共享",
					// shulatin: "Rhododendron",
					// specieschinese: "大白杜鹃",
					// specieslatin: "Rhododendron decorum",
					// speciespeople: "",
					// specimenid: "96",
					// specimenstate: "有叶有茎",
					// traits: "叶厚革质，总状伞形花序顶生， 蒴果长圆柱形，微弯曲。",
					// url: "static/img/specimenimage/yndxtq/大白杜鹃.jpg"
					},
				queryInfo: {
					Specieschinese: '榨',
					Specieslatin: '',
					},
				center:{lng: 119, lat: 32},

			}
		},
		methods:{
			onSubmit(){
				getSpecimens(this.queryInfo).then(res=>{
					console.log(res.data)
					this.tableData = res.data
				})
			},
			handleClick(row){
				this.specimen.show = false;
				// 这个功能到这里就结束了，写对了，center需要放在里面同步更新，放在外边的时候就异步更新，提前更新了
				getSpecimensDetail(row).then(res=>{
					this.detailInfo = res.data
					this.center.lng = this.detailInfo.longitude
					this.center.lat = this.detailInfo.latitude
				})
				
				
			},
			showback(){
				this.specimen.show = true;
			}
		},
	}
</script>

<style>
</style>