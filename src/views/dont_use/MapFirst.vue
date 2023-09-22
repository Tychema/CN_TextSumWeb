<template>
	<div>
		<baidu-map
		class="map"
		:center="infoWindow.yangfang.point"
		:zoom="16"
		:scroll-wheel-zoom="true">
			<!-- 比例尺 -->
			<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
			<!-- 单个点 -->
			<bm-marker
				:position="infoWindow.yangfang.point"
				@click="infoWindowOpen">
				<!-- 信息窗体 -->
				<bm-info-window
				:show="infoWindow.show"
				@close="infoWindowClose"
				@open="infoWindowOpen">
					<ul>
						<li>样方编码：{{infoWindow.yangfang.yid}}</li>
						<li>经纬度：{{infoWindow.yangfang.point.lat}}  {{infoWindow.yangfang.point.lng}}</li>
						<li>海拔：{{infoWindow.yangfang.height}}</li>
						<li>植被起源：{{infoWindow.yangfang.oov}}</li>
						<li>植被类型：{{infoWindow.yangfang.oot}}</li>
					</ul>
					<div style="margin-top: 10px;">
						<el-button @click="datainfo" size="small">数据详情</el-button>
						<el-button @click="info" size="small">详情</el-button>
					</div>
				</bm-info-window>
			</bm-marker>
			<bm-marker
							:position="{lng: 115.404, lat: 39.915}"
							@click="infoWindowOpen">
				<!-- 信息窗体 -->
				<bm-info-window
								:show="infoWindow.show"
								@close="infoWindowClose"
								@open="infoWindowOpen">
					<ul>
						<li>样方编码：{{infoWindow.yangfang.yid}}</li>
						<li>经纬度：{{infoWindow.yangfang.point.lat}}  {{infoWindow.yangfang.point.lng}}</li>
						<li>海拔：{{infoWindow.yangfang.height}}</li>
						<li>植被起源：{{infoWindow.yangfang.oov}}</li>
						<li>植被类型：{{infoWindow.yangfang.oot}}</li>
					</ul>
					<div style="margin-top: 10px;">
						<el-button @click="datainfo" size="small">数据详情</el-button>
						<el-button @click="info" size="small">详情</el-button>
					</div>
				</bm-info-window>
			</bm-marker>
			<!-- 海量点 -->
			<!-- <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler">
			</bm-point-collection> -->
		</baidu-map>

		<div class="mycard">
			<el-card v-if="ifcard">
				<p style="text-align:center">详情</p>
				<el-row>
					<el-col :span="10">
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
					</el-col>
					<el-col :span="10">
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
						<p>样地编码：{{yangdibianma}}</p>
					</el-col>
				</el-row>
				<el-button @click="closeInfo" size="small">关闭</el-button>
			</el-card>
		</div>
	</div>
</template>

<script>
	export default{
		name:"MapFirst",
		data () {
		    return {
				ifcard:false,
				yangdibianma:"001",
				infoWindow: {
					show: false,
					contents: '信息窗体',
					yangfang:{
						yid:"yn001",
						point:{lng: 116.404, lat: 39.915},
						height:"2428.05",
						oov:"原生",
						oot:"森林"
				}
		      }
		    }
		},
		methods: {
		    // infoWindowClose (e) {
		    //   this.infoWindow.show = false
		    // },
		    // infoWindowOpen (e) {
		    //   this.infoWindow.show = true
		    // },
		    // info (e) {
				// this.ifcard = true
		    // },
			// datainfo(e){
			// 	console.log(e)
			// },
			closeInfo(){
				this.ifcard = false
			}
		  }
	}
</script>

<style>
	.map {
	  width: 100%;
	  height: 325px;
	}
	.mycard {
		width: 320px;
		height:300px;
		position: fixed;
		top: 10%;
		right: 40%;
		margin:0 auto;
	}
	li{
		list-style: none;
	}
</style>
