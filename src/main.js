import Vue from 'vue'
import App from './App'
// 导入插件
import { MyRequest } from '@/utils/request'

Vue.config.productionTip = false

App.mpType = 'app'
// 注册插件
Vue.use(MyRequest)

const app = new Vue({
  ...App
})
app.$mount()
