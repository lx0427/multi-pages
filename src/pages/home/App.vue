<template>
  <div id="app">
    <nav-com></nav-com>
    <h1>hello home page !!!</h1>
  </div>
</template>
<script>
import navCom from '@/components/nav/nav.vue'
export default {
  data () {
    return {}
  },
  components: {
    // eslint-disable-next-line
    navCom
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
