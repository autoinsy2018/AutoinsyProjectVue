<template>
  <div class="">
    <div class="allbox">
      <div class="allsize">
        全部结果 > 服务详情
      </div>
      <!---->
      <div class="centermy">
        <div class="rentd_title served_title">
          <h1 class="served_left">{{server.title}}</h1>
          <p><span>{{server.publishTime}}</span></p>
        </div>
        <div class="rentd_top rentd_tops">
          <div class="left rentd_title_p served_left">
            <div class="left served_list">
              <ul>
                <li>
                  <div class="served_li">
                    <ul>
                      <li>服务区域：
                        <div v-for="area in server.serviceArea">{{area}}</div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="left" @click="module">
                    <img src="../../assets/images/17.jpg" class="chatA"/>
                    <span style="display: none">{{server.qq}}</span>
                  </div>
                  <div class="left ml10">
                    <img src="../../assets/images/18.jpg"/><span style="display: none">{{server.weichat}}</span>
                  </div>
                <li>
                  <div class="served_li">
                    <ul>
                      <li>联系人：{{server.contacts}}</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="served_li">
                    <ul>
                      <li>商家地址：{{server.address}}<img src="../../assets/images/19.jpg"/></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div class="clear"></div>
              <input type="button" value="查看电话号码" class="rentd_title_btn" @click="showTelphone"/>
            </div>
            <div class="right served_p" style="width: auto;">
              <p style="font-size: 30px;color: #ff7300;">3小时/工时</p>
            </div>
          </div>
          <div class="left">
            <div class="rentd_left_box">
              <div class="rentd_box_title">沈阳西部汽配B102</div>
              <div class="rentd_box_icon">
                <span class="huang">会员2年</span>
                <img src="../../assets/images/15.jpg"/>
                <span class="fen">上升20</span>
                <div class="clear"></div>
              </div>
              <div class="rentd_block">
                <ul>
                  <li style="border-right: 1px solid #ddd">
                    <p style="font-size: 16px">27个月</p>
                    <p style="color: #999">加入英沈</p>
                  </li>
                  <li>
                    <p style="font-size: 16px">129个</p>
                    <p style="color: #999">发布帖子</p>
                  </li>
                </ul>
                <div class="clear"></div>
              </div>
              <div class="rentd_hui"></div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <!--top over-->
        <div class="left served_left_box">
          <div class="served_left_box_title">
            <ul>
              <li><a href="" class="title_color_li"> 商品介绍</a></li>
              <li><a href="javascript:"> 规格与包装</a></li>
              <li><a href="javascript:"> 售后保障</a></li>
              <li><a href="javascript:"> 商品评价</a></li>
              <li><a href="javascript:"> 本店好评商品</a></li>
            </ul>
            <div class="served_r"><input type="button" value="加入购物车"/></div>
            <div class="clear"></div>
          </div>
          <div class="served_top_box">
            <p>品牌:XX牌</p>
            <ul>
              <li>商品名称：{{server.storeName}}</li>
              <li>商品编号：{{server.service_code}}</li>
              <li>店铺：{{server.storeName}}</li>
              <li>产品毛重：2.0KG</li>
              <li>产品产地：中国大陆</li>
              <li>类别：{{server.serviceType}}</li>
            </ul>
            <div class="clear"></div>
          </div>
          <div class="served_p">
            <p>{{server.descript}}</p>
            <img v-bind:src="server.servicePhoto" width="790"/>
          </div>
        </div>
        <div class="right served_right_box">
          <div class="served_right_box_title">热门销售</div>
          <ul>
            <li>
              <img src="../../assets/images/03.jpg" width="178" height=""/>
              <p>这里是标题这里是标题这里是标题</p>
              <p>￥39.6</p>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <!--中间内容 over-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "ServeDetails",
    data() {
      return {
        server: '',
        height: document.body.clientHeight,
        width: document.body.clientWidth,
      }
    },
    mounted: function () {
      let serverId = this.$route.query.serverId;
      let _this = this;
      this.$axios({
        url: _this.HOME + '/service/getOne?service_id=' + serverId,
        method: 'post'
      }).then(res => {
        _this.server = res.data.data;
      })
      $('.chatQ').attr('style', 'min-height: ' + _this.height + '; min-width: ' + _this.width)
    },
    methods: {
      module: function (e) {
        this.$router.push({path: "/talk", query: {seller: this.server}});
      },
      showTelphone(e) {
        $(e.target).val(this.server.mobilePhoneNo);
      }
    }
  }
</script>

<style>
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .served_top_box p {
    text-align: left;
  }

  .served_p p {
    text-align: left;
  }

  .served_title {
    border-bottom: 1px solid #ddd !important;
    margin-bottom: 32px !important;
  }

  .served_left {
    width: 771px !important;
  }

  .served_list li {
    line-height: 40px !important;
  }

  .served_li li {
    float: left !important;
    padding: 0 5px !important;
  }

  .served_list li {
    width: 100%;
    float: left;
    text-align: left;
  }
</style>
