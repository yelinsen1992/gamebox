<template>
  <div id="app">
    <div class="scroll-box">
      <router-view></router-view>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav'

export default {
  name: 'App',
  data:function(){
    return{

    }
  },
  components:{
    "foot-nav":FooterNav,
  }
}
</script>

<style>
#app {
  height:100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display:flex;
  flex-flow:column;
}
</style>
