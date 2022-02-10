/*
 * @Author: Lqf
 * @Date: 2021-09-24 14:17:19
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 10:40:19
 * @Description: 我添加了修改
 */
import Plane from './AppPlane.vue'

import { createApp } from './runtime-canvas'

import { getRootContainer } from './game'

console.warn = () => { }

createApp(Plane).mount(getRootContainer())