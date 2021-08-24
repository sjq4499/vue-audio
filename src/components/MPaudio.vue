<!--
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2020-09-29 17:33:30
 * @LastEditors: sjq
 * @LastEditTime: 2021-08-24 20:57:18
-->
<template>
  <div>
    <audio
      @timeupdate="updateProgress"
      controls
      ref="audioRef"
      style="display: none"
    >
      <source :src="fileurl" type="audio/mpeg" />
      您的浏览器不支持音频播放
    </audio>
    <div class="audio-right">
      <span
        :class="audioStatus !== 'stop' ? 'icon-zanting' : ' icon-weibiaoti518'"
        @click="playAudio"
        class="dialogAudioPlay iconfont"
      ></span>
      <div class="progress-bar-bg" id="progressBarBg">
        <span id="progressDot" v-dragto></span>
        <div class="progress-bar" id="progressBar"></div>
      </div>
      <div class="audio-time" style="min-height: 10px">
        <span class="audio-length-current" id="audioCurTime">{{
          audioStart
        }}</span
        >/
        <span class="audio-length-total">{{ transTime(duration) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // fileurl音频url
  // duration 时长（秒）
  props: ["fileurl", "duration"],
  data() {
    return {
      audioStatus: "stop",
      audioStart: "0:00",
    };
  },

  directives: {
    dragto: {
      bind: function(el, drag, vnode) {
        let odiv = el; //获取当前元素
        odiv.onmousedown = (e) => {
          let disX = e.clientX - odiv.offsetLeft;
          let wdiv = document.getElementById("progressBarBg").clientWidth;
          let audio = vnode.context.$refs.audioRef;
          if (!audio.paused || audio.currentTime != 0) {
            // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
            document.onmousemove = (e) => {
              let chaxs = e.clientX - disX;
              let ratemin = chaxs / wdiv;
              let rate = ratemin * 100;
              if (rate >= 0 && rate <= 100) {
                document.getElementById("progressBar").style.width = rate + "%";
                odiv.style.left = rate + "%";
                audio.currentTime = audio.duration * ratemin;
              }
            };
            document.onmouseup = (e) => {
              document.onmousemove = null;
              document.onmouseup = null;
            };
          }
        };
      },
    },
  },
  methods: {
    //播放暂停控制
    playAudio() {
      let recordAudio = this.$refs.audioRef; //获取audio元素
      if (recordAudio.paused) {
        //   this.audioImg = "./dialogDetailPause.png"
        recordAudio.play();
        this.audioStatus = "run";
      } else {
        //   this.audioImg = "./dialogDetailPlay.png"
        recordAudio.pause();
        this.audioStatus = "stop";
      }
    },
    //更新进度条与当前播放时间
    updateProgress(e) {
      var value = e.target.currentTime / e.target.duration;
      if (document.getElementById("progressBar")) {
        document.getElementById("progressBar").style.width = value * 100 + "%";
        document.getElementById("progressDot").style.left = value * 100 + "%";
        if (e.target.currentTime == e.target.duration) {
          this.audioStatus = "stop";
        }
      } else {
        this.audioStatus = "stop";
      }

      this.audioStart = this.transTime(this.$refs.audioRef.currentTime);
    },
    /**
     * 音频播放时间换算
     * @param {number} value - 音频当前播放时间，单位秒
     */
    transTime(value) {
      var time = "";
      var h = parseInt(value / 3600);
      value %= 3600;
      var m = parseInt(value / 60);
      var s = parseInt(value % 60);
      time = h + ":" + m + ":" + s;
      return time;
    },
  },
};
</script>

<style lang="scss" scoped>
.audio-right {
  width: 100%;
  height: 49px;
  line-height: 49px;
  background: #7eb637;
  border-radius: 6px;
  display: flex;
  padding: 0 15px;
  .dialogAudioPlay {
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }
  .progress-bar-bg {
    background-color: #fff;
    flex: 1;
    position: relative;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    cursor: pointer;
    margin: 0 10px;
    span {
      content: " ";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      background-color: #fff;
      position: absolute;
      left: 0%;
      top: 50%;
      margin-top: -5px;
      margin-left: -5px;
      cursor: pointer;
    }
  }
  .progress-bar {
    background-color: #fff;
    width: 0%;
    height: 2px;
  }

  .audio-time {
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    .audio-length-total {
      float: right;
    }
    .audio-length-current {
      float: left;
    }
  }
}
</style>
