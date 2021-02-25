<template>
  <view
    class="search"
    :class="{focused:isSearch}"
  >
    <view class="sinput">
      <input
        @confirm="goResult"
        @input="searchPrd"
        @focus="search"
        v-model="keyWord"
        type="text"
        placeholder="搜索"
      />
      <button @click="cancel">取消</button>
    </view>
    <view
      class="scontent"
      v-show="isSearch"
    >
      <div class="title">
        搜索历史
        <span
          @click="clearHistory"
          class="clear"
        ></span>
      </div>
      <div
        class="history"
        v-if="result.length===0"
      >
        <navigator
          :key="i"
          v-for="(item,i) in history"
          url="/packone/list/index"
        >{{item}}</navigator>
      </div>
      <!-- 结果 -->
      <scroll-view
        scroll-y
        class="result"
        v-else
      >
        <navigator
          :key="item.cat_id"
          v-for="item in result"
          url="/packone/list/index"
        >{{item.goods_name}}</navigator>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isSearch: false,
      keyWord: "",
      result: [],
      history: uni.getStorageSync("history") || []
    }
  },
  props: {
    activeId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clearHistory() {
      this.history = []
      uni.clearStorage()
    },
    goResult() {
      // 处理搜索历史
      this.history.push(this.keyWord)
      // 去重
      this.history = [...new Set(this.history)]
      uni.setStorage({
        key: "history",
        data: this.history
      })
      // 跳转结果页面
      uni.navigateTo({
        url: "/packone/list/index?query=" + this.keyWord
      })
    },
    search() {
      this.isSearch = true
      const pageHeight = uni.getSystemInfoSync().windowHeight + "px"
      uni.hideTabBar()
      this.$emit("search", pageHeight)
    },
    cancel() {
      this.isSearch = false
      uni.showTabBar()
      this.$emit("search", "auto")
      // 清楚搜索状态
      this.keyWord = ""
      this.result = []
    },
    // 获取搜索建议商品=》函数防抖处理
    searchPrd() {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        if (!this.keyWord) return
        const { msg, data } = await this.request({
          url: "/api/public/v1/goods/qsearch",
          data: {
            query: this.keyWord
            // cid: this.activeId
          }
        })
        console.log(data)
        if (msg.status === 200) {
          this.result = data
        }
      }, 600)
    }
  }
};
</script>

<style lang="scss">
// 搜索
.search {
  display: flex;
  flex-direction: column;
  .sinput {
    box-sizing: border-box;
    padding: 20rpx 16rpx;
    background: #ff2d4a;
    position: relative;
    //伪元素
    &::after {
      position: absolute;
      top: 28rpx;
      left: 302rpx;
      content: "";
      width: 44rpx;
      height: 44rpx;
      line-height: 1;
      background-image: url(https://static.botue.com/ugo/images/icon_search%402x.png);
      background-size: 32rpx;
      background-position: 6rpx center;
      background-repeat: no-repeat;
    }
    input {
      background: #fff;
      flex: 1;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      font-size: 24rpx;
      color: #bbb;
      border-radius: 5rpx;
    }
    button {
      display: none;
      margin-left: 20rpx;
      width: 150rpx;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      font-size: 24rpx;
      border-radius: 5rpx;
      background: transparent;
      color: #666;
    }
  }
  &.focused {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    .sinput {
      display: flex;
      background: #eee;
      input {
        text-align: left;
        padding-left: 60rpx;
      }
      button {
        display: block;
      }
      &::after {
        left: 30rpx;
      }
    }
  }
  .scontent {
    background: #fff;
    position: relative;

    flex: 1;
    padding: 27rpx;
    .title {
      font-size: 27rpx;
      line-height: 1;
      color: #333;
    }
    .clear {
      display: block;
      width: 27rpx;
      height: 27rpx;
      float: right;
      background-image: url(http://static.botue.com/ugo/images/clear.png);
      background-size: cover;
    }

    .history {
      padding-top: 30rpx;
      navigator {
        display: inline-block;
        line-height: 1;
        padding: 15rpx 20rpx 12rpx;
        background-color: #ddd;
        font-size: 24rpx;
        margin-right: 20rpx;
        margin-bottom: 15rpx;
        color: #333;
      }
    }

    .result {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #fff;
      navigator {
        line-height: 1;
        padding: 20rpx 30rpx;
        font-size: 24rpx;
        color: #666;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>