<template>
    <div ref="wrapper">
      <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    // 会非实时（屏幕滑动超过一定时间后）派发scroll 事件
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      // 派发一个 click 事件
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: { // 是否监听滚动事件
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      // scroll初始化
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })

      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          // 子组件可以使用 $emit 触发父组件的自定义事件。
          me.$emit('scroll', pos)
        })
      }
    },
    enable () {
      // 启用 better-scroll, 默认 开启。
      this.scroll && this.scroll.enable()
    },
    disable () {
      // 禁用 better-scroll，DOM 事件的回调函数不再响应。
      this.scroll && this.scroll.disable()
    },
    refresh () {
      // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.scroll && this.scroll.refresh()
    },
    scrollTo () { // 滚动到指定的位置
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () { // 滚动到指定的目标元素
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: { // 监视data数据是否更新
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>
