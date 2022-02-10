<!--
 * @Author: Lqf
 * @Date: 2021-09-26 09:45:47
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 15:02:39
 * @Description: 我添加了修改
-->
<template>
  <container>
    <Map />
    <Plane :x="planeInfo.x" :y="planeInfo.y" />
    <Enemy
      v-for="(enemy, index) in enemys"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    />
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    />
  </container>
</template>

<script>
import Map from '../components/plane/Map.vue'
import Plane, { usePlane } from '../components/plane/Plane.vue'
import Enemy, { useEnemy } from '../components/plane/Enemy.vue'
import Bullet, { useBullet } from '../components/plane/Bullet'
import { useFighting } from '../game/fighting'
export default {
  components: {
    Map, Plane, Enemy, Bullet
  },
  setup (props, { emit }) {
    const { bullets, addBullet, destroyBullet } = useBullet()
    const { planeInfo } = usePlane({
      onAttack ({ x, y }) {
        addBullet({ x, y })
      }
    })
    const { enemys, destroyEnemy } = useEnemy()

    const gameOver = () => {
      emit('change-page', 'EndPage')
    }
    useFighting({
      bullets,
      destroyBullet,
      enemys,
      destroyEnemy,
      planeInfo,
      gameOver
    })
    return {
      planeInfo,
      enemys,
      bullets
    }
  }
}
</script>

<style lang="less" scoped>
</style>
