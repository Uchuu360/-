<template>
	<div>
		<div slot="header" class="clearfix">
			<!-- <span>商品列表</span> -->
			<el-breadcrumb separator="/" style="margin: 10px 0;">
				<el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/goods/order' }">订单列表</a></el-breadcrumb-item>
			</el-breadcrumb>
			<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
		</div>

		<div>
			<el-table :data="tableData" stripe border style="width: 100%;" height="700">
			
				<el-table-column fixed prop="id" label="ID" width="40">
				</el-table-column>
				
				<el-table-column prop="order_number" label="订单号">
				</el-table-column>
				
				<el-table-column prop="eid" label="企业id">
				</el-table-column>
				
				<el-table-column prop="qid" label="用户id">
				</el-table-column>
				
				<el-table-column prop="goods_id" label="商品id">
				</el-table-column>
				
				<el-table-column prop="pay_price" label="实际支付价格">
				</el-table-column>
				
				<el-table-column label="时间">
					<el-table-column prop="payment_time" label="付款">
					</el-table-column>
					<el-table-column prop="create_time" label="创建">
					</el-table-column>
					<el-table-column prop="update_time" label="修改">
					</el-table-column>
				</el-table-column>
				
				<el-table-column prop="goods_name" label="产品名字">
				</el-table-column>
				
				<el-table-column prop="duration" label="持续时间">
				</el-table-column>
				
				<el-table-column prop="mer_code" label="商品号">
				</el-table-column>
				
				<el-table-column prop="bank_name" label="付款方式">
				</el-table-column>
				
				<el-table-column prop="bank_code" label="银行编号">
				</el-table-column>
				
				<el-table-column prop="bank_trade_code" label="银行交易码">
				</el-table-column>
				
				<el-table-column prop="gateway_trade_code" label="网关交易编号">
				</el-table-column>
				
				<el-table-column prop="inner_trade_code" label="支付网关流水号">
				</el-table-column>
				
				<el-table-column prop="need_pay_price" label="订单价格">
				</el-table-column>
				
				<el-table-column prop="operator" label="操作人">
				</el-table-column>
				
				<el-table-column prop="remark" label="备注">
				</el-table-column>
				
				<el-table-column prop="machine" label="机器数量">
				</el-table-column>
				
				<el-table-column prop="start_date" label="开始时间">
				</el-table-column>
				
				<el-table-column prop="end_date" label="结束时间">
				</el-table-column>
				
				<!-- <el-table-column prop="pay_amount" label="回调时返回的价格">
				</el-table-column> -->
				
				<el-table-column prop="status" label="订单状态">
				</el-table-column>
				
				<el-table-column prop="is_deleted" label="删除状态">
				</el-table-column>
				
				<el-table-column prop="order_type" label="订单类型">
				</el-table-column>
				
				<el-table-column prop="invoice_status" label="发票状态">
				</el-table-column>
				
				<el-table-column prop="refund_status" label="退款状态">
				</el-table-column>
				
			</el-table>

 <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					id: "1",
					order_number:"2011121400000642",
					eid:"",
					qid:"",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "2",
					order_number:"2011121400000642",
					eid:"",
					qid:"",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "3",
					order_number:"2011121400000642",
					eid:"",
					qid:"",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"8686102755",
					bank_name:"",
					bank_code:"WAP_ZFB",
					bank_trade_code:"2020111722001469601420818119",
					gateway_trade_code:"1FA163E0049632020111711405575184",
					inner_trade_code:"0050641117114055751",
					need_pay_price:"0.01",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "4",
					order_number:"20111214000006422011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "5",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "6",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "7",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "8",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "9",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "10",
					order_number:"2011121400000642",
					eid:"7F247C12-C088-477D-9334-3F63DF97D2A9",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "11",
					order_number:"2011121400000642",
					eid:"7F247C12-C088-477D-9334-3F63DF97D2A9",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "12",
					order_number:"2011121400000642",
					eid:"7F247C12-C088-477D-9334-3F63DF97D2A9",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "13",
					order_number:"2011121400000642",
					eid:"7F247C12-C088-477D-9334-3F63DF97D2A9",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "14",
					order_number:"",
					eid:"7F247C12-C088-477D-9334-3F63DF97D2A9",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "16",
					order_number:"2011121400000642",
					eid:"7F247C12-C088-477D-9334-3F63DF97D2A9",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "15",
					order_number:"2011121400000642",
					eid:"7F247C12-C088-477D-9334-3F63DF97D2A9",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "17",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"",
					refund_status:"0"
				},
				{
					id: "20",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"0",
					refund_status:"0"
				},
				{
					id: "18",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"0",
					refund_status:"0"
				},
				{
					id: "19",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"0",
					refund_status:"0"
				},
				{
					id: "21",
					order_number:"2011121400000642",
					eid:"",
					qid:"194",
					goods_id:"1",
					pay_price:"0.0",
					payment_time:"2020-11-19 10:38:39",
					create_time:"2020-11-19 10:38:38",
					update_time:"2020-11-19 10:38:39",
					goods_name:"认证版",
					duration:"1",
					mer_code:"",
					bank_name:"",
					bank_code:"",
					bank_trade_code:"",
					gateway_trade_code:"",
					inner_trade_code:"",
					need_pay_price:"39.0",
					operator:"wolfer717",
					remark:"",
					machine:"1",
					start_date:"2020-11-17",
					end_date:"2021-11-17",
					// pay_amount:"",
					status:"0",
					is_deleted:false,
					order_type:"1",
					invoice_status:"0",
					refund_status:"0"
				}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
