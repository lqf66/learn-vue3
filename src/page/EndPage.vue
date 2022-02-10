<!--
 * @Author: Lqf
 * @Date: 2021-09-26 09:45:36
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 14:23:41
 * @Description: 我添加了修改
-->
<template>
  <container>
    <sprite :texture="EndPage"></sprite>
    <sprite
      :texture="restartBtn"
      x="228"
      y="510"
      :interactive="true"
      @click="restartGame"
    ></sprite>
  </container>
</template>

<script>
import EndPage from '../assets/end_page.jpg'
import restartBtn from '../assets/restartBtn.png'
export default {
  setup (props, { emit }) {
    const restartGame = () => {
      emit('change-page', 'GamePage')
    }

    return {
      EndPage,
      restartBtn,
      restartGame
    }
  }
}
</script>

<style lang="less" scoped>
</style>