<template>
  <div class="home">
    <Foo title="heiheihei" />
    <Baz />
  </div>
</template>

<script>
import Foo from '../components/basic/Foo.vue'
import Baz from '../components/basic/Baz.vue'

export default {
  name: 'Home',
  components: {
    Foo, Baz
  }
}
</script>
