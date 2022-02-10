/*
 * @Author: Lqf
 * @Date: 2021-09-24 14:17:19
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-24 17:37:50
 * @Description: 渲染器工作原理
 */

import { createRenderer } from "vue"

import Foo from './components/custom-renderer/Foo.vue'

import { Application, Graphics } from "pixi.js"

const game = new Application({
  width: 500,
  height: 500
})

document.body.append(game.view)

const renderer = createRenderer({
  createElement (type) {
    console.log('type: ', type)
    let element
    switch (type) {
      case 'rect':
        element = new Graphics()
        element.beginFill(0xff0000)
        element.drawRect(0, 0, 50, 50)
        element.endFill()
        break
      case 'circle':
        element = new Graphics()
        element.beginFill(0xff0000)
        element.drawCircle(0, 0, 50)
        element.endFill()
        break
    }
    return element
  },
  setElementText (node, text) {
    node.textContent = text
  },
  parentNode (node) {
    return node.parent
  },
  patchProp (el, key, prevValue, nextValue) {
    el[key] = nextValue
  },
  insert (el, parent) {
    parent.addChild(el)
  }
})

renderer.createApp(Foo).mount(game.stage)