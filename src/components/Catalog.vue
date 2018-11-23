<template>
  <div class="catalog">
    <ul>
      <li v-for="(hot,index) in red.chapters" :key="index" @click="$emit('close');text(hot)">{{hot.title}}</li>
    </ul>
  </div>
</template>

<script>

  export default{
    props: ['red'],
    methods: {
      text(det) {
//        this.$router.push({name: 'reads', params: {id: det}})
        console.log(det)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .catalog
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    overflow: auto
    ul
      width: 100%
      li
        height: 43px
        line-height: 43px
        padding: 0 14px
        color: #000
        border-bottom: 1px solid #e5e5e5

</style>
