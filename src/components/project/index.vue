<template>
  <div class="">
    <div id="jd-dtgd" style="height: 343px;">
      <div class="dingbu">

        <div id="babab">
          <div id="news">
            <div class="mt">
              <h2>电商快报</h2>
              <div class="extra">
                <router-link to='/NewsDetails' class="zt">更多 ></router-link>
              </div>
            </div>
            <div class="mc">
              <ul>
                <li class="" v-for="notice in noticeList">
                  <span>
                    <!--<router-link-->
                    <!--:to='{path: "/NewsDetails", query: {newsId: news.newsID}}'>[{{news.content}}]</router-link>-->
                    <!--<router-link-->
                    <!--:to='{path: "/NewsDetails", query: {newsId: news.newsID}}'>{{news.newsTitle}}</router-link>-->
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--侧导航 over-->
        <div id="jiaodian">
          <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
            <div class="slideshow">
              <transition-group tag="ul" name="image">
                <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
                  <a href="#">
                    <img :src='img'>
                  </a>
                </li>
              </transition-group>
            </div>
            <div class="bullet">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
            @click="change(index)" :key="index"></span>
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <div id="log">
          <div id="index_login">
            <div class="index_login_title"><img src="../../assets/images/11.png"/></div>
            <p>HI，欢迎来到英沈汽配商城</p>
            <P><img src="../../assets/images/12.png"/>注册享受最低价</P>
            <input type="button" value="登录" class="index_btn"/>
            <input type="button" value="注册" class="index_btn"/>
            <img src="../../assets/images/13.png" height="143" width="200"/></div>
        </div>
        <!--banner 右边的新闻over-->
      </div>
    </div>
    <div class="sanceng">
      <div class="minceng">
        <img src="../../assets/picture/banner01.jpg"/>
      </div>
    </div>
    <!--广告图片 over-->
    <div class="index_lb">
      <div class="left index_lb_l">
        <div class="index_lb_title">
          <div class="title_img"><img src="../../assets/images/14.png"/></div>
          <ul>
            <li v-for="(goodType, index) in goodsTypeList" v-if="index<5" @click="changeActiver">
              <span v-bind:value="goodType.subTypeCode">{{goodType.subType}}</span>
              &nbsp;&nbsp;&nbsp;|
            </li>
            <li v-else-if="index===5">
              <button>更多</button>
            </li>
          </ul>
        </div>
        <div class="picScroll-left">
          <div class="hd">
            <!--<a class="next" href="javascript:void(0)"></a>-->
            <!--<a class="prev" href="javascript:void(0)"></a>-->
          </div>
          <div class="bd">
            <div class="tempWrap" style="overflow:hidden; position:relative; width:746px">
              <ul class="picList"
                  style="width: 746px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                <li style="float: left;" v-for="good in goods">
                  <div class="pic">
                    <a href="javascript:"><img v-bind:src="good.goodsPic"></a>
                  </div>
                  <div class="title">
                    <router-link :to="{path: '/ProjectDetails', query: {goodsId: good.goodsId}}">
                      <p>{{good.describe}}</p>
                      <p class="coler_7">${{good.price}}</p>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clear" style="margin-top: 20px"></div>
        <div class="index_lb_title">
          <div class="title_img"><img src="../../assets/images/15.png"/></div>
          <ul>
            <li><a href="javascript:">车门车窗</a></li>
            <li>|</li>
            <li><a href="javascript:">车门车窗</a></li>
            <li>|</li>
            <li><a href="javascript:">车门车窗</a></li>
            <li>|</li>
            <li><a href="javascript:">车门车窗</a></li>
          </ul>
        </div>
        <div class="picScroll-lefts">
          <div class="hd">
          </div>
          <div class="bd">
            <div class="tempWrap" style="overflow:hidden; position:relative; width:746px">
              <ul class="picList"
                  style="width: 746px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                <li style="float: left;" v-for="server in serverList">
                  <div class="pic">
                    <router-link :to="{path: '/ServeDetails', query: {serverId: server.serviceID}}"><img
                      v-bind:src="server.servicePhoto"></router-link>
                  </div>
                  <div class="title">
                    <router-link :to="{path: '/ServeDetails', query: {serverId: server.serviceID}}">{{server.title}}
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="left index_lb_r">
        <div class="index_right_title">
          <img src="../../assets/images/17.png"/>快速入口
        </div>
        <div class="index_r_img">
          <router-link to='/Recruitment'><img src="../../assets/images/18.png" height="99" width="220"/></router-link>
        </div>
        <div class="index_r_img">
          <router-link to='/Rent'><img src="../../assets/images/19.png" height="99" width="220"/></router-link>
        </div>
        <div class="index_right_title">
          <img src="../../assets/images/17.png"/>热门推荐
        </div>
        <div class="index_r_img">
          <a href="javascript:"><img src="../../assets/images/20.png" height="99" width="220"/></a>
        </div>
        <div class="index_r_img">
          <a href="javascript:"><img src="../../assets/images/21.png" height="99" width="220"/></a>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div id="sanceng">
      <div id="minceng">
        <img src="../../assets/picture/banner01.jpg"/>
      </div>
    </div>
    <!--广告图片 over-->
    <div class="index_news">
      <div class="index_zs_title">
        <div class="index_zs_p"><img src="../../assets/images/10.png"/>汽配装饰区</div>
        <ul>
          <li><a href="javascript:">头枕腰靠</a></li>
          <li>|</li>
          <li><a href="javascript:">挂件摆件</a></li>
          <li>|</li>
          <li><a href="javascript:">车载支架</a></li>
          <li>|</li>
          <li><a href="javascript:">空气净化</a></li>
          <li>|</li>
          <li><a href="javascript:">更多 >></a></li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="zs_tab_lb">
        <!--<div id="slideBoxs" class="slideBoxs">-->
        <!--<div class="bds">-->
        <!--<ul v-on:mouseover="stop()" v-on:mouseout="move()">-->
        <!--<li style="display: none;" v-for="(img, index) in imgArray" v-show="index===mark" :key="index">-->
        <!--<a href="javascript:">-->
        <!--<img v-bind:src="img" width="1002" height="363">-->
        <!--</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--<span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"-->
        <!--@click="change(index)" :key="index"></span>-->
        <!--</div>-->
        <!--&lt;!&ndash; 下面是前/后按钮代码&ndash;&gt;-->
        <!--</div>-->
        <div class="left left-img">
          <img v-bind:src="goods[0].goodsPic" height="362" width="211"/>
        </div>
        <div class="right right-table">
          <table>
            <tr class="toptable">
              <td v-if="index < 6" v-for="(adron, index) in adronList">
                <img v-bind:src="adron.goodsPic" height="251" width="196"/>
              </td>
            </tr>
            <tr class="bottomtable">
              <td v-for="(adron, index) in adronList" v-if="index < 10 && index>6">
                <img v-bind:src="adron.goodsPic" height="108" width="196"/>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="sanceng">
      <div class="minceng">
        <img src="../../assets/picture/banner02.jpg"/>
      </div>
    </div>
    <!--广告图片 over-->
    <div class="index_news">
      <div class="index_news_title">
        <div class="index_news_p"><img src="../../assets/images/8.png"/>新闻资讯</div>
        <ul>
          <li><a href="javascript:">改车一族</a></li>
          <li>|</li>
          <li><a href="javascript:">汽车贴图</a></li>
          <li>|</li>
          <li><a href="javascript:">汽车测评</a></li>
          <li>|</li>
          <li><a href="javascript:">我为车狂</a></li>
          <li>|</li>
          <li><a href="javascript:">车坛八卦</a></li>
          <li>|</li>
          <li><a href="javascript:">汽车商家 >></a></li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
      <div class="index_news_li">
        <ul>
          <li v-for="news in newsList">
            <div class="index_news_li_top">
              <div class="left">
                <router-link to='/NewsDetails'><img v-bind:src="news.imageUrl1" width="119" height="80"/>
                </router-link>
              </div>
              <div class="right">
                <p style="font-size: 18px;color: #333">
                  <router-link to='/NewsDetails'>{{news.newsTitle}}</router-link>
                </p>
                <p>
                  <router-link to='/NewsDetails'>{{news.content}}</router-link>
                </p>
              </div>
            </div>
            <div class="clear"></div>
            <!--<div class="index_news_ul">-->
            <!--<ul>-->
            <!--<li>-->
            <!--<router-link to='/NewsDetails'> ·改装一族 | 2014年石城车友会足球赛第一场zjp426</router-link>-->
            <!--</li>-->
            <!--<li>-->
            <!--<router-link to='/NewsDetails'>·汽车测评 | 银河主题涂装兰博基尼Aventador超级跑车</router-link>-->
            <!--</li>-->
            <!--<li>-->
            <!--<router-link to='/NewsDetails'>·汽车贴图 | 罗杰摩尔1970版阿斯顿马丁拍出90万美元</router-link>-->
            <!--</li>-->
            <!--<li>-->
            <!--<router-link to='/NewsDetails'>·汽车模型 | 最强欧翼：奔驰 SLS AMG 超级跑车美图</router-link>-->
            <!--</li>-->
            <!--<li>-->
            <!--<router-link to='/NewsDetails'>·汽车商家 | 2014年石城车友会足球赛第一场zjp426</router-link>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
          </li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    <!--新闻 over-->
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        goodsTypeList: [],
        serverList: [],
        server: [],
        newsList: [],
        goods: [],
        noticeList: [],
        adronList: [],
        valueFromParent: '',
        timer: null, //定时器
        mark: 0, //比对图片索引的变量
        imgArray: [
          require('../../assets/images/01.jpg'),
          require('../../assets/images/02.jpg'),
          require('../../assets/images/03.jpg'),
          require('../../assets/images/04.jpg'),
        ]
      }
    },
    mounted: function () {
      this.getGoodTypeList();
      this.getFourceGoodByTime();
      this.getAllNewsList();
      this.getServerList();
      this.getAllNotice();
      this.getSomeAdron();
    },
    watch: {
      goodsTypeList: function () {
        this.$nextTick(function () {
          let lis = $('.index_lb_title li');
          for (let i = 0; i < lis.length; i++) {
            if (i % 6 === 0) {
              $(lis[i]).children('span').addClass('activer')
            }
          }
        })
      }
    },
    created: function () {
      $(".picScroll-lefts").flexslider({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        vis: 4
      });
      this.valueFromParent = this.parentToChild
    },
    components: {},
    props: ['parentToChild'],
    methods: {
      getGoodTypeList: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/goodsType/getGoodsType?main_goods_type=2',
          method: 'post'
        }).then(res => {
          _this.goodsTypeList = res.data.data;
        }).catch(e => {
          console.log(e)
        });
      },
      getGoodByGoodType: function (subTypeCode) {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/goods/getGoodsByTypeCode?sub_type_code=' + subTypeCode,
          method: 'post'
        }).then(res => {
          _this.goods = res.data.data
        })
      },
      getServerList: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/service/getAllService',
        }).then(res => {
          _this.serverList = res.data.data;
        })
      },
      getFourceGoodByTime: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/goods/getFourGood'
        }).then(res => {
          _this.goods = res.data.data;
        })
      },
      changeActiver: function (e) {
        $('.index_lb_title').eq(0).children().children('li').children('span').removeClass("activer");
        $(e.target).addClass("activer")
      },
      getAllNewsList: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/news/allNews'
        }).then(res => {
          _this.newsList = res.data.data;
        });
      },
      getAllNotice: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/notice/all'
        }).then(res => {
          _this.noticeList = res.data.data;
        })
      },
      getSomeAdron: function () {
        let _this = this;
        this.$axios({
          url: _this.HOME + '/goods/listAdorn'
        }).then(res => {
          _this.adronList = res.data.data;
        })
      },
      autoPlay() {
        this.mark++;
        if (this.mark === 4) {
          this.mark = 0
        }
      },
      play() {
        this.timer = setInterval(this.autoPlay, 2500)
      },
      change(i) {
        this.mark = i
      },
      stop() {
        clearInterval(this.timer)
      },
      move() {
        this.timer = setInterval(this.autoPlay, 2500)
      }
    },
  }

</script>

<style>
  .slide {
    width: 800px;
    height: 331px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }

  .slideshow {
    width: 800px;
    height: 330px;
  }

  .slide li {
    position: absolute;
  }

  .slide img {
    width: 800px;
    height: 330px;
  }

  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }

  .bar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }

  .slide .active {
    background: red !important;
  }
</style>
