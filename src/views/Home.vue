<template>
  <div class="home">
    <HelloWorld msg="Welcome to lixiang's App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
