
<template>
    <div class="newgame-list">      
        <div class="newgameOnline-info" v-for="(item,i) in data" :key="i">
            <div class="uptime">
                {{item.date}}上线
            </div>
            <ul>
                <li v-for="(itemlist,a) in item.data" :key="a">
                    <router-link class="flex-auto" :to="{ name: 'GameDetails', params: { id:itemlist.gameId}}">
                        <div class="game-box">
                            <div class="game-info">
                                <img :src="itemlist.imgUrl">
                                <div class="info">
                                    <p class="name">id:{{itemlist.gameId}}&nbsp;{{itemlist.gameName}}</p>
                                    <p class="stars"><em :style="{width:itemlist.number*20 + '%'}"></em></p>
                                    <p class="intr">{{itemlist.intr}}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <a :href="itemlist.downloadUrl" class="download">下载</a>
                </li>
            </ul>
        </div>        
        <div class="loadmore" @click="addData">点击加载更多</div>
    </div>
</template>
<script>
export default {
  name: 'NewGameOnlineList',
  data(){
    return{
        data:[

        ],
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      this.axios.get('/api/newGameOnline')
      .then( res => {
        // console.log(res.data.data);
        this.data = res.data.data;
      })
    },
    addData(){
      this.axios.get('/api/newGameOnline')
      .then( res => {
        // console.log(res.data);
        this.data = this.data.concat(res.data.data);
      })
    },    
  }
}
</script>
<style scoped>
    .newgame-list .uptime{
        font-size:16px;
        line-height: 1em;
        display:table;
        color:#fff;
        padding:6px 10px;
        border-radius:5px;
        position:relative;
        margin:15px 0 15px 10px;
    }
    .newgame-list .uptime:after{
        content:'';
        position:absolute;
        width:0;
        height:0;
        border-style:solid;
        border-width:3px 8px;
        border-color:transparent;
        left:-16px;
        top:0;
        bottom:0;
        margin:auto;
    }    
    .newgame-list .newgameOnline-info:first-child .uptime{
        margin-top:0;
    }
    .newgame-list .newgameOnline-info:nth-of-type(5n+1) .uptime{
        background-color:#ff5454;
    }
    .newgame-list .newgameOnline-info:nth-of-type(5n+1) .uptime:after{
        border-right-color:#ff5454;
    }
    .newgame-list .newgameOnline-info:nth-of-type(5n+2) .uptime{
        background-color:#ffaa19;
    }
    .newgame-list .newgameOnline-info:nth-of-type(5n+2) .uptime:after{
        border-right-color:#ffaa19;
    }
        .newgame-list .newgameOnline-info:nth-of-type(5n+3) .uptime{
        background-color:#4aadfe;
    }
     .newgame-list .newgameOnline-info:nth-of-type(5n+3) .uptime:after{
        border-right-color:#4aadfe;
    }
    .newgame-list .newgameOnline-info:nth-of-type(5n+4) .uptime{
        background-color:#06dfae;
    }
        .newgame-list .newgameOnline-info:nth-of-type(5n+4) .uptime:after{
        border-right-color:#06dfae;
    }
        .newgame-list .newgameOnline-info:nth-of-type(5n+5) .uptime{
        background-color:#a24fff;
    }
        .newgame-list .newgameOnline-info:nth-of-type(5n+5) .uptime:after{
        border-right-color:#a24fff;
    }

    .flex-auto{flex:auto; overflow:hidden;}
    .newgame-list ul{
        font-size:0;
        letter-spacing:-5px;
    }
    .newgame-list li{
        background-color:#f7f7f7; 
        border-radius:10px; 
        margin-bottom:10px;
        padding:15px;
        position:relative;
        display:flex;
        align-items:center;
    }
    .newgame-list li .rank{
        width:0;
        height:0;
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 16px 16px;
        border-color: #d2d2d2 transparent transparent #d2d2d2;
        border-top-left-radius: 10px;        
    }
    .newgame-list li .rank em{
        position:absolute;
        left:-10px;
        top:-14px;
        font-size:12px;
        font-style:normal;
        color:#fff;
    }
    .newgame-list li:nth-of-type(n+10) .rank em{
        left:-13px;
    }
    .newgame-list li:nth-of-type(1) .rank{
        border-color:#ff5454 transparent transparent #ff5454;
    }   
    .newgame-list li:nth-of-type(2) .rank{
        border-color:#ffaa19 transparent transparent #ffaa19;
    }
    .newgame-list li:nth-of-type(3) .rank{
        border-color:#4aadfe transparent transparent #4aadfe;
    }         
    .newgame-list li .download{
        color:#333;
        background-color:#ffdc00;
        font-size:14px;
        line-height:1em;
        height:1em;
        padding:7px 22px;
        border-radius:24px;
        flex:none;
    }
    .newgame-list li .game-box{
        flex:auto;
        overflow:hidden;
        padding-right:10px;
    }
    .newgame-list li .game-info{
        display:flex;
        align-items:center;
    }
    .newgame-list li .game-info img{
        width:70px;
        height:70px;
        border-radius:12px;
        flex:none;
    }
    .newgame-list li .game-info .info{
        padding-left:10px;
        flex:auto;
        overflow:hidden;
    }
    .newgame-list li .game-info .info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .newgame-list li .game-info .info .name{
        color:#000;
        font-size:14px;
        line-height:1em;
    }
    .newgame-list li .game-info .info .intr{
        color:#abaebe;
        font-size:12px;
        line-height:1em;
    }
    .newgame-list li .game-info .info .stars{
        width:80px;
        height:14px;
        line-height:14px;
        margin:7px 0;
        display:block;
        position: relative;
    }
    .newgame-list li .game-info .info .stars em{
        position:absolute;
        left:0;
        top:0;
        height:100%;
        background:url(../../static/images/ic_stars_on.png) no-repeat;
    }    
</style>
