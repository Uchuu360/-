<template>
	<div>
		<el-container class="whole_box">
		  <el-header class="header">
			  <dnsHead></dnsHead>
		  </el-header>
		  <el-main>
			  <el-container class="main_box">
				  <el-aside class="aside_box">
					  <menulist></menulist>
				  </el-aside>
				  <el-main class="router_box">
					  <router-view></router-view>
				  </el-main>
			  </el-container>
		  </el-main>
		</el-container>
	</div>
</template>

<script>
	import Menu from './Menu'
	import Header from './Header'
	export default{
		components:{
			menulist : Menu,
			dnsHead : Header
		}
	}
</script>

<style>
</style>
