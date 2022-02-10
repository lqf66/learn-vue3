<!--
 * @Author: Lqf
 * @Date: 2021-09-24 14:17:19
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-24 16:48:08
 * @Description: 我添加了修改
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { provide } from 'vue'
export default {
  setup () {
    provide('foo', 'foooo')
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
