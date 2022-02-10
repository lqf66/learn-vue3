<!--
 * @Author: Lqf
 * @Date: 2021-09-24 14:58:28
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-24 16:16:32
 * @Description: 我添加了修改
-->
<template>
  <div>props: {{ title }}</div>
  <div>ref: {{ count }}</div>
  <div>ref: {{ xiaoming.username }} ------ {{ xiaoming.age }}</div>
  <div>reactive: {{ username }} ------ {{ age }}</div>
  <div>readonly: {{ readonlyUser.username }} ------ {{ readonlyUser.age }}</div>
  <div>store/computed: {{ double }}</div>
  <button @click="handleClick">++</button>
  <button @click="stopClick">stop</button>
  <input type="text" ref="input" />
</template>

<script>
import { ref, reactive, toRefs, readonly, computed, watch, watchEffect, inject, onMounted, onUpdated, onErrorCaptured } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['title'],
  setup (props) {
    // props
    console.log('props: ', props.title)

    // ref
    const count = ref(0)
    const xiaoming = ref({
      username: 'xiaoming',
      age: 22
    })
    console.log('count: ', count.value)
    console.log('xiaoming: ', xiaoming.value.age)

    // reactive
    const user = reactive({
      username: 'Lqf',
      age: 18
    })

    // readonly
    const readonlyUser = readonly({
      username: 'xiaohong',
      age: 19
    })
    readonlyUser.age = 21

    // computed store
    const store = useStore()
    const double = computed(() => store.state.count * 2)

    const handleClick = () => {
      count.value++
      user.age++
    }

    // ref - watch
    watch(count, (newValue, oldValue) => {
      console.log('watch - count', newValue, oldValue)
    })

    // reactive - watch
    watch(
      () => user.age,  // 如果观察的是一个 对象里面的某个key 的话， 需要用一个函数来return
      (val) => {
        console.log('user age', val)
      },
      {
        immediate: true
      }
    )

    // 多数据
    watch([count, double, () => user.age], (val) => {
      console.log(val)
    })

    let result = 0
    const stop = watchEffect(() => {
      result = count.value + user.age
      console.log("watch- effect", result)
    })

    const stopClick = () => {
      stop()
    }

    // inject
    const appVal = inject('foo', 'fqweqwe') // 参数二是默认值
    console.log('appVal: ', appVal)

    // 生命周期
    onMounted(() => {
      console.log("on mounted 1 ")
    })

    onMounted(() => {
      console.log("on mounted 2")
    })

    onUpdated(() => {
      console.log("update ")
    })

    // 组件报错之后 会触发这个
    onErrorCaptured(() => {
      // 触发我们的这里
      console.log("error --------------------")
    })

    // 使用ref获取dom元素
    const input = ref(null)
    onMounted(() => {
      console.log((input.value))
    })

    return {
      // toRefs
      ...toRefs(user),
      count,
      xiaoming,
      readonlyUser,
      double,
      handleClick,
      stopClick,
      input
    }
  }
}
</script>

<style lang="less" scoped>
</style>