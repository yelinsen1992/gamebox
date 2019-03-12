
<template>
    <div class="home-swiper">
        <div class="swiper-container home-swiper-box" @mouseenter="stopPlay" @mouseleave="startPlay">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide,index) in bannerList" :key="index">
                    <img :src="slide.url">
                    <p>第{{index+1}}张图片</p>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.min.js';
export default {
  name: 'HomeSwiper',
  data(){
    return{
      bannerList:[
      ],
      number:'',           
    }
  },
  components:{   
  },
  created:function(){
    this.getBanner();
  },
  mounted:function(){   
    var that = this;
    that.$nextTick(function(){
        setTimeout(function(){
            let initialSlide = Math.floor(that.number/2);
            that.mySwiper = new Swiper('.swiper-container', {  
                loop:true,
                loopedSlides: '2',
                autoplay:{
                    delay:4000,
                },
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                },
                effect : 'coverflow',
                    slidesPerView: 1.13,
                    centeredSlides: true,
                    coverflowEffect: {
                    rotate: 30,
                    stretch: -16,
                    depth: 120,
                    modifier: 1,
                    slideShadows : false
                },    
            });
            that.mySwiper.slideToLoop(initialSlide,0,true);
            that.mySwiper.autoplay.start();
        },300);    
    });
  },
  methods:{
    stopPlay:function(){
         this.mySwiper.autoplay.stop();
    },
    startPlay:function(){
         this.mySwiper.autoplay.start();
    },
    getBanner:function(){
      this.axios.get('/api/homebanner')
      .then(res => {
        // console.log(res);
        this.bannerList = res.data.imgUrl;
        this.number = res.data.imgUrl.length;
      })
    },
  },
}
</script>

<style>
    .home-swiper-box{
        overflow:visible;
        padding-top:6px;
        padding-bottom:34px;
        max-width: 650px;
        animation:opacityTo 0.8s ease-in-out;
    }
    .home-swiper-box .swiper-slide{
        opacity:0.4; 
        position:relative;
        transition:opacity 0.3s ease-in-out !important;
    }
    .home-swiper-box .swiper-slide-active{
        opacity:1;
    }
    .home-swiper-box .swiper-slide p{
        position:absolute;
        bottom:20px;
        left:0;
        right:0;
        margin:auto;
        text-align:center;
        font-size:20px;
        color:#fff;
    }
    .home-swiper-box .swiper-slide-active img{
        box-shadow:0 0 15px #d6d9e6;
    }
    .home-swiper-box .swiper-slide img{
        width:100%; 
        border-radius:10px;
    }
    .home-swiper-box .swiper-pagination .swiper-pagination-bullet{
        width:10px;
        height:10px;
        border-radius:10px;
        opacity:1;
        background-color:#ebedf4;
        transition:0.3s ease-in-out;
    }
    .home-swiper-box .swiper-pagination .swiper-pagination-bullet-active{
        width:24px;
        background-color:#ffdc00;
    }
    @keyframes opacityTo{
        0%{opacity:0;}
        100%{opacity:1;}
    }
</style>
