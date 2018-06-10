//引入mockjs
import Mock from 'mockjs'
const Random = Mock.Random;

/* 产生随机整数 */
// function number(min,max){
//     var c = max-min+1;
//     return Math.floor(Math.random()*c+min)
// };

//首页轮播banner数据接口
let homeBanner={
    'imgUrl|5':[{
        'url': ()=>Random.dataImage('650x300', '首页banner'),
    }]
}
Mock.mock('/api/homebanner',homeBanner);

// 新游推荐
let newGameList={
    'data|4':[{
        'gameId|1000-1049':1000,
        'gameName': ()=>Random.cword(4,8), /* 生成一段中文 */
        'intr': ()=>Random.csentence(10,20), /* 生成一段句子 */
        'number': ()=>Random.integer(3,5), /* 生成整数 */
        'imgUrl': ()=>Random.dataImage('100x100', 'icon图片'), /* 生成一段随机的 Base64 图片编码 */
        'gameType|+1':['策略','动作','格斗','角色','竞速','经营','冒险','模拟','棋牌','射击','塔防','体育','休闲','养成','益智'],
        'gameSize|30-200.0-1':60.5,
        'downloadUrl' :'https://b.6kw.com/klrz/10000/0/e7f372ee4dbf1edc936eedfec9d6b8fb.apk',
    }]
}
Mock.mock('/api/newgame',newGameList)

// 日期分类新游
let newGameOnline ={
    'data|3':[{
        'date':()=>Random.datetime('MM月dd日'),
        'data|1-3':[{
            'gameId|1000-1049':1000,
            'gameName':()=> Random.cword(4,8),  /* 游戏名 */
            'intr': ()=>Random.csentence(10,20), /* 游戏介绍 */
            'number': ()=>Random.integer(3,5), /* 星级 最低3星最高5星*/
            'imgUrl': ()=>Random.dataImage('100x100', 'icon图片'), /* 游戏icon */
            'downloadUrl' :'https://b.6kw.com/klrz/10000/0/e7f372ee4dbf1edc936eedfec9d6b8fb.apk', /* 下载地址 */  
        }],        
    }]
}
Mock.mock('/api/newGameOnline',newGameOnline);

// 游戏详情
let gamedetails ={
    'data|50':[{
        'gameId|+1':['1000','1001','1002','1003','1004','1005','1006','1007','1008','1009','1010','1011','1012','1013','1014','1015','1016','1017','1018','1019','1020','1021','1022','1023','1024','1025','1026','1027','1028','1029','1030','1031','1032','1033','1034','1035','1036','1037','1038','1039','1040','1041','1042','1043','1044','1045','1046','1047','1048','1049','1050'],
        'gameName':()=> Random.cword(4,8),  /* 游戏名 */
        'intr': ()=>Random.csentence(10,20), /* 游戏介绍 */
        'intr_all':()=>Random.csentence(40,60),
        'number': ()=>Random.integer(3,5), /* 星级 最低3星最高5星*/
        'imgUrl': ()=>Random.dataImage('70x70', 'icon图片'), /* 游戏icon */
        'bannerUrl':()=>Random.dataImage('750x300', '游戏banner'),
        'gameType|+1':['策略','动作','格斗','角色','竞速','经营','冒险','模拟','棋牌','射击','塔防','体育','休闲','养成','益智'],
        'gameSize|30-800.1-2':60.5,
        'slideImg|5':[{
            'url':()=>Random.dataImage('200x300','轮播图'),
        }],
        'downloadUrl' :'https://b.6kw.com/klrz/10000/0/e7f372ee4dbf1edc936eedfec9d6b8fb.apk', /* 下载地址 */   
    }]
}
Mock.mock('/api/gamedetails',gamedetails);