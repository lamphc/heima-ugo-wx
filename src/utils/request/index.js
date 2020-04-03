/**
 * uni.request()封装
 * @param {*} param 请求参数
 */
// 基础地址
const BASE_URL = "https://www.zhengzhicheng.cn"
export default async function request({ url, method, data }) {
  uni.showLoading({
    title: '加载中...'
  });
  let [error, res] = await uni.request({
    url: BASE_URL + url,
    method,
    data
  });
  uni.hideLoading();
  if (!error) {
    const _data = {
      msg: res.data.meta,
      data: res.data.message
    }
    return _data
  }
}
// vue 插件形式
const MyRequest = {
  install(Vue, opts) {
    Vue.prototype.request = request
  }
}
export { MyRequest }