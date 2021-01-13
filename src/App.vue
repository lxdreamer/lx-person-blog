<template>
  <div id="app" v-firework v-snowFly>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/screen">screen</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default{
}
</script>

<style lang="scss">
body{
  margin: 0;
  perspective: 500;
-webkit-perspective: 500; /* Safari 和 Chrome */
overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //background: #add8e6;
  // opacity:0.5;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
