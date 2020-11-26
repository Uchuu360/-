<template>
	<div>
		<div slot="header" class="clearfix">
			<!-- <span>商品列表</span> -->
			<el-breadcrumb separator="/" style="margin: 10px 0;">
				<el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/goods/invoice' }">发票列表</a></el-breadcrumb-item>
			</el-breadcrumb>
			<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
		</div>

		<div>
			<el-table :data="tableData" stripe border style="width: 100%;" height="700">
				
				<el-table-column fixed prop="id" label="ID">
				</el-table-column>
				
				<el-table-column  prop="invoice_price" label="发票金额">
				</el-table-column>
				
				<el-table-column  prop="order_number" label="订单号">
				</el-table-column>
				
				<el-table-column prop="invoice_type" label="抬头类型">
				</el-table-column>
				
				<el-table-column prop="invoice_company_name" label="企业名称">
				</el-table-column>
				
				<el-table-column prop="invoice_company_tax_id" label="企业税号">
				</el-table-column>
				
				<el-table-column prop="invoice_company_deposit_bank" label="开户银行名称">
				</el-table-column>
				
				<el-table-column prop="invoice_company_deposit_bank_number" label="企业开户行账号">
				</el-table-column>
				
				<el-table-column prop="invoice_company_address" label="企业地址">
				</el-table-column>
				
				<el-table-column prop="invoice_company_phone" label="企业电话">
				</el-table-column>
				
				<el-table-column prop="invoice_personal_title" label="发票抬头">
				</el-table-column>
				
				<el-table-column prop="invoice_contacts" label="收件人">
				</el-table-column>
				
				<el-table-column prop="invoice_contacts_address" label="收件人地址">
				</el-table-column>
				
				<el-table-column prop="invoice_contacts_phone" label="收件人联系方式">
				</el-table-column>
				
				<el-table-column prop="create_time" label="创建时间">
				</el-table-column>
				
				<el-table-column prop="update_time" label="更新时间">
				</el-table-column>
				
				
			</el-table>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					id:"1",
					order_number:"2011172100000649",
					invoice_price:"39",
					invoice_type:"1",
					invoice_company_name:"aaa",
					invoice_company_tax_id:"aaa",
					invoice_company_deposit_bank:"beijing",
					invoice_company_deposit_bank_number:"aaa",
					invoice_company_address:"beijing",
					invoice_company_phone:"13888888888",
					invoice_personal_title:"asdf",
					invoice_contacts:"asdf",
					invoice_contacts_address:"asdf",
					invoice_contacts_phone:"13888888888",
					create_time:"2020-11-18 17:48:33",
					update_time:"2020-11-18 17:48:33"
				},{
					id:"1",
					order_number:"2011172100000649",
					invoice_price:"39",
					invoice_type:"1",
					invoice_company_name:"aaa",
					invoice_company_tax_id:"aaa",
					invoice_company_deposit_bank:"beijing",
					invoice_company_deposit_bank_number:"aaa",
					invoice_company_address:"beijing",
					invoice_company_phone:"13888888888",
					invoice_personal_title:"asdf",
					invoice_contacts:"asdf",
					invoice_contacts_address:"asdf",
					invoice_contacts_phone:"13888888888",
					create_time:"2020-11-18 17:48:33",
					update_time:"2020-11-18 17:48:33"
				},{
					id:"1",
					order_number:"2011172100000649",
					invoice_price:"39",
					invoice_type:"1",
					invoice_company_name:"aaa",
					invoice_company_tax_id:"aaa",
					invoice_company_deposit_bank:"beijing",
					invoice_company_deposit_bank_number:"aaa",
					invoice_company_address:"beijing",
					invoice_company_phone:"13888888888",
					invoice_personal_title:"asdf",
					invoice_contacts:"asdf",
					invoice_contacts_address:"asdf",
					invoice_contacts_phone:"13888888888",
					create_time:"2020-11-18 17:48:33",
					update_time:"2020-11-18 17:48:33"
				},{
					id:"1",
					order_number:"2011172100000649",
					invoice_price:"39",
					invoice_type:"1",
					invoice_company_name:"aaa",
					invoice_company_tax_id:"aaa",
					invoice_company_deposit_bank:"beijing",
					invoice_company_deposit_bank_number:"aaa",
					invoice_company_address:"beijing",
					invoice_company_phone:"13888888888",
					invoice_personal_title:"asdf",
					invoice_contacts:"asdf",
					invoice_contacts_address:"asdf",
					invoice_contacts_phone:"13888888888",
					create_time:"2020-11-18 17:48:33",
					update_time:"2020-11-18 17:48:33"
				},{
					id:"1",
					order_number:"2011172100000649",
					invoice_price:"39",
					invoice_type:"1",
					invoice_company_name:"aaa",
					invoice_company_tax_id:"aaa",
					invoice_company_deposit_bank:"beijing",
					invoice_company_deposit_bank_number:"aaa",
					invoice_company_address:"beijing",
					invoice_company_phone:"13888888888",
					invoice_personal_title:"asdf",
					invoice_contacts:"asdf",
					invoice_contacts_address:"asdf",
					invoice_contacts_phone:"13888888888",
					create_time:"2020-11-18 17:48:33",
					update_time:"2020-11-18 17:48:33"
				},]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
