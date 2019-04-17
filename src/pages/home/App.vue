<template>
  <div id="app">
    <nav-com></nav-com>
    <h1>hello home page !!!</h1>
    <img src="./images/02.jpg" alt="">
  </div>
</template>
<script>
import navCom from '@/components/nav/nav.vue'
import { getBatchList } from '@/api/api.js'
export default {
  data () {
    return {}
  },
  created () {
    getBatchList().then(res => {
      console.log(res, 'xxx')
    })
  },
  mounted () {},
  components: {
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
