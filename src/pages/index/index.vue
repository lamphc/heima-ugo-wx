<template>
  <view class="index" :style="{overflow:'hidden',height:pageHeight}">
    <!-- 搜索 -->
    <search @search="disScroll" />
    <!-- 轮播图 -->
    <view class="slider">
      <swiper
        autoplay
        interval="2000"
        circular
        indicator-dots
        indicator-color="rgba(255,255,255,1)"
        indicator-active-color="rgba(255,255,255,.6)"
      >
        <swiper-item :key="item.goods_id" v-for="item in swiper">
          <navigator :url="`/pages/goods/index?id=${item.goods_id}`">
            <image :src="item.image_src" />
          </navigator>
        </swiper-item>
      </swiper>
    </view>
    <!-- 功能导航 -->
    <view class="navs">
      <navigator
        :open-type="item.open_type || 'navigate'"
        :url="index===0? '/pages/category/index':'/pages/list/index?query=' + item.name"
        :key="index"
        v-for="(item,index) in navs"
      >
        <image :src="item.image_src" />
      </navigator>
    </view>
    <!-- 栏目楼层 -->
    <view class="floors">
      <!-- 1 -->
      <view class="floor" :key="item.name" v-for="item in floors">
        <!-- title -->
        <view class="ftitle">
          <image :src="item.floor_title.image_src" />
        </view>
        <!-- pics -->
        <view class="fitem">
          <navigator
            :url="'/pages/list/index?query=' +prd.name"
            :key="prd.name"
            v-for="prd in item.product_list"
          >
            <image :src="prd.image_src" />
          </navigator>
        </view>
      </view>
    </view>
    <!-- 底部提示 -->
    <view class="end">
      <text>我是有底线的！</text>
    </view>
    <!-- 回到顶部 -->
    <view class="goTop icon-top" @click="goTop" v-if="isShow"></view>
  </view>
</template>

<script>
// 导入组件
import search from "@/components/search";
// import request from "@/utils/request";
export default {
  data() {
    return {
      pageHeight: "auto",
      scrollTop: 0,
      swiper: [],
      navs: [],
      floors: []
    };
  },
  computed: {
    isShow() {
      return this.scrollTop > this.wh;
    }
  },
  // 注册组件
  components: {
    search
  },
  onLoad() {
    this.wh = uni.getSystemInfoSync().windowHeight / 2;
    this.getSwiper();
    this.getNavs();
    this.getFloors();
  },
  onReachBottom() {
    console.log("bt...");
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onPullDownRefresh() {
    Promise.all([this.getSwiper(), this.getNavs(), this.getFloors()]).then(
      () => {
        // 执行完停止loading
        uni.stopPullDownRefresh();
      }
    );
  },
  methods: {
    goTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    // 搜索时禁止页面滚动
    disScroll(e) {
      this.pageHeight = e;
    },
    async getSwiper() {
      const res = await this.request({
        url: "/api/public/v1/home/swiperdata"
      });
      if (res.msg.status === 200) {
        this.swiper = res.data;
      }
    },
    async getNavs() {
      const res = await this.request({
        url: "/api/public/v1/home/catitems"
      });
      if (res.msg.status === 200) {
        this.navs = res.data;
      }
    },
    async getFloors() {
      const res = await this.request({
        url: "/api/public/v1/home/floordata"
      });
      if (res.msg.status === 200) {
        this.floors = res.data;
      }
    }
  }
};
</script>

<style lang="scss">
.index {
  // 轮播
  .slider {
    swiper,
    image {
      width: 750rpx;
      height: 340rpx;
    }
  }
  // 功能导航
  .navs {
    display: flex;
    padding: 30rpx;
    background: #fff;
    justify-content: space-between;
    navigator {
      width: 128rpx;
      height: 140rpx;
    }
  }

  // 栏目楼层
  .floor {
    .ftitle {
      padding-top: 30rpx;
      background: #f4f4f4;
      image {
        width: 750rpx;
        height: 60rpx;
      }
    }
    // pics
    .fitem {
      padding: 20rpx 16rpx 10rpx;
      overflow: hidden;
      navigator {
        float: left;
        width: 193rpx;
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
      }
      navigator:nth-child(1) {
        width: 232rpx;
        height: 386rpx;
        margin-left: 0;
      }
      navigator:nth-child(2),
      navigator:nth-child(5) {
        width: 273rpx;
        height: 188rpx;
      }
    }
    &:first-child {
      .fitem {
        navigator {
          width: 233rpx;
        }
      }
    }
  }
  .end {
    text-align: center;
    font-size: 24rpx;
    color: #999;
  }
  .goTop {
    position: fixed;
    bottom: 30rpx;
    /* #ifdef H5 */
    bottom: 65px;
    /* #endif */
    right: 30rpx;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100rpx;
    height: 100rpx;
    font-size: 48rpx;
    color: #666;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>
