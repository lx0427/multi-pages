<template>
  <div class="nav">
    <a :class="{active:currentPage===''}" href="/">首页</a> |
    <a :class="{active:currentPage==='home'}" href="/home.html">HOME</a> |
    <a :class="{active:currentPage==='about'}" href="/about">ABOUT</a>
  </div>
</template>
<script>
export default {
  name: 'navCom',
  data () {
    return {
      currentPage: '/'
    }
  },
  created () {
    this.currentPage = window.location.pathname.replace(/^\/(\w*)(.html)?$/, '$1')
    console.log(window.location.pathname, this.currentPage, '当前页面')
  }
}
</script>

<style lang="scss">
.active {
  color: red;
}
</style>
