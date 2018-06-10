
<template>
    <div class="newgame-list">
        <ul>
            <li v-for="(item,i) in NewGameList" :key="i">
                <router-link class="flex-auto" :to="{ name: 'GameDetails', params: { id:item.gameId}}">
                    <span class="rank"><em>{{i+1}}</em></span>
                    <div class="game-box">
                        <div class="game-info">
                            <img :src="item.imgUrl">
                            <div class="info">
                                <p class="name">id:{{item.gameId}}&nbsp;&nbsp;{{item.gameName}}</p>
                                <p class="stars"><em :style="{width:item.number*20 + '%'}"></em></p>
                                <p class="intr">{{item.intr}}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
                <a :href="item.downloadUrl" class="download">下载</a>
            </li>
        </ul>
        <div class="loadmore" @click="addData">点击加载更多</div>
    </div>
</template>
<script>
export default {
  name: 'NewGameList',
  data(){
    return{
        NewGameList:[],
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
        this.NewGameList = res.data.data;
      })
      .catch( error => {
        console.log(error)
      })
    },
    addData(){
      this.axios.get('/api/newgame')
      .then( res => {  
        // console.log(res.data);
        this.NewGameList = this.NewGameList.concat(res.data.data);
      })
      .catch( error => {
        console.log(error)
      })
    },
  }
}
</script>
<style scoped>
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
