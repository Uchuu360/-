<template>
	<div>
		<el-menu 
			  router
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @select="handleOpen">
		      <el-submenu index="1">
		        <template slot="title">
		          <span>商品管理</span>
		        </template>
		        <el-menu-item-group>
		          <!-- <template slot="title"></template> -->
		          <el-menu-item index="/goods/list">商品列表</el-menu-item>
		          <el-menu-item index="/goods/order">订单列表</el-menu-item>
				  <el-menu-item index="/goods/invoice">发票列表</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-menu-item index="/about">
		        <span slot="title">申请审批</span>
		      </el-menu-item>
		    </el-menu>
	</div>
</template>

<script>
	 export default {
		methods: {
		   handleOpen(index){
			   console.log(index)
		   }
		}
    }
</script>

<style>
</style>
