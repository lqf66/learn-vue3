<!--
 * @Author: Lqf
 * @Date: 2021-09-26 11:39:17
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 14:00:18
 * @Description: 我添加了修改
-->

<template>
  <container>
    <sprite :texture="bulletImg"></sprite>
  </container>
</template>

<script>
import bulletImg from '../../assets/bullet.png'
import { reactive, onMounted, onUnmounted } from 'vue'
import { game } from '../../game'
import config from '../../config'

export default {
  name: 'Bullet',
  setup () {
    return {
      bulletImg
    }
  }
}

export function useBullet () {

  const bullets = reactive([])

  const createBullet = ({ x, y }) => {
    return {
      x,
      y,
      width: 61,
      height: 99
    }
  }

  const addBullet = ({ x, y }) => {
    bullets.push(createBullet({ x, y }))
  }

  const destroyBullet = (index) => {
    bullets.splice(index, 1)
  }

  const move = () => {
    const handleTicker = () => {
      bullets.forEach((bullet, index) => {
        bullet.y -= config.bullet.speed
        if (bullet.y <= -100) {
          destroyBullet(index)
        }
      })
    }
    onMounted(() => {
      game.ticker.add(handleTicker)
    })
    onUnmounted(() => {
      game.ticker.remove(handleTicker)
    })
  }

  move()
  return {
    bullets,
    addBullet,
    destroyBullet
  }
}
</script>