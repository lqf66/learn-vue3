/*
 * @Author: Lqf
 * @Date: 2021-09-26 09:24:07
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 10:37:41
 * @Description: 我添加了修改
 */

import { createRenderer } from "vue"
import { Container, Text, Sprite, Texture } from 'pixi.js'

const renderer = createRenderer({
  createElement (type) {
    let element = null
    switch (type) {
      case 'container':
        element = new Container()
        break
      case 'sprite':
        element = new Sprite()
        break
    }
    return element
  },
  insert (el, parent) {
    if (el) {
      parent.addChild(el)
    }
  },
  remove (el) {
    if (el && el.parent) {
      el.parent.removeChild(el)
    }
  },
  parentNode (el) {
    return el.parent
  },
  patchProp (el, key, prevValue, nextValue) {
    switch (key) {
      case 'texture':
        el.texture = Texture.from(nextValue)
        break
      case 'onClick':
        el.on('pointertap', nextValue)
        break
      default:
        el[key] = nextValue
    }
  },
  createText (text) {
    return new Text(text)
  },
  nextSibling () { },
  createComment () { },
})

export function createApp (rootComponent) {
  return renderer.createApp(rootComponent)
}