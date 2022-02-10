<!--
 * @Author: Lqf
 * @Date: 2021-09-24 16:20:17
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-24 16:31:00
 * @Description: 我添加了修改
-->
<template>
  <div>{{ x }}</div>
  <div>{{ y }}</div>
</template>

<script>
import { useMove } from '../basic/useMove'
import { toRefs } from 'vue'
export default {
  setup () {

    const position = useMove()
    console.log('position: ', position)

    // 响应式处理后使用，不然为原始值
    // const { x, y } = toRefs(position)
    // console.log('x, y: ', x, y)

    return {
      ...toRefs(position)
    }
  }
}
</script>

<style lang="less" scoped>
</style>