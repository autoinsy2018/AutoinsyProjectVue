<template>
  <div class="">
    <div class="allsize">
      全部结果 > 租赁列表
    </div>
    <!---->
    <div class="centermy">
      <div class="serve_box">
        <section id="selection">
          <dl class="secitem">
            <dt class="secitem_brand">租金：</dt>
            <dd id="local">
              <a href="" class='select'>不限</a>
              <a href="javascript:">500元以下</a>
              <a href="javascript:">500-1000元</a>
              <a href="javascript:">1000-2000元</a>
              <a href="javascript:">2000-5000元</a>
            </dd>
          </dl>
          <dl class="secitem">
            <dt class="secitem_brand">面积：</dt>
            <dd id="local">
              <a href="" class='select'>不限</a>
              <a href="javascript:">10-30平</a>
              <a href="javascript:">30-50平</a>
              <a href="javascript:">50-80平</a>
              <a href="javascript:">100平以上</a>
            </dd>
          </dl>
          <dl class="secitem">
            <dt class="secitem_brand">方式：</dt>
            <dd id="local">
              <a href="" class='select'>不限</a>
              <a href="javascript:">汽配城出租</a>
              <a href="javascript:">商户出租</a>
            </dd>
          </dl>
        </section>
      </div>
      <div class="containnerWrap clearfix">
        <section id="mainlist" class="main clearfix pr">
          <div class="filterbar">
            <div class="filterbar-l">
              <div class="filterup" id="filterup">
                <a class="m1 sel" title="默认" href="#" rel="nofollow"><span>默认排序<em></em></span></a>
              </div>
              <span class="checkbox-ico" id="renzheng">
                            <a href="javascript:void(0);">只看认证</a>
                        </span>
            </div>
            <div class="filterbar-md">
              <a class="mdtj" style="display:inline-block;" rel="nofollow" target="_blank"
                 href="">想提升接单效果，请致电4008107258</a>
            </div>
          </div>
          <div id="infolist" class="cleft">
            <table id="jingzhun" class="small-tbimg ac_container" cellspacing="0" cellpadding="0">
              <tr data-sign="" class="ac_item" v-for="lease in leaseList">
                <td class="img">
                  <div class="ac_linkurl">
                    <router-link :to='{path: "/RentDetails", query: {leaseId: lease.leaseId}}'>
                      <img v-if="lease.leaseImageSet.length > 0" v-bind:src="lease.leaseImageSet[0].leaseImageUrl"/>
                    </router-link>
                  </div>
                </td>
                <td class="t">
                  <div class="tdiv">
                    <router-link :to='{path: "/RentDetails", query: {leaseId: lease.leaseId}}' class="t ac_linkurl">
                      {{lease.title}}
                    </router-link>
                    <p class="seller">
                      <router-link :to='{path: "/RentDetails", query: {leaseId: lease.leaseId}}' class='sellername ac_linkurl' rel="nofollow">
                        面积：{{lease.acreage}}
                      </router-link>
                    </p>
                    <p class="seller">
                      <router-link :to='{path: "/RentDetails", query: {leaseId: lease.leaseId}}' class='sellername ac_linkurl' rel="nofollow">
                        位置：{{lease.stallPosition}}
                      </router-link>
                    </p>
                    <p class="seller">
                      <router-link :to='{path: "/RentDetails", query: {leaseId: lease.leaseId}}' class='sellername ac_linkurl' rel="nofollow">发布时间：{{}}
                      </router-link>
                    </p>
                  </div>
                </td>
                <td class="vertop">
                  <p>{{lease.price}}</p>
                </td>
              </tr>
            </table>
          </div>
        </section>
        <div class="rent_right">
          <div class="rent_title">热销旺铺</div>
          <div class="rent_li">
            <ul>
              <li>
                <div class="rent_img"><img src="../../assets/images/05.jpg" width="160" height="120"/></div>
                <div class="rent_p">
                  <p>铁西/贵和/盛世华庭</p>
                  <p>两室 70平</p>
                  <p><span>1300/月</span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <!-- 分页开始 -->
      <div class="tcdPageCode"></div>
      <!-- 分页结束 -->
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "Rent",
    data() {
      return {
        leaseList: [],
        pages: '',
        cur: 1,
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/lease/getAllLease?page=' + _this.cur,
        method: 'POST'
      }).then(res => {
        _this.leaseList = res.data.data;
      })
    }
  }
</script>

<style scoped>

</style>
