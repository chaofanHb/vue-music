<template>
  <div class="touch-bar">
    <slot class="left-sider" name="left-sider"></slot>
    <div class="bar">
      <div class="progress" ref="bar">
        <div class="current" ref="current" :style="{background: color}"></div>
        <div class="range" ref="range" :class="type === 'progress' ? 'music' : ''" @touchstart="rangeTouchStart" @touchmove="rangeTouchMove" @touchend="rangeTouchEnd">
          <div class="icon" v-if="type === 'progress'" :style="{background: color}"></div>
        </div>
      </div>
    </div>
    <slot class="right-sider" name="right-sider"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barWidth: null,
      startPageX: null,
      movePageX: null,
      percent: 0,
      dataProgress: this.progress,
      initiated: false
    }
  },
  props: {
    progress: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'rgb(203, 40, 41)'
    },
    // 类型 默认auto   progress类型则是设置range大小
    type: {
      type: String,
      default: 'auto'
    }
  },
  methods: {
    rangeTouchStart (e) {
      this.initiated = true
      this.startPageX = e.touches[0].pageX
      this.startOffsetLeft = e.target.offsetLeft
    },
    rangeTouchMove (e) {
      this.movePageX = e.touches[0].pageX
      // this.dataProgress = (this.dataProgress + Math.floor(this.movePageX / this.barWidth * 100))
      let moveDisctance = Math.min(this.barWidth, Math.max(0, this.startOffsetLeft + (this.movePageX - this.startPageX)))
      this.dataProgress = Math.floor(moveDisctance / this.barWidth * 100)
      this.offset(this.dataProgress)
      this.$emit('setPercent', this.dataProgress)
    },
    rangeTouchEnd (e) {
      this.initiated = false
      this.$emit('setProgress', this.dataProgress)
    },
    setProgressOffset (progress) {
      if (progress >= 0 && !this.initiated) {
        this.$nextTick(() => {
          this.$refs.current.style.width = progress + '%'
          this.$refs.range.style.left = progress + '%'
        })
      }
    },
    offset (progress) {
      this.$refs.current.style.width = progress + '%'
      this.$refs.range.style.left = progress + '%'
    }
  },
  watch: {
    progress: {
      immediate: true,
      handler: function (val, oldVal) {
        this.setProgressOffset(val)
      }
    }
  },
  mounted () {
    this.barWidth = this.$refs.bar.offsetWidth
  }
}
</script>
<style lang="scss" scoped>
.touch-bar{
  width: 100%;
  height: p2r(0.8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  .left-sider, .right-sider {
    flex: 0 0 p2r(0.9rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bar{
    flex: 1 1 auto;
    padding: 0 $auto_padding_l_r;
    box-sizing: border-box;
    .progress{
      height: 2px;
      background: rgba(244,244,244,0.9);
      position: relative;
      .current{
        height: 100%;
        width: 0;
      }
      .range{
        width: p2r(0.2rem);
        height: p2r(0.2rem);
        border-radius: p2r(0.2rem) / 2;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        &.music{
          width: p2r(0.3rem);
          height: p2r(0.3rem);
          border-radius: p2r(0.3rem) / 2;
          .icon{
            position: absolute;
            top: 50%;
            left: 50%;
            background: $primary_color;
            transform: translate(-50%, -50%);
            width: p2r(0.09rem);
            height: p2r(0.09rem);
            border-radius: p2r(0.09rem) / 2;
          }
        }
      }
    }
  }
}
</style>