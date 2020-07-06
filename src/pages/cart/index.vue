<template>
  <view class="wrapper">
    <!-- 收货信息 -->
    <view class="shipment">
      <block v-if="address">
        <view class="dt">收货人:</view>
        <view class="dd meta">
          <text class="name">{{address.userName}}</text>
          <text class="phone">{{address.telNumber}}</text>
        </view>
        <view class="dt">收货地址:</view>
        <view class="dd">{{addr}}</view>
      </block>
      <!-- 获取用户地址 -->
      <button v-else @click="getAddress">获取收获地址</button>
    </view>
    <!-- 购物车 -->
    <view class="carts">
      <view class="item">
        <!-- 店铺名称 -->
        <view class="shopname">优购生活馆</view>
        <view class="goods" :key="item.goods_id" v-for="(item,index) in carts">
          <!-- 商品图片 -->
          <image class="pic" :src="item.goods_small_logo" />
          <!-- 商品信息 -->
          <view class="meta">
            <view class="name">{{item.goods_name}}</view>
            <view class="price">
              <text>￥</text>
              {{item.goods_price}}
              <text>.00</text>
            </view>
            <!-- 加减 -->
            <view class="amount">
              <text class="reduce" @click="changeCount(index, -1)">-</text>
              <input
                type="number"
                @blur="handlerCount($event,index)"
                v-model="item.goods_count"
                class="number"
              />
              <text class="plus" @click="changeCount(index, 1)">+</text>
            </view>
          </view>
          <!-- 选框 -->
          <view class="checkbox">
            <icon
              @click="selPrd(index)"
              type="success"
              size="20"
              :color="item.goods_checked?'#ea4451':'#ccc'"
            ></icon>
          </view>
        </view>
      </view>
    </view>
    <!-- 其它 -->
    <view class="extra">
      <label class="checkall" @click="selAll">
        <icon type="success" :color="isAll?'#ea4451':'#ccc'" size="20"></icon>全选
      </label>
      <view class="total">
        合计:
        <text>￥</text>
        <label>{{amount}}</label>
        <text>.00</text>
      </view>
      <view @click="createOrder" class="pay">结算({{checkedPrd.length}})</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      carts: [],
      address: null
    }
  },
  onShow () {
    this.getCarts()
  },
  computed: {
    addr () {
      return (
        this.address &&
        this.address.provinceName +
        this.address.cityName +
        this.address.countyName +
        this.address.detailInfo
      )
    },
    // 是否全部选中
    isAll () {
      return (
        this.checkedPrd.length === this.carts.length && this.carts.length !== 0
      )
    },
    // 当前选中的商品
    checkedPrd () {
      return this.carts.filter(item => item.goods_checked)
    },
    // 总金额
    amount () {
      let total = 0
      this.checkedPrd.forEach(item => {
        total += item.goods_price * item.goods_count
      })
      return total
    }
  },
  // onLoad() {
  //   this.getCarts();
  // },
  methods: {
    // 创建订单
    async createOrder () {
      // 有货地址和选中至少一件商品
      if (!this.address || !this.checkedPrd.length) {
        return uni.showToast({
          title: "请填写收货地址和添加商品！",
          icon: "none"
        })
      }
      // 是否登录
      if (!uni.getStorageSync("token")) {
        return uni.navigateTo({
          url: "/pages/auth/index"
        })
      }

      // 调用接口：创建订单
      let { data, msg } = await this.request({
        url: "/api/public/v1/my/orders/create",
        method: "post",
        header: {
          Authorization: uni.getStorageSync("token")
        },
        data: {
          order_price: this.amount,
          consignee_addr: this.addr,
          goods: this.checkedPrd.map(item => {
            item.goods_number = item.goods_count
            return item
          })
        }
      })
      if (msg.status === 200) {
        // 清空购物车
        uni.removeStorage({
          key: "carts"
        })
        // 跳转订单页面
        uni.navigateTo({ url: "/pages/order/index" })
      } else {
        uni.showToast({
          icon: "none",
          title: msg.msg
        })
      }
    },
    getAddress () {
      uni.chooseAddress({
        success: res => {
          // console.log(res);
          this.address = res
        }
      })
    },
    updateStorage () {
      uni.setStorageSync("carts", this.carts)
    },
    handlerCount (e, i) {
      console.log(e.detail.value)
      let val = parseInt(e.detail.value)
      console.log("h", val)
      if (!val || isNaN(val) || val < 1) {
        this.carts[i].goods_count = 1
      } else if (val > 10) {
        this.carts[i].goods_count = 10
      } else {
        this.carts[i].goods_count = val
      }
      // console.log(this.carts[i].goods_count, val);
    },
    selAll () {
      if (this.isAll) {
        this.carts.forEach(item => (item.goods_checked = false))
      } else {
        this.carts.forEach(item => (item.goods_checked = true))
      }
      this.updateStorage()
    },
    selPrd (index) {
      this.carts[index].goods_checked = !this.carts[index].goods_checked
      this.updateStorage()
    },
    changeCount (index, step) {
      // 处理边界
      let count = this.carts[index].goods_count
      if (step === 1 && count >= 3) {
        return
      } else if (step === -1 && count === 1) {
        return
      }
      this.carts[index].goods_count += step
      // console.log(this.carts[index].goods_count);
      this.updateStorage()
    },
    getCarts () {
      this.carts = uni.getStorageSync("carts") || []
    }
  }
};
</script>

<style scoped lang="scss">
.shipment {
  height: 100rpx;
  line-height: 2;
  padding: 30rpx 30rpx 40rpx 30rpx;
  font-size: 27rpx;
  color: #333;
  background-color: #fff;
  background-image: url(http://static.botue.com/ugo/images/cart_border%402x.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  .dt {
    width: 140rpx;
    float: left;
    clear: both;
  }

  .dd {
    padding-left: 160rpx;
  }

  .meta {
    padding-right: 50rpx;
  }

  text.phone {
    float: right;
  }
}

.carts {
  background-color: #f4f4f4;
  padding-bottom: 110rpx;
  overflow: hidden;

  .shopname {
    padding: 30rpx;
    margin-top: 20rpx;
    font-size: 30rpx;
    color: #333;
    background-color: #fff;
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
  }

  .goods {
    display: flex;
    padding: 30rpx 20rpx 30rpx 0;
    margin-left: 100rpx;
    border-bottom: 1rpx solid #eee;
    background-color: #fff;

    position: relative;

    .checkbox {
      width: 101rpx;
      height: 100%;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      left: -100rpx;
      top: 0;
    }

    &:last-child {
      border-bottom: none;
    }

    .pic {
      width: 200rpx;
      height: 200rpx;
      margin-right: 30rpx;
    }

    .meta {
      flex: 1;
      font-size: 27rpx;
      color: #333;
      position: relative;
    }

    .name {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      position: absolute;
      bottom: 0;

      color: #ea4451;
      font-size: 33rpx;

      text {
        font-size: 22rpx;
      }
    }

    .amount {
      position: absolute;
      bottom: 0;
      right: 20rpx;

      height: 48rpx;
      text-align: center;
      border: 1rpx solid #ddd;
      border-radius: 8rpx;

      display: flex;
      align-items: center;

      text {
        display: block;
        width: 60rpx;
        line-height: 48rpx;
        font-size: 36rpx;
        color: #ddd;
        text-align: center;
      }

      input {
        width: 60rpx;
        height: 48rpx;
        min-height: 48rpx;
        font-size: 27rpx;
        border-left: 1rpx solid #ddd;
        border-right: 1rpx solid #ddd;
      }
    }
  }
}

.extra {
  position: fixed;
  bottom: 0;
  /* #ifdef H5 */
  bottom: 50px;
  /* #endif */
  left: 0;
  z-index: 9;

  width: 750rpx;
  height: 96rpx;
  text-align: center;
  line-height: 96rpx;
  font-size: 36rpx;
  border-top: 1rpx solid #eee;
  background-color: #fff;
  color: #333;
  display: flex;

  .checkall {
    width: 140rpx;
    line-height: 1;
    margin-left: 25rpx;
    display: flex;
    align-items: center;

    icon {
      margin-right: 20rpx;
    }
  }

  .total {
    display: flex;
    justify-content: center;
    flex: 1;

    label,
    text {
      color: #ea4451;
      vertical-align: bottom;
      position: relative;
      bottom: -2rpx;
    }

    text {
      position: relative;
      bottom: -3rpx;
      font-size: 24rpx;

      &:first-child {
        margin-left: 10rpx;
      }
    }
  }

  .pay {
    width: 200rpx;
    background-color: #ea4451;
    color: #fff;
  }
}
</style>

