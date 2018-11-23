<template>
  <div class="slide">
    <div class="slideshow">
      <ul>
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src='img'>
          </a>
        </li>
      </ul>
    </div>
    <span>
        <em>{{mark + 1}}/3</em>
        <b v-for="(val, index) in msg" v-show="index===mark" :key="index">{{val}}</b>
    </span>
  </div>
</template>

<script>

  export default{
    data() {
      return {
        mark: 0,
        imgArray: [
          require('../public/img/1.jpg'),
          require('../public/img/2.jpg'),
          require('../public/img/3.jpg')
        ],
        msg: []
      }
    },
    methods: {
      autoPlay () {
        this.mark++
        if (this.mark === 3) {
          this.mark = 0
        }
      },
      play () {
        setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      }
    },
    created () {
      this.play()
      this.axios('/api/adlist1')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i].title)
            }
          }
        })
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .slide
    width: 100%
    height: 125px
    position: relative
    .slideshow
      width: 100%
      height: 100%
      li
        position: absolute
        img
          width: 375px
          height: 125px
    span
      position: absolute
      bottom: 0
      left: 0
      height: 23px
      width: 100%
      color: #fff
      line-height: 23px
      background: rgba(0, 0, 0, 0.5)
      em
        position: absolute
        right: 15px
        font-size: 16px
        font-weight: normal
      b
        display: block
        text-align: center
        font-weight: normal
        font-size: 12px
    .banner_title
      padding: 15px 15px
      a
        height: 23px
        font-size: 20px
        color: #bf3048
      &::before
        content: '最热文'
        color: #fff
        display: inline-block
        font-size: 10px
        height: 18px
        line-height: 20px
        width: 38px
        margin-right: 9px
        text-align: center
        vertical-align: 3px
        background-color: #bf3048
        white-space: nowrap
</style>
