<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2020-09-29 15:46:12
 * @LastEditors: sjq
 * @LastEditTime: 2020-09-29 17:49:39
-->
<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2020-03-23 16:10:38
 * @LastEditors: sjq
 * @LastEditTime: 2020-09-29 17:39:03
 -->
<template>
  <div id="app">
    <h3>自定义H5audio(vant进度条)</h3>
    <Maudio :duration="duration" :fileurl="fileurl"></Maudio>
    <h3>自定义Pcaudio(拖拽事件是鼠标按下不支持h5)</h3>
    <MPaudio :duration="duration" :fileurl="fileurl"></MPaudio>
    <h3>自定义改变原生audio样式（按钮进度条只能是黑色和白色 部分手机浏览器有兼容问题尤其是iPhone）</h3>
    <MYaudio :fileurl="fileurl"></MYaudio>
  </div>
</template>

<script>
import Maudio from "./components/Maudio"
import MPaudio from "./components/MPaudio"
import MYaudio from "./components/MYaudio"

export default {
  name: 'app',
  components: {
    Maudio,
    MPaudio,
    MYaudio
  },
  data () {
    return {
      fileurl: 'https://cdn-px-hws-test.pxjy.com/audiozone/20200929/1601370183985.mp3',
      duration: 14220
    }
  }
}
</script>

<style>
</style>
