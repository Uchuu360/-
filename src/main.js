import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router.js'
import './assets/css/index.css'
import store from './store.js'


Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
