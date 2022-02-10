/*
 * @Author: Lqf
 * @Date: 2021-09-26 09:39:53
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 10:20:43
 * @Description: 我添加了修改
 */
import { Application } from "pixi.js"

export const game = new Application({
  width: 750,
  height: 1080
})

document.body.append(game.view)

export function getRootContainer () {
  return game.stage
}