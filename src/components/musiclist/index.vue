// 歌单详情列表
<template>
  <div class="music-list" @click="saveAddPlay(index)">
    <div class="music-index"><span class="index" v-if="!playSheet">{{index + 1}}</span><i class="icon-menu" v-else="v-else"></i></div>
    <div class="music-info">
      <div class="music-detail">
        <div class="name" :class="{active: playSheet}">{{name}}</div>
        <div class="singer">{{getSinger}}</div>
      </div>
      <div class="music-conf">
        <div class="mv icon-menu"></div>
        <div class="set icon-menu"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 音乐的id
    id: {
      type: Number,
      default: 0
    },

    // 音乐的封面
    index: {
      type: Number,
      default: 0
    },

    // 音乐名称
    name: {
      type: String,
      default: ''
    },

    // 正在播报的歌单id
    playSheet: {
      type: Boolean,
      default: false
    },

    // 歌手
    singer: {
      type: Array,
      default: function () {
        return []
      }
    },

    // 返回对应的list的所有的数据
    list: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  methods: {
    // 提示播放的音乐
    saveAddPlay (index) {
      this.$emit('play', index)
    }
  },

  computed: {
    getSinger () {
      return this.singer.map(item => item.name).toString()
    }
  },
  created () {
    // console.log(this.singer.map(item => item.name).toString())
  }
}
</script>

<style lang="scss" scoped>
.music-list{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: p2r(0.1rem) 0;
  position: relative;
  @include border-1px();
  .music-index{
    flex:0 0 p2r(0.9rem);
    margin-right: p2r(0.1rem);
    display: flex;
    align-items: center;
    justify-content: center;
    i{
      font-size: $f_small_m;
      color: $primary_color;
    }
    span{
      font-size: $f_small_m;
      color: $color_gray;
    }
  }
  .music-info{
    flex:1 1 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    .music-detail{
      flex:1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      overflow: hidden;
      .name{
        font-size: $f_small_l;
        color: $text_color;
        @include els();
        width: 100%;
        text-align: left;
        &.active{
          color:$primary_color;
        }
      }
      .singer{
        width: 100%;
        text-align: left;
        font-size: $f_small_s;
        color: $color_gray;
        @include els();
      }
    }
    .music-conf{
      flex:0 0 p2r(1.3rem);
      display: flex;
      align-items: center;
      color: $color_gray_slow;
      font-size: $f_small_m;
      height: p2r(0.6rem);
      .mv,.set{
        flex: 0 0 p2r(0.6rem);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .set{
        margin-left: p2r(0.1rem);
      }
    }
  }

}
</style>