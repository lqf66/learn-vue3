/*
 * @Author: Lqf
 * @Date: 2021-09-24 14:17:19
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-24 17:38:04
 * @Description: pixi简单用法
 */

import { Application, Container, Graphics, Sprite, Texture } from "pixi.js"
import logo from "./assets/logo.png"

const game = new Application({
  width: 500,
  height: 500
})
console.log('game: ', game)

// 添加视图
document.querySelector('body').append(game.view)

// 添加容器
const box = new Container()
game.stage.addChild(box)

// 创建
const rect = new Graphics()
rect.beginFill(0xff0000)
rect.drawRect(0, 0, 50, 50)
rect.endFill()
rect.x = 100
rect.y = 100
rect.interactive = true
// 中止ticker
rect.on("pointertap", () => {
  console.log("click")
  game.ticker.remove(handleTicker)
})

const img = new Sprite()
img.texture = Texture.from(logo)

//添加
box.addChild(rect)
box.addChild(img)

console.log('game.stage', game.stage)

// 定时器任务
const handleTicker = () => {
  img.x++
}
game.ticker.add(handleTicker)