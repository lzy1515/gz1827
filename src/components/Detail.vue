<template>
  <div id="header">
    <read-book v-show="show" @close="showCatalog"></read-book>
    <div class="header_title">
      <a class="return" @click="ret"></a>
      <span>书籍详情</span>
      <a class="home" @click="home"></a>
    </div>
    <div class="boy">
      <div class="boy_header">
        <div class="boy_container">
          <div class="img"><img :src="det.cover"></div>
          <div class="text">
            <span>{{det.title}}</span>
            <div class="author">
              <p><em></em>4.50分</p>
              <p>作者：<span>{{det.author}}</span></p>
              <p>类型：<span>{{det.catName}}</span></p>
              <p>字数：{{det.totalWords}} 万字</p>
            </div>
          </div>
        </div>
        <div class="btn">
          <a class="btn_sx" @click="readFunc();showCatalog()">{{readText}}</a>
          <a class="btn_qx">下载阅读</a>
          <a class="act" :class="{active:favorite}" @click="favoriteFunc">{{favoriteText}}</a>
        </div>
        <div class="intro">
          <span>简介：</span>
          {{det.intro}}
        </div>
        <p class="pl_p">目录
          <em>({{det.lastChapter}})</em>
          <span>更新于{{det.uptime}}</span>
        </p>
        <ul class="chapters">
          <li><a class="getnew">{{det.lastChapterName}}</a></li>
          <li v-for="(hot,index) in det.chapters" :key="index" v-if="index < num">
            <a>{{hot.title}}</a>
            <em>免费</em>
          </li>
        </ul>
        <div class="more" @click="more">{{moretext}}</div>
      </div>
      <div class="money">
        <p>按章购买0.05元/千字</p>
        <a>您还不是包月VIP，开通立享折扣优惠</a>
      </div>
    </div>
  </div>
</template>

<script>
import ReadBook from '../components/ReadBook'
  export default{
    data() {
      return {
        det: this.$route.params.id,
        favorite: false,
        reads: false,
        mo: false,
        show: false,
        num: 3
      }
    },
    computed: {
      favoriteText() {
        return this.favorite ? '移出书架' : '加入书架'
      },
      readText() {
        return this.reads ? '继续阅读' : '立即阅读'
      },
      moretext() {
        return this.mo ? '收起目录' : '更多目录'
      }
    },
    methods: {
      ret() {
        this.$router.go(-1)
      },
      home() {
        this.$router.push('/Synthesize')
      },
      favoriteFunc() {
        this.favorite = !this.favorite
      },
      readFunc() {
        this.reads = true
        window.parent.scrollTo(0, 0)
      },
      more() {
        if (this.num < 4) {
          this.num = 20
          this.mo = true
        } else {
          this.num = 3
          this.mo = false
        }
      },
      showCatalog() {
        this.show = !this.show
      }
    },
    components: {
      ReadBook
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  #header
    width: 100%
    .header_title
      width: 100%
      height: 50px
      text-align: center
      border-bottom: 1px solid #ccc
      a
        position: absolute
        display: block
        background: url(../public/img/iconbg.png) no-repeat 0 -81px
        background-size: 30px 150px
        top: 3px
        width: 30px
        height: 44px
        padding: 0 5px 0 8px
        overflow: hidden
      .return
        left: 7px
      .home
        background-position: 6px -116px
        right: 0
        padding: 0 12px 0 7px
      span
        height: 100%
        font-size: 20px
        line-height: 50px
        font-weight: 700
    .boy
      .boy_header
        padding-top: 15px
        .boy_container
          padding: 0 14px 5px 14px
          .img
            float: left
            width: 85px
            height: 113px
            img
              width: 100%
              height: 100%
          .text
            padding-left: 94px
            span
              font-size: 16px
              line-height: 16px
              font-weight: 700
            .author
              p
                margin-top: 4px
                padding-top: 5px
                span
                  color: #3d98ff
                  font-size: 12px
                em
                  margin-right: 10px
                  background: url(../public/img/icon_5.png) no-repeat
                  background-size: 85px 100px
                  background-position: 0 -69px
                  display: inline-block
                  width: 85px
                  height: 13px
        .btn
          padding: 15px 14px 0
          display: flex
          a
            flex: 1
            height: 38px
            line-height: 38px
            text-align: center
            border: 1px solid #2c92dd
            color: #2c92dd
            &.active
              border: 1px solid #ccc
              color: #999
          .btn_sx
            background: #2c92dd
            color: #fff
          .btn_qx
            margin: 0 14px
        .intro
          padding: 0 15px 25px 14px
          font-size: 12px
          line-height: 24px
          padding-top: 10px
          color: #999
        .pl_p
          border-top: 2px solid #297acc
          font-size: 20px
          line-height: 20px
          padding: 12px 15px
          em
            color: #999
            font-size: 14px
            font-weight: normal
            vertical-align: top
          span
            float: right
            font-size: 14px
            color: #999
        .chapters
          padding: 10px 15px 0 15px
          li
            position: relative
            a
              color: #297acc
              line-height: 30px
              font-size: 14px
          .getnew
            &::before
              content: "最新"
              color: #fff
              display: inline-block
              font-size: 12px
              height: 14px
              padding-top: 1px
              line-height: 14px
              width: 30px
              margin-right: 9px
              text-align: center
              vertical-align: 2px
              background-color: #b33640
              white-space: nowrap
          em
            width: 30px
            height: 14px
            padding: 2px
            background: #52cca3
            line-height: 14px
            color: #fff
            font-size: 10px
            text-align: center
            position: absolute
            right: 0
            top: 6px
        .more
          position: relative
          margin: 9px 14px 0
          height: 50px
          line-height: 50px
          border-top: 1px solid #ccc
          text-align: center
          font-size: 14px
          color: #297acc
          &::after
            content: ''
            position: absolute
            top: 21px
            width: 8px
            height: 8px
            border: #297acc solid
            border-width: 1px 1px 0 0
            transform: rotate(45deg)
      .money
        padding: 10px 14px
        background: #f2f2f2
        position: relative
        p
          line-height: 24px
          font-size: 14px
          color: #999
        a
          line-height: 24px
          color: #fa944c
          background: url("../public/img/opoint.png") right center no-repeat
          background-size: 8px 14px
          padding-right: 12px
</style>
