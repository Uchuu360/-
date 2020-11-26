<template>
	<div>
		<div slot="header" class="clearfix">
			<!-- <span>商品列表</span> -->
			<el-breadcrumb separator="/" style="margin: 10px 0;">
				<el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/goods/list' }">商品列表</a></el-breadcrumb-item>
			</el-breadcrumb>
			<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
		</div>

		<div>
			<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
			<el-table :data="tableData" stripe border style="width: 100%;" height="700">

				<el-table-column fixed prop="id" label="ID" width="40">
				</el-table-column>

				<el-table-column fixed prop="name" label="商品名称" width="150">
				</el-table-column>

				<el-table-column prop="description" label="商品详情">
				</el-table-column>

				<el-table-column prop="status" label="状态" width="50">
				</el-table-column>


					<el-table-column prop="origin_price" label="原价">
					</el-table-column>

					<el-table-column label="售价">
						<el-table-column prop="sale_price_for_day" label="天">
						</el-table-column>
						<el-table-column prop="sale_price" label="年">
						</el-table-column>
					</el-table-column>

					<el-table-column label="折扣">
						<el-table-column prop="one_year_discount" label="一年">
						</el-table-column>
						<el-table-column prop="three_year_discount" label="三年">
						</el-table-column>
					</el-table-column>


					<el-table-column prop="re_sale_price" label="续费价">
					</el-table-column>


					<el-table-column label="续费折扣">
						<el-table-column prop="re_one_year_discount" label="一年">
						</el-table-column>
						<el-table-column prop="re_three_year_discount" label="三年">
						</el-table-column>
					</el-table-column>

					<el-table-column prop="price_description" label="价格详情" width="400">
					</el-table-column>

				<el-table-column label="时间"> 
					<el-table-column
					  prop="create_time"
					  label="创建">
					</el-table-column>
					
					<el-table-column
					  prop="update_time"
					  label="更新">
					</el-table-column>
			     </el-table-column>
			    

				<el-table-column>
					<template>
						<el-button size="mini" type="warning" icon="el-icon-delete" @click="deleteItem"></el-button>
					</template>
				</el-table-column>

			</el-table>
			 <el-pagination
			    layout="prev, pager, next"
			    :total="50">
			  </el-pagination>

		</div>
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%"
		  :before-close="handleClose">
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					id:1,
					name: "认证版",
					description:"认证版",
					origin_price:"39.0",
					create_time:"2020-11-03 11:34:29",
					update_time:"2020-11-03 11:34:29",
					sale_price_for_day:"0.107",
					sale_price:"39.0",
					re_sale_price:"60.0",
					price_description:"从授权初始日期起累计365天为一个“授权年”。完整付费使用一个“授权年”的设备，可以在下一个“授权年”享受5折续费优惠。",
					one_year_discount:"1",
					three_year_discount:"0.8",
					re_three_year_discount:"0.6",
					re_one_year_discount:"0.7",
					status:"可用"
				},],
				 dialogVisible: false,
				 PageSize:10,
				 currentPage:1,
			}
		},
		methods: {
			deleteItem() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			  handleClose(done) {
			        this.$confirm('确认关闭？')
			          .then(_ => {
			            done();
			          })
			          .catch(_ => {});
			      }
		}
	}
</script>

<style>
</style>
