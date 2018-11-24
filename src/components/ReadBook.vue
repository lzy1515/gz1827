<template>
  <div class="read">
    <div class="rea" ref="menu">
      <div class="top" v-show="isShow">
        <div class="config" v-show="bgshow">
          <p>字体大小</p>
          <div class="size">
            <a v-for="item in sizelist" :key="item.index" @click="sizebtn(item);changesize(item.index)"
               :class="{active:item.index === sizeIndex}"><b></b>{{item.text}}</a>
          </div>
          <p>背景设置</p>
          <div class="bg">
            <a v-for="item in bglist" :key="item.index" @click="bgbtn(item);changebgcolor(item.index)"
               :class="{active:item.index === bgIndex}"><b></b>{{item.text}}</a>
          </div>
        </div>
        <a class="list_a1" @click="$emit('close')"></a>
        <div class="read-head">
          <a class="list_a2" @click="BgSize"><b v-show="arrow"></b></a>
          <a class="list_a3"></a>
          <a class="list_a4" @click="home"></a>
        </div>
      </div>
      <div class="text" :style="textbgcolor">
        <div @click="showToggle">
          <p class="title">{{red.chapters[index].title}}</p>
          <pre class="container" :style="textsize">
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
        sizeIndex: 0,
        bgIndex: 0,
        show: false,
        bgshow: false,
        arrow: false,
        x: '',
        bg: '',
        cr: '',
        sizelist: [
          {text: '字', index: 0},
          {text: '字', index: 1},
          {text: '字', index: 2},
          {text: '字', index: 3}
        ],
        bglist: [
          {text: '白天', index: 0},
          {text: '夜间', index: 1},
          {text: '怀旧', index: 2},
          {text: '护眼', index: 3},
          {text: '青春', index: 4}
        ]
      }
    },
    computed: {
      upp() {
        return this.index === 0 ? 'background-position: center -512px' : 'background-position: center -403px'
      },
      down() {
        return this.index === this.red.chapters.length - 1 ? 'background-position: center -570px' : 'background-position: center -461px'
      },
      textsize() {
        return 'font-size: ' + this.x
      },
      textbgcolor() {
        return 'background: ' + this.bg + ';color: ' + this.cr
      }
    },
    methods: {
      changesize(item) {
        let num = item
        switch (num) {
          case 0:
            this.x = '18px'
            break
          case 1:
            this.x = '20px'
            break
          case 2:
            this.x = '22px'
            break
          case 3:
            this.x = '24px'
            break
          default:
            this.x = '18px'
            break
        }
      },
      changebgcolor(item) {
        let color = item
        switch (color) {
          case 0:
            this.bg = '#f6f6ee'
            this.cr = '#020300'
            break
          case 1:
            this.bg = '#000'
            this.cr = '#555'
            break
          case 2:
            this.bg = '#e9dfc7'
            this.cr = '#512e21'
            break
          case 3:
            this.bg = '#cce8cf'
            this.color = '#555d54'
            break
          case 4:
            this.bg = '#bbe9f0'
            this.cr = '#283232'
            break
          default:
            this.bg = '#f6f6ee'
            this.cr = '#020300'
            break
        }
      },
      sizebtn(item) {
        this.sizeIndex = item.index
      },
      bgbtn(item) {
        this.bgIndex = item.index
      },
      BgSize() {
        this.bgshow = !this.bgshow
        this.arrow = !this.arrow
      },
      childindex(val) {
        this.index = val
      },
      showToggle() {
        this.isShow = !this.isShow
        this.bgshow = false
        this.arrow = false
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
      .config
        position: absolute
        top: 47px
        width: 100%
        height: 145px
        background: rgba(0, 0, 0, .85)
        border-top: 2px solid #fff
        border-bottom: 1px solid #525656
        padding: 12px 0 14px 0
        a
          background: #ededed
          display: inline-block
          width: 45px
          height: 37px
          line-height: 37px
          text-align: center
          margin-right: 10px
          color: #514e49
          position: relative
          vertical-align: middle
          &.active
            b
              background: url(../public/img/size_bg.png) no-repeat
              background-size: 47px 41px
              position: absolute
              width: 47px
              height: 41px
              top: -2px
              left: 0
        p
          font-size: 12px
          color: #fff
          padding-left: 20px
        .size
          margin: 7px 0 15px 20px
          a:nth-child(1)
            font-size: 18px
          a:nth-child(2)
            font-size: 20px
          a:nth-child(3)
            font-size: 22px
          a:nth-child(4)
            font-size: 24px
        .bg
          margin: 7px 0 15px 20px
          font-size: 16px
          a:nth-child(1)
            background: #f1f1f1
            color: #21201c
          a:nth-child(2)
            background: #5b5b5b
            color: #8d8d8d
          a:nth-child(3)
            background: #f2e7cc
            color: #643525
          a:nth-child(4)
            background: #cce8cf
            color: #555d54
          a:nth-child(5)
            background: #bbe9f0
            color: #283232
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
          position: relative
          background: url("../public/img/reader_icon.png") no-repeat 10px -28px
          background-size: 36px 727px
          b
            background: url(../public/img/tab_bg.png) no-repeat center 0
            display: block
            position: absolute
            bottom: 0
            background-size: 8px 5px
            width: 8px
            height: 5px
            left: 24px
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
