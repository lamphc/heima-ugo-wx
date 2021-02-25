<template>
  <view class="mapBox">
    <map
      :longitude="longitude"
      :latitude="latitude"
      :markers="markers"
      :scale="scale"
    ></map>
    <button
      type="primary"
      @tap="openPos"
    >打开位置</button>
    <button
      type="primary"
      @tap="selPos"
    >选择位置</button>
    <navigator
      url="/packmap/html/index"
      hover-class="className"
    >h5</navigator>

    <!-- <web-view src="https://itcast.cn" /> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      longitude: "",
      latitude: "",
      markers: [],
      scale: 14
    }
  },
  onLoad() {
    this.getPos()
  },
  methods: {
    async getPos() {
      let [err, data] = await uni.getLocation({
        type: "gcj02"
      })
      if (!err) {
        this.longitude = data.longitude
        this.latitude = data.latitude
        // 地图打点
        this.markers.push({
          id: 0,
          latitude: this.latitude,
          longitude: this.longitude
        })
      }
    },
    openPos() {
      // 116.616716,40.078094
      uni.openLocation({
        longitude: 116.616716,
        latitude: 40.078094
      })
    },
    selPos() {
      uni.chooseLocation({
        success: (res) => {
          console.log(res)
          this.latitude = res.latitude
          this.longitude = res.longitude
          this.scale = 12
          // 地图打点
          this.markers.push({
            id: 0,
            latitude: this.latitude,
            longitude: this.longitude
          })
        }
      })
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