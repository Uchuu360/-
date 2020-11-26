let routes = [
		{
			path: '/',
			name: 'layout',
			// redirect:{name:'index'},
			component: 'layout/layout',
			children:[
				{
					component:'index/index'
				},
				{
					component:'goods/list'
				},{
					component:'goods/order'
				},{
					component:'goods/invoice'
				}
			]
		},
		{
			component:'login/index'
		},
		// {//如果上面全部不匹配就redirect到index
		// 	path:'*',
		// 	redirect:{name:'index'},
		// }
	]
	
const getRoutes =()=>{
	createRoutes(routes)
	return routes
}

const createRoutes =(arr)=>{
	//每个路由要填写相应的路径和path，name
	for (let i in arr){
		if (!arr[i].component) return
			let val = getValue(arr[i].component)
			arr[i].name = arr[i].name || val.replace(/\//g,'_')
			arr[i].path = arr[i].path || `/${val}`
			let componentFun = import(`../../views/${arr[i].component}.vue`)
			arr[i].component = ()=>componentFun
			if (arr[i].children && arr[i].children.length>0){
				createRoutes(arr[i].children)
			}
	}
}

const getValue = (str)=>{
	let index =str.lastIndexOf('/')
	let val = str.substring(index+1,str.length)
	if (val==='index'){
		return str.substring(index,-1)
	}
	return str
}

	
export default getRoutes()