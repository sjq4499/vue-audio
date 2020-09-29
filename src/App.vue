<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2020-03-23 16:10:38
 * @LastEditors: sjq
 * @LastEditTime: 2020-03-23 16:23:15
 -->
<template>
  <div id="app">
    <img alt="Vue logo1" src="./assets/logo.png" />
    0.05
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
