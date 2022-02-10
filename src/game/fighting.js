/*
 * @Author: Lqf
 * @Date: 2021-09-26 13:58:06
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 14:42:56
 * @Description: 我添加了修改
 */

import { onMounted, onUnmounted } from "vue"
import { game } from "../game"
import { hitObjectTest } from "../utils"
export function useFighting ({
  bullets,
  destroyBullet,
  enemys,
  destroyEnemy,
  planeInfo,
  gameOver
}) {
  const handleTicker = () => {
    bullets.forEach((bullet, bIndex) => {
      enemys.forEach((enemy, eIndex) => {
        if (hitObjectTest(bullet, enemy)) {
          destroyBullet(bIndex)
          enemy.blood--
          if (enemy.blood === 0) {
            destroyEnemy(eIndex)
          }
        }
      })
    })
    enemys.forEach(enemy => {
      if (hitObjectTest(enemy, planeInfo)) {
        gameOver()
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