<template>
  <view>
    <button open-type="getUserInfo" @getuserinfo="getUser" type="primary">微信登录</button>
  </view>
</template>

<script>
export default {
  async onLoad() {
    const [serr, set] = await uni.getSetting();
    if (!serr && set.authSetting["scope.userInfo"]) {
      //  获取用户数据
      const [err, userInfo] = await uni.getUserInfo();
      // console.log(userInfo);
      this.login(userInfo);
    }
  },

  methods: {
    getUser(e) {
      //  获取用户数据
      // console.log(e);
      this.login(e.detail);
    },
    // 调用接口登录
    async login(user) {
      // 登录所需参数
      const { encryptedData, iv, rawData, signature } = user;
      // 用户登录凭证
      const [err, ldata] = await uni.login();
      // console.log(err, data);
      if (!err) {
        let { msg, data } = await this.request({
          url: "/api/public/v1/users/wxlogin",
          method: "post",
          data: {
            encryptedData,
            iv,
            rawData,
            signature,
            code: ldata.code
          }
        });
        if (msg.status === 200) {
          uni.setStorageSync("token", data.token);
          uni.navigateBack();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 600rpx;
  margin: 200rpx auto 0;
}
</style>