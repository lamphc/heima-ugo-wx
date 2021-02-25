<template>
  <view>
    <!-- 筛选 -->
    <!-- <image style="height: 260rpx" src="../static/images/item_2.png" mode="" /> -->
    <view class="filter">
      <text class="active">综合</text>
      <text>销量</text>
      <text>价格</text>
    </view>
    <!-- 商品列表 -->
    <scroll-view
      @scrolltolower="getMore"
      class="goods"
      scroll-y
    >
      <view
        class="item"
        :key="item.cat_id"
        v-for="item in list"
        @click="goDetail(item.goods_id)"
      >
        <!-- 商品图片 -->
        <image
          class="pic"
          :src="item.goods_small_logo"
        />
        <!-- 商品信息 -->
        <view class="meta">
          <view class="name">{{ item.goods_name }}</view>
          <view class="price">
            <text>￥</text>
            {{ item.goods_price }}
            <text>.00</text>
          </view>
        </view>
      </view>
      <text
        class="nomore"
        v-if="nomore"
      >没有更多了...</text>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
    nomore() {
      return this.total === this.list.length
    }
  },
  onLoad(params) {
    this.query = params
    this.query.total = 0
    this.query.pagenum = 1
    this.query.pagesize = 5
    this.getList(this.query)
  },
  onReachBottom() {
    console.log("到底了...")
  },
  methods: {
    goDetail(id) {
      uni.navigateTo({
        url: "/packone/goods/index?id=" + id
      })
    },
    getMore() {
      if (this.nomore) return
      this.query.pagenum++
      console.log(this.query.pagenum)
      this.getList(this.query)
    },
    async getList(data) {
      const { msg, data: _d } = await this.request({
        url: "/api/public/v1/goods/search",
        data
      })
      !this.total && (this.total = _d.total)
      if (msg.status === 200) {
        this.list.push(..._d.goods)
        console.log(this.list)
      }
    }
  }
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  height: 96rpx;
  line-height: 96rpx;
  border-bottom: 1rpx solid #ddd;

  /* #ifdef H5 */
  position: relative;
  z-index: 99;
  /* #endif */

  text {
    flex: 1;
    text-align: center;
    font-size: 30rpx;
    color: #333;

    &.active {
      color: #ea4451;
    }
  }
}

.nomore {
  width: 100%;
  display: inline-block;
  text-align: center;
  margin: 20rpx 0;
  color: #888;
}

.goods {
  position: absolute;
  width: 100%;
  top: 97rpx;
  bottom: 0;
}

.item {
  display: flex;
  padding: 30rpx 20rpx 30rpx 0;
  margin-left: 20rpx;
  border-bottom: 1rpx solid #eee;

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
}
</style>
