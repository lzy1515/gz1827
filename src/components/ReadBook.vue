<template>
  <div class="read">
    <div class="rea" ref="menu">
      <div class="top" v-show="isShow">
        <a class="list_a1" @click="$emit('close')"></a>
        <div class="read-head">
          <a class="list_a2"></a>
          <a class="list_a3"></a>
          <a class="list_a4" @click="home"></a>
        </div>
      </div>
      <div class="text">
        <div @click="showToggle">
          <p class="title">{{red.chapters[index].title}}</p>
          <pre class="container">
          {{red.chapters[index].contn}}
          </pre>
        </div>
        <div class="upage">
          <a class="zj-btn" @click="showT">菜单</a>
          <a class="btn-3" @click="next">下一章</a>
        </div>
      </div>
      <div class="bottom" v-show="isShow">
        <a class="icon-1" :style="upp" @click="up"></a>
        <a class="icon-2" @click="showCatalog"></a>
        <a class="icon-3" @click="$emit('close')"></a>
        <a class="icon-4"></a>
        <a class="icon-5" :style="down" @click="next"></a>
      </div>
      <Catalog v-show="show" :red="red" @close="closeDetail" @childindex="childindex"></Catalog>
    </div>
  </div>
</template>

<script>
  import Catalog from './Catalog.vue'
  export default{
    data() {
      return {
        red: this.$route.params.id,
        isShow: false,
        index: 0,
        show: false
      }
    },
    computed: {
      upp() {
        return this.index === 0 ? 'background-position: center -512px' : 'background-position: center -403px'
      },
      down() {
        return this.index === this.red.chapters.length - 1 ? 'background-position: center -570px' : 'background-position: center -461px'
      }
    },
    methods: {
      childindex(val) {
        this.index = val
      },
      showToggle() {
        this.isShow = !this.isShow
      },
      showT() {
        this.isShow = true
      },
      home() {
        this.$router.push('/Synthesize')
      },
      showCatalog() {
        this.show = true
        this.isShow = false
      },
      closeCatalog() {
        this.show = false
      },
      closeDetail() {
        this.show = false
      },
      next() {
        if (this.index < this.red.chapters.length - 1) {
          window.parent.scrollTo(0, 0)
          this.index++
          this.isShow = false
        }
      },
      up() {
        if (this.index > 0) {
          window.parent.scrollTo(0, 0)
          this.index--
          this.isShow = false
        }
      }
    },
    components: {
      Catalog
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .read
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    z-index: 5
    background: #fff
    .top
      width: 100%
      position: fixed
      top: 0
      left: 0
      height: 47px
      background: #0c8bca
      .list_a1
        display: inline-block
        width: 36px
        height: 47px
        padding: 0 5px 0 14px
        background: url("../public/img/reader_icon.png") no-repeat 14px 10px
        background-size: 36px 727px
      .read-head
        display: inline-block
        height: 47px
        float: right
        a
          display: inline-block
          width: 36px
          height: 47px
          padding: 0 10px
        .list_a2
          background: url("../public/img/reader_icon.png") no-repeat 10px -28px
          background-size: 36px 727px
        .list_a3
          background: url("../public/img/reader_icon.png") no-repeat 10px -67px
          background-size: 36px 727px
        .list_a4
          background: url("../public/img/reader_icon.png") no-repeat 10px -625px
          background-size: 36px 727px
    .text
      padding: 0 12px 0 18px
      font-size: 18px
      line-height: 30px
      .container
        white-space: pre-wrap
        word-wrap: break-word
        text-indent: 36px
      .upage
        display: -webkit-box
        box-sizing: border-box
        margin: 28px 20px 18px 20px
        .zj-btn, .btn-3
          display: block
          background: #0c8bca
          color: #fff
          height: 35px
          font-size: 16px
          text-align: center
        .zj-btn
          width: 20%
          margin-right: 5px
        .btn-3
          width: 80%
    .bottom
      display: flex
      width: 100%
      height: 56px
      position: fixed
      bottom: 0
      left: 0
      background: #0c8bac
      a
        flex: 1
        background: url("../public/img/reader_icon.png") no-repeat
        background-size: 36px 727px
      .icon-2
        background-position: center -292px
      .icon-3
        background-position: center -348px
      .icon-4
        background-position: center -670px

</style>
