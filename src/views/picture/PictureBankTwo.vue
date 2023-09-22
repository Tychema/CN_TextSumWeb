<template>
  <div>
    <el-row :gutter="20">
      <!-- 左侧表单填写 -->
      <el-col :span="8">
        <el-card style="height: 210px;">
			<div>
				<p>优势物种</p>
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
		<el-card>
			<div style="width: 100%;height: 200px;">
				<baidu-map  style="width: 100%; height: 325px" :center="center"  scroll-wheel-zoom :zoom="14">
					<bml-marker-clusterer :averageCenter="true" >
						<bm-marker v-for="point in communitys"
								 :key="point.Plotsiteid"
								 @click="handleClick(point.Plotsiteid)"
								 :position="{lng: point.Longitude, lat: point.Latitude}">
						</bm-marker>
					</bml-marker-clusterer>
				</baidu-map>
			</div>
		</el-card>
      </el-col>

      <!-- 右侧展示搜索内容 -->
 
      <el-col :span="16">
        <el-card style="height: 450px;">
          <el-carousel trigger="click" style="width: 100%;height: 340px;">
<!--                <el-carousel-item v-for="pics in pictureUrls">-->
<!--                  &lt;!&ndash; <h3 class="small">{{ item }}</h3> &ndash;&gt;-->
<!--          		&lt;!&ndash; 这里这个图片地址拼接的功能实现很重要啊 &ndash;&gt;-->
<!--          		<el-image-->
<!--          		      style="width: 100%; height: 100%"-->
<!--          		      :src="'http://192.168.31.226:8084/'+pics.Comment"-->
<!--          		      fit="contain"></el-image>-->
<!--                </el-carousel-item>-->
              </el-carousel>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
	// 注意点杠
	import {getCommunity,getPictureUrl} from "../../api/pictures.js";
	import {BmlMarkerClusterer} from 'vue-baidu-map'
	export default{
		name:"PictureBankTwo",
		components:{BmlMarkerClusterer},
		data() {
			return{
				queryInfo: {
					Community: '',
					Specieschinese: '',
					Specieslatin: '',
					},
				center:{lng: 119, lat: 32},
				communitys:[],
				pictureUrls:[],

			}
		},
		methods:{
			onSubmit(){
				console.log("优势物种")
				this.getPicturesList()
			},
			getPicturesList(){
				getCommunity(this.queryInfo).then(res=>{
					console.log(res.data)
					this.communitys = res.data
					if (this.communitys.length!=0){
						// 这里的两个参数是经纬度
						this.center.lng = this.communitys[0].Longitude
						this.center.lat = this.communitys[0].Latitude
					}
				})
			},
			handleClick(soilsampleid){
				getPictureUrl(soilsampleid).then(res=>{
					console.log(res.data)
					this.pictureUrls = res.data
				})
			},
		},
	}
</script>

<style>
</style>