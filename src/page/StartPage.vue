<!--
 * @Author: Lqf
 * @Date: 2021-09-26 09:45:36
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 10:02:31
 * @Description: 我添加了修改
-->
<template>
  <container>
    <sprite :texture="startPage"></sprite>
    <sprite
      :texture="startBtn"
      x="228"
      y="510"
      :interactive="true"
      @click="startGame"
    ></sprite>
  </container>
</template>

<script>
import startPage from '../assets/start_page.jpg'
import startBtn from '../assets/startBtn.png'
export default {
  setup (props, { emit }) {
    const startGame = () => {
      emit('change-page', 'GamePage')
    }

    return {
      startPage,
      startBtn,
      startGame
    }
  }
}
</script>

<style lang="less" scoped>
</style>