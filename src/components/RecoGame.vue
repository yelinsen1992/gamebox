<template>
    <div class="game-list">
        <div class="inner-box">
            <div class="list-title">
                <span class="title">游戏推荐</span>
                <span class="update"  @click="getData">换一换</span>
            </div>
            <ul>
                <li v-for="(item,i) in GameList" :key="i">
                    <router-link :to="{ name: 'GameDetails', params: { id:item.gameId}}">
                        <div class="pic"><img :src="item.imgUrl"></div>
                        <p class="name">id:{{item.gameId}}{{item.gameName}}</p>
                        <p class="type">{{item.gameType}}&nbsp;|&nbsp;{{item.gameSize}}M</p>
                    </router-link>
                     <a :href="item.downloadUrl" class="download">下载</a>
                </li>
            </ul>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'RecoGame',
    data(){
        return{
            GameList:[],
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            this.axios.get('/api/newgame')
                .then( res => {  
                // console.log(res.data.data);
                this.GameList = res.data.data;  
            })
            .catch( error => {
                console.log(error)
            })
        },
    },
    watch: {
        '$route' (to, from) {
            this.$emit('update')
        }
    },
}
</script>
<style scoped>
    .game-list ul{display:flex;}
    .game-list li{flex:1; padding:0 0.05rem; text-align:center; overflow:hidden;}
    .game-list li .pic{width:1.3rem; height:1.3rem; display:inline-block;}
    .game-list li .pic img{width:100%; height:100%; border-radius:10px;}
    .game-list li p{overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
    .game-list li .name{color:#000; font-size:14px; line-height:1.4em;}
    .game-list li .type{color:#abaebe; font-size:12px; line-height:1.6em;}
    .game-list li .download{margin-top:0.1rem; color:#333; background-color:#ffdc00; font-size:14px; line-height:1em; height:1em; padding:7px 22px; border-radius:24px; display:inline-block;}

</style>
