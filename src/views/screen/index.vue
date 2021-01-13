<template>
  <div>
    <el-row>
        <el-button @click="startShare">屏幕分享</el-button>
        <el-button @click="startRecord">开始录制</el-button>
        <el-button @click="pauseRecord">暂停录制</el-button>
        <el-button @click="stopRecord">结束录制</el-button>
        <video ref="videos" src="" autoplay width="400" height="400"></video>
    </el-row>

  </div>
</template>

<script lang="ts">
import RecordRTC from 'recordrtc'
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      mediaDevices: navigator.mediaDevices,
      stream:{},
      mediaRecorder:{},
      recorderType:'video'
    }
  },
  methods:{
    startShare: function(){
       this.mediaDevices.getUserMedia({
          video: true,
          audio: true
      }).then((stream) => {
        this.stream = stream
        this.$refs["videos"].srcObject=stream
      }).catch((err) => {
          console.error(err);
      })
    },
    startRecord:function(){
      this.mediaRecorder = RecordRTC(this.stream,{
        type:this.recorderType
      })
      this.mediaRecorder.startRecording()
    },
    pauseRecord: function(){
      this.mediaRecorder.pauseRecording()
    },
    stopRecord: function(){
      this.mediaRecorder.stopRecording(()=>{
        //this.mediaRecorder.save("12")
        this.stream.getTracks().forEach(track => track.stop());
        this.mediaRecorder = {};
        const blob = this.mediaRecorder.getBlob();
        this.saveBlob(blob,"测试视频.mp4");
      });
    },
    saveBlob: function(blob,fileName){
      if ('download' in document.createElement('a')) {
           //支持a标签download的浏览器
        const link = document.createElement('a')//创建a标签
        link.download = fileName//a标签添加属性
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)
        document.body.appendChild(link)
        link.click()//执行下载
        URL.revokeObjectURL(link.href) //释放url
        document.body.removeChild(link)//释放标签
      }else{
          navigator.msSaveBlob(blob, fileName)
      }
    }
  }
})
</script>

<style scoped>

</style>
