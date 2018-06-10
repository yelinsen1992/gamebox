<template>
    <div class="footer-nav">
        <ul>
            <li v-for="(link,index) in linkLists" :class="['li-'+(index+1)]" :key="index">
                <router-link :to="link.url">
                    <i></i>
                    <p>{{link.title}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
        linkLists:[
            {title:'首页',url:'/',},
            {title:'动态',url:'/test/test2',},
            {title:'论坛',url:'/test/test3',},
            {title:'福利',url:'/quadratic',},
            {title:'我的',url:'/test',},
        ]
    }
  }
}
</script>

<style scoped>
    .footer-nav{
        flex:none;
        border-top:1px solid #f0f2f5; 
        padding:0.1rem 0 0.15rem; 
        background-color:#fff;
    }
    .footer-nav ul{display:flex;}
    .footer-nav ul li{flex:1; text-align:center;}
    .footer-nav ul li a{display:block;}
    .footer-nav ul li i{width:0.5rem; height:0.5rem; line-height:0.5rem; display:inline-block; background:url(../../static/images/public_img.png) no-repeat; background-size:2.8rem;}    
    .footer-nav ul .li-1 i{background-position:0 -0.57rem;}
    .footer-nav ul .li-2 i{background-position:-0.5rem -0.57rem;}
    .footer-nav ul .li-3 i{background-position:-1rem -0.57rem;}
    .footer-nav ul .li-4 i{background-position:-1.5rem -0.57rem;}
    .footer-nav ul .li-5 i{background-position:-2rem -0.57rem;}
    .footer-nav ul .li-1 .router-link-exact-active i{background-position:0 -1.08rem;}
    .footer-nav ul .li-2 .router-link-exact-active i{background-position:-0.5rem -1.08rem;}
    .footer-nav ul .li-3 .router-link-exact-active i{background-position:-1rem -1.08rem;}
    .footer-nav ul .li-4 .router-link-exact-active i{background-position:-1.5rem -1.08rem;}
    .footer-nav ul .li-5 .router-link-exact-active i{background-position:-2rem -1.08rem;}
    .footer-nav ul li p{font-size:0.16rem; color:#abaebe; padding-top:0.06rem;}
    .footer-nav ul li .router-link-exact-active p{color:#000000;}
    .footer-nav ul li .router-link-exact-active i{animation:scaleTo 0.3s ease-in-out;}    
     @keyframes scaleTo{
        0%{transform:scale(0.5); opacity:0.6;}
        100%{transform:scale(1); opacity:1;}
    }   
</style>
