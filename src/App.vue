<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!--将页面缓存进内存-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--播放组件-->
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'

export default {
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylue">

</style>
