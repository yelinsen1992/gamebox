<template>
    <div class="header">
        <div class="back"  @click="$router.back(-1)"></div>
        <div class="title">{{headTitle}}</div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  props:{
      headTitle:String,
  },
}
</script>

<style scoped>
    .header{
        background: #f4ce09;
        background: linear-gradient(to right, #fee800,#f4ce09);
        position:relative;
    }
    .header .title{
        color:#000000;
        font-size:20px;
        line-height:20px;
        padding:12px 0;
        text-align:center;
    }
    .header .back{
        width:40px;
        height:40px;
        background:url(../../static/images/ic27_arrow.png) no-repeat center center;
        background-size:55% 55%;
        position:absolute; 
        top:0;
        bottom:0;
        left:5px;
        margin:auto;
    }
    @media screen and (max-width:320px){
        .header .title{padding:10px 0;}
        .header .back{background-size:50% 50%;}
    }
</style>
