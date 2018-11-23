<template>
  <div class="synthesize">
    <div class="banner">
      <a v-if="hotList[0]" @click="go(hotList[0])">{{hotList[0].cpushname}}</a>
      <ul>
        <li>男生<span>|</span><a @click="go(hotList[1])" v-if="hotList[1]">{{hotList[1].cpushname}}</a></li>
        <li>女生<span>|</span><a @click="go(hotList[2])" v-if="hotList[2]">{{hotList[2].cpushname}}</a></li>
        <li>出版<span>|</span><a @click="go(hotList[3])" v-if="hotList[3]">{{hotList[3].cpushname}}</a></li>
      </ul>
    </div>
    <div class="hotlist">
      最受关注<span>火热红文，最值得追看</span>
    </div>
    <div class="lis">
      <div class="item" v-for="(hot,index) in hotList" :key="index" v-if="index == 0" @click="go(hot)">
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
        <li v-for="(hot,index) in hotList" :key="index" v-if="index*1!=0" @click="go(hot)">
          <p><span>[{{hot.catName}}]</span>&nbsp;{{hot.title}}<b>{{hot.author}}著</b></p>
          <p>{{hot.lpushname}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      hotList: {
        type: Array,
        required: true
      }
    },
    methods: {
      go(det) {
        this.$router.push({name: 'detail', params: {id: det}})
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .synthesize
    width: 100%
    overflow: hidden
    .banner_img
      width: 100%
      height: 125px
    .banner
      padding: 15px 15px 5px 15px
      & > a
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
      ul
        padding: 5px 0 10px 0
        font-size: 16px
        color: #297acc
        li
          line-height: 24px
          margin-top: 10px
          span
            color: #ccc
            padding: 0 8px 0 4px
    .hotlist
      padding: 0 14px
      font-size: 20px
      border-top: 2px solid #4595e6
      height: 35px
      line-height: 35px
      span
        font-size: 14px
        color: #bf3048
        font-weight: normal
        margin-left: 6px
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
