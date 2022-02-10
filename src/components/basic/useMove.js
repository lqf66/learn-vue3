/*
 * @Author: Lqf
 * @Date: 2021-09-24 16:23:03
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-24 16:26:26
 * @Description: 我添加了修改
 */

import { reactive, onMounted, onUnmounted } from 'vue'
export function useMove () {
  const position = reactive({
    x: 0,
    y: 0
  })

  const handleMove = (e) => {
    position.x = e.pageX
    position.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMove)
  })

  return position
}