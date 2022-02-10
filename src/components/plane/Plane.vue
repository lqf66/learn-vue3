<!--
 * @Author: Lqf
 * @Date: 2021-09-26 10:05:44
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 15:00:35
 * @Description: 我添加了修改
-->
<template>
  <container>
    <sprite :texture="planeImg"></sprite>
  </container>
</template>

<script>
import planeImg from '../../assets/plane.png'
import { reactive, onMounted, onUnmounted } from 'vue'
export default {
  setup () {
    return {
      planeImg
    }
  }
}
export function usePlane ({ onAttack }) {
  const planeInfo = reactive({
    x: 200,
    y: 700,
    width: 258,
    height: 364
  })

  const move = () => {
    const speed = 20
    const handleMove = (e) => {
      switch (e.code) {
        case "ArrowUp":
          if (planeInfo.y > 150) {
            planeInfo.y -= speed
          }
          break
        case "ArrowDown":
          if (planeInfo.y <= 800) {
            planeInfo.y += speed
          }
          break
        case "ArrowLeft":
          if (planeInfo.x > -100) {
            planeInfo.x -= speed
          }
          break
        case "ArrowRight":
          if (planeInfo.x < 600) {
            planeInfo.x += speed
          }
          break
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleMove)
    })
    onUnmounted(() => {
      window.removeEventListener('keydown', handleMove)
    })
  }

  const attack = () => {
    const handleAttack = (e) => {
      if (e.code === 'Space') {
        onAttack &&
          onAttack({
            x: planeInfo.x + 100,
            y: planeInfo.y
          })
      }
    }
    onMounted(() => {
      window.addEventListener('keyup', handleAttack)
    })
    onUnmounted(() => {
      window.removeEventListener('keyup', handleAttack)
    })
  }

  attack()
  move()

  return {
    planeInfo
  }
}
</script>