<template>
    <div class="new-game">
        <vue-header :headTitle="headTitle"></vue-header>
        <div class="inner-box">
          <div class="list-title">
            <span class="title">新游推荐</span>
          </div>
          <newgame-list></newgame-list>
        </div>
        <div class="inner-box">
          <div class="list-title">
           <span class="title">新游上线</span>
          </div>
          <newgameOnline-list></newgameOnline-list>
        </div>        
    </div>
</template>
<script>
import Header from '@/components/Header'
import NewGameList from '@/components/NewGameList'
import NewGameOnlineList from '@/components/NewGameOnlineList'

export default {
  name: 'Newgame',
  data(){
    return{
        headTitle:"新游推荐",
        NewGameList:[],
    }
  },
  components:{
    'vue-header':Header,
    'newgame-list':NewGameList,
    'newgameOnline-list':NewGameOnlineList,
  },
}
</script>
<style scoped>

</style>
