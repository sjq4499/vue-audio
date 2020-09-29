/*
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2020-09-29 15:46:12
 * @LastEditors: sjq
 * @LastEditTime: 2020-09-29 17:32:15
 */
import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import "./assets/iconfont.css"

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
