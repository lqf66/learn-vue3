/*
 * @Author: Lqf
 * @Date: 2021-09-26 14:00:34
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-26 14:01:43
 * @Description: 我添加了修改
 */
export function hitObjectTest (objA, objB) {
  return objA.x + objA.width >= objB.x &&
    objB.x + objB.width >= objA.x &&
    objA.y + objA.height >= objB.y &&
    objB.y + objB.height >= objA.y
} 