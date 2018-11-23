<template>
  <div id="app">
    <router-view :hotList="hotList"></router-view>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          hotList: []
        }
      },
    name: 'App',
    created() { // 生命周期 在实例创建完成后被立即调用
      this.axios('/api/hotList')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.hotList = res.data
          }
        })
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>
