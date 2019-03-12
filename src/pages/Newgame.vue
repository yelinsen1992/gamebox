<template>
    <div class="new-game">
        <vue-header v-bind="post"></vue-header>
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
        post:{
          headTitle:"新游推荐",
          likes:10086,
          isPublished:true,
          commentIds:[0,1,2,3,4,5],
          type:"A",
          author:{
            name:'叶林森',
            age:27
          },
        },
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
