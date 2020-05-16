/**
 * uni.request()封装
 * @param {*} param 请求参数
 */
// 基础地址备用：https://api-ugo-dev.itheima.net
const BASE_URL = 'https://ugo.botue.com'
// const BASE_URL = 'https://api-ugo-dev.itheima.net'
export default async function request({ url, method, data, header }) {
  uni.showLoading({
    title: '加载中...',
    mask: true
  });
  let [error, res] = await uni.request({
    url: BASE_URL + url,
    header,
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