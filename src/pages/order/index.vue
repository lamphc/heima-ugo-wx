<template>
  <view class="wrapper">
    <!-- 订单状态 -->
    <view class="tabs">
      <text class="active">全部</text>
      <text>待付款</text>
      <text>已付款</text>
      <text>退款/退货</text>
    </view>
    <!-- 订单 -->
    <scroll-view class="orders" scroll-y>
      <view v-for="order in orders" :key="order.order_id" class="item">
        <!-- 商品图片 -->
        <block v-for="good in order.goods" :key="good.goods_id">
          <image class="pic" :src="good.goods_small_logo" />
          <!-- 商品信息 -->
          <view class="meta">
            <view class="name">{{good.goods_name}}</view>
            <view class="price">
              <text>￥</text>
              {{good.goods_price}}
              <text>.00</text>
            </view>
            <view class="num">x{{good.goods_number}}</view>
          </view>
        </block>
        <!-- 总价 -->
        <view class="amount">共{{order.total_count}}件商品 总计: ￥{{order.total_price}}(含运费0.00)</view>
        <!-- 其它 -->
        <view class="extra">
          订单号: {{order.order_number}}
          <button
            @click="pay(order.order_number)"
            size="mini"
            type="primary"
          >支付</button>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orders: []
    };
  },
  methods: {
    async getOrders() {
      // 判断是否登录
      if (!uni.getStorageSync("token")) {
        return uni.navigateTo({ url: "/pages/auth/index" });
      }
      // 获取订单列表
      let { msg, data } = await this.request({
        url: "/api/public/v1/my/orders/all",
        header: {
          Authorization: uni.getStorageSync("token")
        },
        data: {
          type: 1
        }
      });
      if (msg.status === 200) {
        this.orders = data.orders;
      }
    },
    // 支付
    async pay(order_number) {
      //  发送支付请求
      let { msg, data } = await this.request({
        url: "/api/public/v1/my/orders/req_unifiedorder",
        header: {
          Authorization: uni.getStorageSync("token")
        },
        method: "post",
        data: {
          order_number
        }
      });
      if (msg.status === 200) {
        // 调起微信支付窗口
        let [err, msg] = await uni.requestPayment(data.pay);
        if (!err) {
          uni.showToast({
            title: "支付成功！",
            duration: 2000
          });
        }
      }
    }
  },
  onLoad() {
    this.getOrders();
  }
};
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  height: 96rpx;
  line-height: 96rpx;
  background-color: #fff;
  box-shadow: 0 4rpx 10rpx #ccc;

  text {
    flex: 1;
    text-align: center;
    font-size: 27rpx;
    color: #333;

    &.active {
      color: #ea4451;
    }
  }
}

.orders {
  width: 100%;
  background-color: #f4f4f4;

  position: absolute;
  top: 97rpx;
  bottom: 0;
}

.item {
  padding: 30rpx 20rpx 0;
  margin-top: 16rpx;
  background-color: #fff;

  .pic {
    width: 200rpx;
    height: 200rpx;
    float: left;
  }

  .meta {
    height: 200rpx;
    margin-left: 230rpx;
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

  .num {
    position: absolute;
    bottom: 0;
    right: 20rpx;
    color: #333;
  }

  .amount {
    text-align: right;
    padding: 20rpx;
    font-size: 24rpx;
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    margin-top: 20rpx;
    color: #999;
  }

  .extra {
    padding: 30rpx;
    font-size: 24rpx;
    color: #999;
    position: relative;

    button {
      position: absolute;
      right: 20rpx;
      font-size: 24rpx;
      margin-top: -10rpx;
    }
  }
}
</style>
