<template>
    <div class="game-details">
        <vue-header :headTitle="headTitle"></vue-header>
        <div class="game-banner">
          <img :src="details.bannerUrl">
        </div>
        <div class="inner-box">
          <div class="game-info">
            <div class="info-box">
              <div class="pic"><img :src="details.imgUrl"></div>
              <div class="text">
                <p class="name">id:{{id}}&nbsp;{{details.gameName}}</p>
                <p class="intr">{{details.intr}}</p>
                <p class="type">{{details.gameType}}&nbsp;|&nbsp;{{details.gameSize}}</p>
              </div>
            </div>
            <div class="opera-box">
              <a href="javascript:;" class="collect">收藏</a>
              <a href="javascript:;" class="share">分享</a>
            </div>
          </div>
        </div>
        <reco-game v-on:update="getData"></reco-game>           
    </div>
</template>
<script>
import Header from '@/components/Header'
import RecoGame from '@/components/RecoGame'

export default {
  name: 'Newgame',
  data(){
    return{
        headTitle:"游戏详情",
        id:'',
        details:{},
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData:function(){
      this.axios.get('/api/gamedetails')
      .then( res => {

        this.id = this.$route.params.id;
        this.headTitle = "游戏详情"+this.$route.params.id;
        let len = res.data.data.length;

        for(let i=0; i<len; i++){
          if(res.data.data[i].gameId == this.id){
            this.details = res.data.data[i];
          }
        }
      })
      .catch( error => {
        console.log(error)
      })
    },
  },
  components:{
    'vue-header':Header,
    'reco-game':RecoGame,
  },
}
</script>
<style scoped>
  .game-banner{width:100%; max-width:750px; margin:0 auto;}
  .game-banner img{width:100%;}
  .game-info{display:flex; align-items:center;}
  .game-info .info-box{flex:auto; overflow:hidden; display:flex; align-items:center;}
  .game-info .info-box .pic{width:1.3rem; height:1.3rem; flex:none;}
  .game-info .info-box .pic img{width:100%; height:100%; border-radius:10px;}
  .game-info .info-box .text{flex:auto; overflow:hidden; padding:0 0.15rem;}
  .game-info .info-box .text p{white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:#abaebe; font-size:12px; line-height:1.4em;}
  .game-info .info-box .text .name{color:#000; font-size:14px;}
  .game-info .opera-box{flex:none; display:flex;}
  .game-info .opera-box a{padding:5px 12px; border-radius:20px; border-width:1px; border-style:solid; font-size:14px; margin-left:0.12rem;}
  .game-info .opera-box .collect{border-color:#ff8972; color:#ff8972;}
  .game-info .opera-box .share{border-color:#ff6ea9; color:#ff6ea9;}  
</style>
