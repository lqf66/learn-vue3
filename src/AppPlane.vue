<!--
 * @Author: Lqf
 * @Date: 2021-09-26 09:40:52
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 15:01:59
 * @Description: 我添加了修改
-->
<template>
  <container>
    <StartPage v-if="currentPage === 'StartPage'" @change-page="changePage" />
    <GamePage
      v-else-if="currentPage === 'GamePage'"
      @change-page="changePage"
    />
    <EndPage v-else-if="currentPage === 'EndPage'" @change-page="changePage" />
  </container>
</template>

<script>
import StartPage from './page/StartPage.vue'
import GamePage from './page/GamePage.vue'
import EndPage from './page/EndPage'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    StartPage, GamePage, EndPage
  },
  setup () {
    const currentPage = ref('StartPage')
    // const currentPage = ref('GamePage')
    // const currentPage = ref('EndPage')
    const changePage = (pageName) => {
      currentPage.value = pageName
    }
    return {
      currentPage,
      changePage
    }
  }
}
</script>

<style lang="less" scoped>
</style>