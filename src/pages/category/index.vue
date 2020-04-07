<template>
  <view v-if="cates.length">
    <!-- 搜索 -->
    <search :activeId="activeId" />
    <!-- 分类 -->
    <view class="category">
      <!-- 顶级分类 -->
      <view class="sup">
        <scroll-view scroll-y>
          <text
            @click="switchCate(i)"
            :class="{active:i === active}"
            :key="item.cat_id"
            v-for="(item,i) in cates"
          >{{item.cat_name}}</text>
        </scroll-view>
      </view>
      <!-- 子级分类 -->
      <view class="sub">
        <scroll-view scroll-y>
          <!-- 封面图 -->
          <image src="http://static.botue.com/ugo/uploads/category.png" class="thumb" />
          <view class="children" :key="item.cat_id" v-for="item in sub">
            <view class="title">{{item.cat_name}}</view>
            <!-- 品牌 -->
            <view class="brands">
              <navigator
                :url="'/pages/list/index?query='+it.cat_name"
                :key="it.cat_id"
                v-for="it in item.children"
              >
                <image :src="it.cat_icon" />
                <text>{{it.cat_name}}</text>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import search from "@/components/search";

export default {
  data() {
    return {
      cates: [],
      active: 0,
      activeId: 0
    };
  },
  computed: {
    sub() {
      return this.cates.length && this.cates[this.active].children;
    }
  },
  methods: {
    switchCate(index) {
      this.active = index;
      this.activeId = this.cates[index].cat_id;
      console.log(this.activeId);
    },
    async getCate() {
      const { msg, data } = await this.request({
        url: "/api/public/v1/categories"
      });
      console.log(msg, data);
      if (msg.status === 200) {
        this.cates = data;
        // 处理默认选中ID
        this.activeId = data[0].cat_id;
      }
    }
  },
  onLoad() {
    this.getCate();
  },
  components: {
    search
  }
};
</script>

<style scoped lang="scss">
scroll-view {
  height: 100%;
}

.category {
  display: flex;
  width: 100%;
  position: absolute;
  top: 100rpx;
  bottom: 0;

  .sup {
    width: 196rpx;
    background-color: #f4f4f4;

    text {
      display: block;
      height: 100rpx;
      text-align: center;
      line-height: 100rpx;
      font-size: 27rpx;
      color: #333;
      border-bottom: 1rpx solid #eee;

      &:last-child {
        border-bottom: none;
      }

      &.active {
        background-color: #fff;
        color: #ea4451;
        position: relative;

        &::before {
          content: "";
          display: block;
          width: 8rpx;
          height: 60rpx;
          transform: translateY(-50%);
          background-color: #ea4451;

          position: absolute;
          left: 0;
          top: 50%;
        }
      }
    }
  }

  .sub {
    flex: 1;
    padding: 20rpx 18rpx;

    .thumb {
      width: 100%;
      height: 180rpx;
    }

    .children {
      text-align: center;
      color: #333;

      .title {
        display: inline-block;
        margin: 40rpx 0 20rpx;
        font-size: 30rpx;

        &::before {
          content: "/";
          margin-right: 20rpx;
          color: #666;
        }

        &::after {
          content: "/";
          margin-left: 20rpx;
          color: #666;
        }
      }
    }

    .brands {
      display: flex;
      flex-wrap: wrap;

      navigator {
        width: 33%;
        margin-bottom: 20rpx;
      }

      image {
        width: 120rpx;
        height: 120rpx;
      }

      text {
        display: block;
        font-size: 24rpx;
      }
    }
  }
}
</style>
