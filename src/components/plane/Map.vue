<!--
 * @Author: Lqf
 * @Date: 2021-09-26 10:04:43
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 10:35:16
 * @Description: 我添加了修改
-->
<template>
  <container>
    <sprite :texture="mapImg" :y="mapY1"></sprite>
    <sprite :texture="mapImg" :y="mapY2"></sprite>
  </container>
</template>

<script>
import mapImg from '../../assets/map.jpg'
import { ref, onMounted, onUnmounted } from 'vue'
import { game } from '../../game'
export default {
  setup () {
    const { mapY1, mapY2 } = useMove()
    return {
      mapImg,
      mapY1,
      mapY2
    }
  }
}

function useMove () {
  const stageHeight = 1080
  const mapY1 = ref(0)
  const mapY2 = ref(-stageHeight)

  const speed = 8
  const handleTicker = () => {
    mapY1.value += speed
    mapY2.value += speed
    if (mapY1.value >= stageHeight) {
      mapY1.value = -stageHeight
    }
    if (mapY2.value >= stageHeight) {
      mapY2.value = -stageHeight
    }
  }
  onMounted(() => {
    game.ticker.add(handleTicker)
  })

  onUnmounted(() => {
    game.ticker.remove(handleTicker)
  })
  return {
    mapY1,
    mapY2
  }
}
</script>