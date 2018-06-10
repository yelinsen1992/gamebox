<template>
    <div class="inner_topnav">
        <div class="title">{{title}}</div>
        <router-link to="/"><div class="btn_back"></div></router-link>
    </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props:{
      title:{
          type: String,
          required:true,
      }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.inner_topnav{background:#ff9900; background:linear-gradient(to right, #ff9800, #ff7300); line-height:53px; height:53px; width:100%; position:relative}
.inner_topnav .title{display:block; font-size:20px; color:#FFF; text-align:center; line-height:53px; height:53px; width:200px; margin:0 auto}
.inner_topnav .btn_back{display:block; background:url(../assets/images/back.png) no-repeat; background-size:53px; width:53px; height:53px; position:absolute; top:0px; left:0px}
.inner_topnav .btn_quit{display:block; background:url(../assets/images/quit.png) no-repeat; background-size:53px; width:53px; height:53px; position:absolute; top:0px; right:0px}
</style>
