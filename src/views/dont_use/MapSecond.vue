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
			:position="infoWindow.yangfang.point">
			</bm-marker>
			<!-- 海量点 -->
			<!-- <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler">
			</bm-point-collection> -->
		</baidu-map>
	</div>
</template>

<script>
	export default{
		name:"MapSecond",
		data () {
		    return {
				yangdibianma:"001",
				infoWindow: {
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
		  }
	}
</script>

<style>
	.map {
	  width: 100%;
	  height: 200px;
	}
</style>