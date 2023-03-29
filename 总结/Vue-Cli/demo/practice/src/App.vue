<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Child />
  <About />
</template>

<script>
import About from './01_事件总线mitt的使用/About.vue'
import Child from './01_事件总线mitt的使用/Child.vue'
export default {
  name: 'App',
  components: {
    About,
    Child
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
