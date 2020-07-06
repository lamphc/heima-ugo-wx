<template>
  <view class="mapBox">
    <map :longitude="longitude" :latitude="latitude" scale="14"></map>
    <button type="primary" @tap="openPos">打开位置</button>
    <button type="primary" @tap="selPos">选择位置</button>

    <!-- <web-view src="https://itcast.cn" /> -->
  </view>
</template>

<script>
export default {
  data () {
    return {
      longitude: "",
      latitude: ""
    }
  },
  onLoad () {
    this.getPos()
  },
  methods: {
    async getPos () {
      let [err, data] = await uni.getLocation({
        type: "wgs84"
      })
      if (!err) {
        this.longitude = data.longitude
        this.latitude = data.latitude
      }
    },
    openPos () {
      uni.openLocation({
        longitude: this.longitude,
        latitude: this.latitude
      })
    },
    selPos () {
      uni.chooseLocation()
    }
  }
};
</script>

<style lang="scss">
.mapBox,
page {
  width: 100%;
  height: 100%;
  map {
    width: 100%;
    height: 60%;
  }
}
</style>