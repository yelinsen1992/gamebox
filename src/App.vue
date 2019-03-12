<template>
  <div id="app">
    <div class="scroll-box">
      <transition>
        <router-view></router-view>
      </transition>
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
      loading:false,
      transitionName: '',
    }
  },
  components:{
    "foot-nav":FooterNav,
    // 'loading':Loading,
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
