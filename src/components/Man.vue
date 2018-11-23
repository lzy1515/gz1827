<template>
  <div class="nanbook">
    <div class="banner_title">
      <a><i v-for="(val, index) in msg" v-show="index===mark" :key="index">{{val}}</i></a>
    </div>
    <div class="hotlist">最受关注</div>
    <div class="lis">
      <div class="item" v-for="(hot,index) in attention" :key="index" v-if="index == 0" @click="go(hot)">
        <div class="horizontal"><img v-if="hot" :src="hot.cover"></div>
        <div class="text">
          <span v-if="hot">{{hot.title}}</span>
          <div class="desc">
            <p class="author" v-if="hot">作者：{{hot.author}}著</p>
            <p class="introduce" v-if="hot">{{hot.intro}}</p>
          </div>
        </div>
      </div>
      <ul>
        <li v-for="(hot,index) in attention" :key="index" v-if="index*1!=0" @click="go(hot)">
          <p><span>[{{hot.catName}}]</span>&nbsp;{{hot.title}}<b>{{hot.author}}著</b></p>
          <p>{{hot.lpushname}}</p>
        </li>
      </ul>
    </div>
    <div class="hotlist">起点专区</div>
    <div class="lis"><div class="item" v-for="(hot,index) in manBook" :key="index" v-if="index == 0" @click="go(hot)">
      <div class="horizontal"><img v-if="hot" :src="hot.cover"></div>
      <div class="text">
        <span v-if="hot">{{hot.title}}</span>
        <div class="desc">
          <p class="author" v-if="hot">作者：{{hot.author}}著</p>
          <p class="introduce" v-if="hot">{{hot.intro}}</p>
        </div>
      </div>
    </div>
      <ul>
        <li v-for="(hot,index) in manBook" :key="index" v-if="index*1!=0" @click="go(hot)">
          <p><span>[{{hot.catName}}]</span>&nbsp;{{hot.title}}<b>{{hot.author}}著</b></p>
          <p>{{hot.lpushname}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      manBook: {
        type: Array,
        required: true
      },
      attention: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        mark: 0,
        msg: []
      }
    },
    methods: {
      go(det) {
        this.$router.push({name: 'detail', params: {id: det}})
      },
      autoPlay () {
        this.mark++
        if (this.mark === 5) {
          this.mark = 0
        }
      },
      play () {
        setInterval(this.autoPlay, 4000)
      },
      change (i) {
        this.mark = i
      }
    },
    created () {
      this.play()
      this.axios('/api/manBook')
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
  .nanbook
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
    .hotlist
      padding: 0 14px
      font-size: 20px
      border-top: 2px solid #4595e6
      height: 35px
      line-height: 35px
    .lis
      padding: 0 14px
      .item
        padding-top: 5px
        overflow: hidden
        .horizontal
          margin-top: 2px
          float: left
          img
            width: 84px
            height: 120px
        .text
          height: 120px
          padding: 5px 0 0 94px
          span
            font-size: 16px
            font-weight: 700
          .desc
            color: #999
            p
              margin-top: 10px
            p.introduce
              line-height: 22px
      ul
        padding: 5px 0 10px 0
        li
          width: 100%
          margin-top: 10px
          line-height: 24px
          p
            width: 100%
            font-size: 14px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            b
              margin: 0 0 0 10px
              font-weight: 100
              font-size: 10px
              color: #999
            &:last-child
              color: #999
</style>
