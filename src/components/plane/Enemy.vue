<!--
 * @Author: Lqf
 * @Date: 2021-09-26 11:03:01
 * @LastEditors: Lqf
 * @LastEditTime: 2021-10-28 09:08:41
 * @Description: 我添加了修改
-->
<template>
  <container>
    <sprite :texture="enemyImg"></sprite>
  </container>
</template>

<script>
import enemyImg from '../../assets/enemy.png'
import { reactive, onMounted, onUnmounted } from 'vue'
import { game } from '../../game'
import config from '../../config'
export default {
  setup () {
    return {
      enemyImg
    }
  }
}

export function useEnemy () {
  const getSpeed = () => {
    return typeof config.enemy.speed === 'function' ? config.enemy.speed() : config.enemy.speed
  }

  const createEnemy = () => {
    return {
      x: Math.floor(Math.random() * 700 - 100),
      y: -100,
      speed: getSpeed(),
      blood: config.enemy.blood,
      width: 308,
      height: 207
    }
  }
  const enemys = reactive([createEnemy()])

  const addEnemy = () => {
    enemys.push(createEnemy())
  }

  setInterval(() => {
    addEnemy()
  }, 1000)

  const destroyEnemy = (index) => {
    enemys.splice(index, 1)
  }

  const move = () => {
    const handleTicker = () => {
      enemys.forEach((enemy, index) => {
        enemy.y += enemy.speed
        console.log('enemy.y: ', enemy.y)
        if (enemy.y >= 1200) {
          destroyEnemy(index)
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
    enemys,
    destroyEnemy
  }
}
</script>