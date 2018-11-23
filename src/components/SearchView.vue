<template>
  <div id="title">
    <div class="header">
      <div class="header_title">
        <a class="return" @click="$emit('close');startChat()"></a>
        <span>搜索</span>
        <a class="home" @click="$emit('close');home();startChat()"></a>
      </div>
      <div class="sear">
        <div class="search">
          <a><b></b></a>
          <input type="text" v-model='search' placeholder="请输入搜索内容">
        </div>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in searchData" :key="index" @click="go(item)">
            <div class="title">{{item.title}}</div>
            <p>作者：{{item.author}}<span class="name">{{item.updateTime}}更新：{{item.lastChapterName}}</span></p>
            <p>简介：{{item.lpushname}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data() {
      return {
        search: '',
        msg: []
      }
    },
    methods: {
      home() {
        this.$router.push('/Synthesize')
      },
      startChat() {
        this.search = ''
      },
      go(det) {
        this.$router.push({name: 'detail', params: {id: det}})
      }
    },
    created () {
      this.axios('/api/hotList')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/manBook')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/attention')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/Woman1')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/Woman2')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/Publish1')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/Publish2')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/Monthly1')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
      this.axios.get('/api/Monthly2')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            for (let i in res.data) {
              this.msg.push(res.data[i])
            }
          }
        })
    },
    computed: {
      searchData() {
        // 只根据用户名查询
        let searchVal = ''
        let search = this.search.trim()

        if (!search) { // 内容为空不展示
          return search
        }
        searchVal = this.msg.filter(f => {
          let reg = new RegExp(search, 'gim')
          return reg.test(f.title)
        })
        return searchVal
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  #title
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 50
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
    .sear
      margin: 15px 14px 20px 14px
      .search
        position: relative
        height: 35px
        border: 1px solid #ccc
        border-radius: 3px
        box-sizing: border-box
        a
          width: 35px
          height: 35px
          position: absolute
          right: 0
          top: 0
          b
            background: url(../public/img/iconbg.png) no-repeat 0 -28px
            background-size: 30px 150px
            display: block
            width: 30px
            height: 33px
        input
          width: 78%
          height: 19px
          color: #999
          padding: 8px 10px 6px 10px
          border: none
          outline: none
          font-size: 16px
          font-weight: 600
    li
      border-bottom: 1px solid #e5e5e5
      border-top: 1px solid #fff
      padding: 7px 14px 10px 14px
      .title
        color: #333
        font-size: 16px
        margin: 5px 0
        .search-text
          color: #ffff00
      p
        font-size: 12px
        line-height: 22px
        overflow: hidden
        color: #999
        white-space: nowrap
        word-wrap: normal
        text-overflow: ellipsis
        display: block
        .name
          float: right
          display: block
          width: 200px
          white-space: nowrap
          word-wrap: normal
          text-overflow: ellipsis
</style>
