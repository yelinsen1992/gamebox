<template>
    <div class="home-nav">
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
  name: 'HomeNav',
  data () {
    return {
        linkLists:[
            {title:'新游',url:'/newgame',},
            {title:'分类',url:'/sort',},
            {title:'礼包',url:'/gifts',},
            {title:'二次元',url:'/quadratic',},
            {title:'资讯',url:'/news',},
        ]
    }
  }
}
</script>

<style scoped>
    .home-nav{
        padding:0.1rem 0;
        border-bottom:0.12rem solid #f6f7fb;    
    }
    .home-nav ul{
        display:flex;
    }
    .home-nav li{
        flex:1;
        text-align:center;
    }
    .home-nav li a{
        display:block;
    }
    .home-nav li p{
        padding-top:0.06rem;
        font-size:0.16rem;
        color:#abaebe;
    }
    .home-nav li i{
        width:0.56rem; 
        height:0.56rem;
        line-height:0.3rem;
        display:inline-block;
        background:url(../../static/images/public_img.png) no-repeat;
        background-size:2.8rem;
    }
    .home-nav .li-1 i{background-position:0 0;}
    .home-nav .li-2 i{background-position:-0.56rem 0;}
    .home-nav .li-3 i{background-position:-1.12rem 0;}
    .home-nav .li-4 i{background-position:-1.68rem 0;}
    .home-nav .li-5 i{background-position:-2.24rem 0;}
</style>
