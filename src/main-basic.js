/*
 * @Author: Lqf
 * @Date: 2021-09-24 14:17:19
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-24 17:37:46
 * @Description: 基础操作
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element3 from 'element3'
import "element3/lib/theme-chalk/index.css"

createApp(App)
  .use(element3)
  .use(store)
  .use(router)
  .mount('#app')
