<template>
  <div id="app">
    <div class="scroll-box">
      <router-view></router-view>
    </div>
    <foot-nav></foot-nav>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav'
import Loading from '@/components/Loading'

export default {
  name: 'App',
  data:function(){
    return{
      loading:false,
    }
  },
  components:{
    "foot-nav":FooterNav,
    'loading':Loading,
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
