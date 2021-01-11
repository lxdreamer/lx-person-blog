<template>
  <div>
    <el-row>
        <el-button @click="startShare">屏幕分享</el-button>
        <el-button>开始录制</el-button>
        <el-button>结束录制</el-button>
        <el-button>屏幕分享</el-button>
        <video ref="videos" autoplay></video>
    </el-row>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      mediaDevices: navigator.mediaDevices,
      videoSrc :{}
    }
  },
  methods:{
    startShare: function(){
       this.mediaDevices.getUserMedia({
          video: true,
          audio: true
      }).then((stream) => {
        this.$refs["videos"].srcObject=stream
      }).catch((err) => {
          console.error(err);
      })
    }
  }
})
</script>

<style scoped>

</style>
