<template>
  <div>
    <web-view :webview-styles="webviewStyles" src="https://itcast.cn" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      webviewStyles: {
        // 不支持小程序
        progress: {
          color: '#fd7809'
        }
      }
    }
  },
}
</script>

<style lang="sass" scoped>
</style>