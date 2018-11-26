<template>
<div id="ap">
  <search-view v-show="show" @close="ShowView" :hotList="hotList"></search-view>
  <div class="header">
    <span class="logo"></span>
    <div class="user">
      <a class="user_seek" @click="ShowView"></a>
    </div>
  </div>
  <p class="lase_read">
    <a>您还没有浏览历史，点此了解更多</a>
    <span>|<a>书架</a></span>
  </p>
  <div class="tab">
    <div class="tab-item" >
      <router-link to="/synthesize"><span>综合</span></router-link>
    </div>
    <div class="tab-item">
      <router-link to="/man"><span>男生</span></router-link>
    </div>
    <div class="tab-item">
      <router-link to="/woman"><span>女生</span></router-link>
    </div>
    <div class="tab-item">
      <router-link to="/publish"><span>出版</span></router-link>
    </div>
    <div class="tab-item">
      <router-link to="/monthly"><span>包月</span></router-link>
    </div>
  </div>
  <ul>
    <li>分类</li>
    <li>排行</li>
    <li>免费</li>
    <li>专题</li>
    <li>充值</li>
  </ul>
  <carousel></carousel>
  <router-view
    :hotList="hotList" :adlist1="adlist1" :manBook="manBook"
    :attention="attention" :Woman1="Woman1" :Woman2="Woman2"
    :Publish1="Publish1" :Publish2="Publish2"
    :Monthly2="Monthly2" :Monthly1="Monthly1"></router-view>
</div>
</template>

<script>
  import SearchView from './SearchView.vue'
  import { carousel } from '../widget'
  import detail from './Detail.vue'
    export default{
      data() {
        return {
          hotList: [],
          adlist1: [],
          manBook: [],
          attention: [],
          Woman1: [],
          Woman2: [],
          Publish2: [],
          Publish1: [],
          Monthly2: [],
          Monthly1: [],
          show: false
        }
      },
      created() { // 生命周期 在实例创建完成后被立即调用
        this.axios('/api/hotList')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.hotList = res.data
            }
          })
        this.axios.get('/api/adlist1')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.adlist1 = res.data
            }
          })
        this.axios.get('/api/manBook')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.manBook = res.data
            }
          })
        this.axios.get('/api/attention')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.attention = res.data
            }
          })
        this.axios.get('/api/Woman1')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.Woman1 = res.data
            }
          })
        this.axios.get('/api/Woman2')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.Woman2 = res.data
            }
          })
        this.axios.get('/api/Publish1')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.Publish1 = res.data
            }
          })
        this.axios.get('/api/Publish2')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.Publish2 = res.data
            }
          })
        this.axios.get('/api/Monthly1')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.Monthly1 = res.data
            }
          })
        this.axios.get('/api/Monthly2')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.Monthly2 = res.data
            }
          })
      },
      methods: {
        ShowView() {
          this.show = !this.show
        }
      },
      components: {
        carousel,
        detail,
        SearchView
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  #ap
    .header
      height: 51px
      position: relative
      .logo
        background: url('../public/img/logo.png') no-repeat
        background-size: 90px 37px
        display: block
        width: 90px
        height: 37px
        position: absolute
        top: 10px
        left: 15px
      .user
        position: absolute
        top: 10px
        right: 10px
        .user_seek
          background: url('../public/img/iconbg.png') no-repeat
          background-size: 30px 150px
          background-position: 0 -29px
          display: inline-block
          width: 30px
          height: 32px
    .lase_read
      padding: 0 15px
      line-height: 30px
      a
        color: #297acc
      span
        color: #e5e5e5
        position: absolute
        right: 15px
        a
          display: inline-block
          padding: 0 13px
    .tab
      display: flex
      width: 100%
      height: 35px
      line-height: 35px
      background: #4595e6
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 16px
          color: #bdd8f3
          &.active
            color: #fff
            font-weight: 600
            span
              padding-bottom: 3px
              border-bottom: 2px solid #fff
    ul
      overflow: hidden
      display: flex
      text-align: center
      padding-bottom: 20px
      li
        flex: 1
        float: left
        font-size: 16px
        padding-top: 20px
        line-height: 20px
</style>
