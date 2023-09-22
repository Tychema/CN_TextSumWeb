<template>
	<div>
<!--		<el-card>-->
<!--&lt;!&ndash;			<h4 style="float: left; height: 10px" >项目介绍</h4>&ndash;&gt;-->
<!--&lt;!&ndash;			<el-row>&ndash;&gt;-->
<!--&lt;!&ndash;				<el-col style="text-align: left" :span="24">&ndash;&gt;-->
<!--&lt;!&ndash;					<p v-html="introduction"></p>&ndash;&gt;-->
<!--&lt;!&ndash;				</el-col>&ndash;&gt;-->
<!--&lt;!&ndash;			</el-row>&ndash;&gt;-->

<!--		</el-card>-->
	</div>
</template>

<script>
	import {getProIntroduction} from '../../api/project';

	export default{
		name:"ProIntroduction",
		data() {
			return {
				introduction:'',
			}
		},
		created() {
			this.getIntroduction()
		},
		methods:{
			getIntroduction(){
				getProIntroduction().then(res=>{
					this.introduction = res.data.projectintro
				})
			}
		}
	}
</script>

<style>
</style>
