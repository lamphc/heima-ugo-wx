<template>
  <view class="wrapper">
    <!-- 商品图片 -->
    <swiper
      class="pics"
      indicator-dots
      indicator-color="rgba(255, 255, 255, 0.6)"
      indicator-active-color="#fff"
    >
      <swiper-item :key="item.goods_id" v-for="item in goods.pics">
        <image :src="item.pics_big" />
      </swiper-item>
    </swiper>
    <!-- 基本信息 -->
    <view class="meta">
      <view class="price">￥{{goods.goods_price}}</view>
      <view class="name">{{goods.goods_name}}</view>
      <view class="shipment">快递: 免运费</view>
      <text class="collect icon-star">收藏</text>
    </view>
    <!-- 商品详情 -->
    <view class="detail">
      <!-- <view v-html="goods.goods_introduce"></view> -->
      <rich-text :nodes="goods.goods_introduce"></rich-text>
    </view>
    <!-- 操作 -->
    <view class="action">
      <button open-type="contact" class="icon-handset">联系客服</button>
      <!-- 购物车数量 -->
      <text class="cart-count" v-if="carts.length">{{carts.length}}</text>
      <text class="cart icon-cart" @click="goCart">购物车</text>
      <text @click="addCart" class="add">加入购物车</text>
      <text class="buy" @click="createOrder">立即购买</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      goods: null,
      carts: uni.getStorageSync("carts") || []
    };
  },
  onLoad(params) {
    this.getGoods(params.id);
  },
  methods: {
    addCart() {
      // 判断是否添加过
      let isAdd = this.carts.some(item => {
        if (item.goods_id === this.goods.goods_id) {
          // 有，只加数量
          item.goods_count++;
          return true;
        }
      });
      if (!isAdd) {
        const {
          goods_id,
          goods_name,
          goods_price,
          goods_small_logo
        } = this.goods;
        // 没有， 加入新的
        this.carts.push({
          goods_id,
          goods_name,
          goods_price,
          goods_small_logo,
          goods_count: 1,
               goods_checked: true
        });
      }
      // console.log(this.carts);
      // 存储本地
      uni.setStorageSync("carts", this.carts);
    },
    goCart() {
      uni.switchTab({
        url: "/pages/cart/index"
      });
    },
    createOrder() {
      uni.navigateTo({
        url: "/pages/order/index"
      });
    },
    async getGoods(goods_id) {
      const { msg, data } = await this.request({
        url: "/api/public/v1/goods/detail",
        data: { goods_id }
      });
      console.log(msg, data);
      if (msg.status === 200) {
        this.goods = data;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  margin-bottom: 100rpx;
  background-color: #f4f4f4;
}

.pics {
  height: 640rpx;
}

.meta {
  height: 250rpx;
  line-height: 1;
  padding: 30rpx 180rpx 30rpx 20rpx;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;

  .price {
    font-size: 36rpx;
    color: #ea4451;
    margin-bottom: 20rpx;
  }

  .name {
    color: #333;
    line-height: 1.4;
    font-size: 33rpx;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .shipment {
    font-size: 27rpx;
    color: #999;
    position: absolute;
    bottom: 30rpx;
  }

  .collect {
    width: 140rpx;
    height: 88rpx;
    text-align: center;
    box-sizing: border-box;
    border-left: 1rpx solid #ddd;
    font-size: 24rpx;
    color: #999;

    position: absolute;
    right: 10rpx;
    top: 91rpx;
  }

  [class*="icon-"]::before {
    display: block;
    font-size: 45rpx;
    margin-bottom: 10rpx;
  }
}

.detail image {
  width: 100%;
  height: 480rpx;
  margin-top: 20rpx;
}

.action {
  width: 100%;
  height: 98rpx;
  background-color: #fff;

  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  text {
    display: block;
  }

  .cart-count {
    position: absolute;
    width: 50rpx;
    height: 50rpx;
    font-size: 28rpx;
    background: #fd1800;
    color: #fff;
    border-radius: 100%;
    text-align: center;
    line-height: 50rpx;
    left: 260rpx;
    top: -10rpx;
  }

  .add,
  .buy {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210rpx;
    text-align: center;
    font-size: 27rpx;
    color: #fff;
  }

  .add {
    background-color: #f4b73f;
  }

  .buy {
    background-color: #ea4451;
  }

  button {
    padding: 0;
    border-radius: 0;
    background-color: #fff;

    &::after {
      border: none;
    }
  }

  button,
  .cart {
    flex: 1;
    text-align: center;
    color: #989898;
    font-size: 24rpx;
    box-sizing: border-box;
  }

  [class*="icon"]::before {
    display: block;
    font-size: 45rpx;
    margin-bottom: 2rpx;
  }
}
</style>
