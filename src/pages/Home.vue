<template>
  <div id="home">
      <div class="home-header">
        <router-link to="/" class="logo-link"><img src="../../static/images/logo.png"></router-link>
        <div class="search-box"><input type="text" placeholder="请输入关键字"><span class="search-btn" @click="alert"></span></div>
        <router-link to="/" class="service"></router-link>
      </div>
      <home-swiper></home-swiper>
      <home-nav></home-nav>
  </div>
</template>
<script>
import HomeSwiper from '@/components/HomeSwiper'
import HomeNav from '@/components/HomeNav'

export default {
  name: 'Home',
  data(){
    return{
    }
  },
  methods:{
    alert:function(){
      alert('暂无此功能');
    },
  },
  components:{
    'home-swiper':HomeSwiper,
    'home-nav':HomeNav,
  },
}
</script>

<style scoped>
  .home-header{
    height:1rem; 
    background-color:#fff; 
    padding:0.1rem 0.15rem; 
    box-sizing:border-box; 
    position:relative;
    display:flex;
  }
  .home-header .logo-link{
    height:100%;
    padding:3px 0;
    box-sizing:border-box;
    flex:none;
  }
  .home-header .logo-link img{
    height:100%;
  }
  .home-header .search-box{
    flex:auto;
    padding:0.08rem 0.16rem;
    position:relative;
  }
  .home-header input{
    display:block; 
    border:none; 
    background-color:#f2f2f2; 
    width:100%; 
    height:100%; 
    border-radius:32px; 
    padding:0 0.2rem 0 0.5rem; 
    box-sizing:border-box;
    font-size:0.16rem;
    color:#c5c5c5;
  }
  .home-header .search-btn{
    width:0.27rem; 
    height:0.27rem; 
    background:url(../../static/images/public_img.png) no-repeat -0.47rem -1.59rem; 
    background-size:2.8rem; 
    position:absolute; 
    left:0.34rem; 
    top:0;
    bottom:0;
    margin:auto;
  }
  .home-header .service{
    width:0.46rem;
    height:0.46rem;
    background:url(../../static/images/public_img.png) no-repeat 0 -1.59rem;
    background-size:2.8rem;
    flex:none;
    margin-top:0.22rem;
  }
</style>
