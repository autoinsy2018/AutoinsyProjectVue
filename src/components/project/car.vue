<template>
  <div class="centermy">
    <div class="car_title">
      <div class="left car_title_p">
        全部商品
      </div>
      <div class="right car_title_input">
        配送至：
        <select>
          <option>沈阳市于洪区</option>
        </select>
      </div>
      <div class="clear"></div>
    </div>
    <div class="car_top">
      <table>
        <thead>
        <tr>
          <td class="td0">
            <input type="checkbox" class="checkbox_all"/>全选
          </td>
          <td class="td1">
            商品
          </td>
          <td class="td2">
            单价
          </td>
          <td class="td3">
            数量
          </td>
          <td class="td4">
            小计
          </td>
          <td class="td5">
            操作
          </td>
        </tr>
        </thead>
        <tbody>
        <tr class="tr_b">
          <td class="td0">
            <input type="checkbox" class="checkbox_all"/>汽配城旗舰店
          </td>
          <td class="td1">

          </td>
          <td class="td2">

          </td>
          <td class="td3">

          </td>
          <td class="td4">

          </td>
          <td class="td5">

          </td>
        </tr>
        <tr class="tr_t" v-for="(cart, index) in cartList">
          <td class="td0">
            <input type="checkbox" class="checkbox_all left"/>
            <img v-bind:src="cart.commodityImg"/>
          </td>
          <td class="td1" valign="top">
            <ul>
              <li>
                <p>{{cart.commodityName}}</p>
              </li>
              <li>
                <p class="td1_p"></p>
              </li>
            </ul>
          </td>
          <td class="td2" valign="top">
            <p>￥{{cart.price}}</p>
          </td>
          <td class="td3" valign="top">
            <button @click="updatenum(0)">-</button>
            <input style="width: 25px;" v-bind:value="cart.purchaseQuantity"/>
            <button @click="updatenum(1)">+</button>
          </td>
          <td class="td4" valign="top">
            <p>￥{{cart.price * cart.purchaseQuantity}}</p>
          </td>
          <td class="td5" valign="top">
            <ul>
              <li><a href="javascript:">删除</a></li>
              <li><a href="javascript:">移到我的关注</a></li>
              <li><a href="javascript:">加到我的关注</a></li>
            </ul>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td class="td0">
            <input type="checkbox" class="checkbox_all"/>全选
          </td>
          <td class="td1">
            <a href="javascript:"> 删除选中的商品</a>
            <a href="javascript:"> 移到我的关注</a>
            <a href="javascript:"> 清理购物车</a>
          </td>
          <td class="td2">

          </td>
          <td class="td3">

          </td>
          <td class="td4 td4_zi">
            总价：<span>￥{{count}}</span>
          </td>
          <td class="td5">
            <input type="button" value="结算" class="td5_btn"/>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "car",
    data() {
      return {
        cur: 0,
        cartList: [],
        all: '',
        allElement: '',
        count: 0.00
      }
    },
    watch: {
      $nextTick: function () {
        console.log($('tbody').children('tr[class="tr_t"]'));
        // .children('td[class="td4"]'));
      }
    },
    mounted: function () {
      this.list();
    },
    methods: {
      computeCount() {
        let cartList = this.cartList;
        for (let i = 0; i < cartList.length; i++) {
          let cart = cartList[i];
          this.count += cart.price * cart.purchaseQuantity;
        }
      },
      list() {
        let _this = this;
        let userCode = sessionStorage.getItem("userCode");
        if (userCode) {
          this.$axios({
            url: _this.HOME + '/cart/list?page=' + _this.cur + '&userCode=' + userCode
          }).then(res => {
            _this.cartList = res.data.data.content;
            _this.all = res.data.data.totalPages;
            _this.allElement = res.data.data.totalElements;
            _this.computeCount();
          });
        } else {
          alert("您尚未登录，请在之后跳转的登录页面登录。");
          this.$router.push("/login")
        }
      },
      updatenum(num, e, $index) {
        if (this.quantity > 0) {
          if ($(e.target).index() === 2) {
            this.quantity++;
          } else if ($(e.target).index() === 0) {
            this.quantity--;
          }
        } else {
          alert("商品数量不能为0")
        }
      }
    }
  }
</script>

<style scoped>

</style>
