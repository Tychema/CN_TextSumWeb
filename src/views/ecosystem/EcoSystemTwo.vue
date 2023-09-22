<template>
	<div>
	  <!-- 样方浏览的数据下载页面 -->
	  <el-table
	      :data="tableData"
	      style="width:100%"
			height="400"
			border>
	    <el-table-column
	        prop="name"
	        label="名称"
	        min-width="25%">
	    </el-table-column>
	    <el-table-column
	        prop="summary"
	        label="摘要"
	        min-width="31%">
	    </el-table-column>
	    <el-table-column
	        prop="start"
	        label="开始时间"
	        min-width="5%">
	    </el-table-column>
	    <el-table-column
	        prop="end"
	        label="结束时间"
	        min-width="5%">
	    </el-table-column>
	    <el-table-column
	        prop="share"
	        label="共享方式"
	        min-width="10%">
	    </el-table-column>
	    <el-table-column
	        prop="person"
	        label="提供者"
	        min-width="10%">
	    </el-table-column>
	    <el-table-column
	        label="操作"
	  	  min-width="14%">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">元数据</el-button>
	        <el-button type="text" style="padding-right: 5px;" size="small">下载</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	</div>
</template>

<script>
	export default{
	name:"EcoSystemTwo",
	data () {
		return {
		  tableData: [
			  {
			  	name: '2012-2016土壤元素含量数据集',
			  	summary: '---',
			  	start: '2023',
			  	end: '2024',
			  	share: '完全共享',
			  	person:'张山',
			  	order: '16'
			  },
			  {
			  	name: '2012-2016土壤元素含量数据集',
			  	summary: '---',
			  	start: '2023',
			  	end: '2024',
			  	share: '完全共享',
			  	person:'张山',
			  	order: '16'
			  },
			  {
			  	name: '2012-2016土壤元素含量数据集',
			  	summary: '---',
			  	start: '2023',
			  	end: '2024',
			  	share: '完全共享',
			  	person:'张山',
			  	order: '16'
			  },
			  {
			  	name: '2012-2016土壤元素含量数据集',
			  	summary: '---',
			  	start: '2023',
			  	end: '2024',
			  	share: '完全共享',
			  	person:'张山',
			  	order: '16'
			  },
			  {
			  	name: '2012-2016土壤元素含量数据集',
			  	summary: '---',
			  	start: '2023',
			  	end: '2024',
			  	share: '完全共享',
			  	person:'张山',
			  	order: '16'
			  },
			  {
			  	name: '2012-2016土壤元素含量数据集',
			  	summary: '---',
			  	start: '2023',
			  	end: '2024',
			  	share: '完全共享',
			  	person:'张山',
			  	order: '16'
			  },
			  {
			  	name: '2012-2016土壤元素含量数据集',
			  	summary: '---',
			  	start: '2023',
			  	end: '2024',
			  	share: '完全共享',
			  	person:'张山',
			  	order: '16'
			  },
			  
		  ],
		}
    },
	methods: {
	  handleClick(row) {
	    console.log(row);
	  },
	}
}
</script>

<style>
</style>