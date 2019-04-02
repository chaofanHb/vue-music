// 发现模块
<template>
  <div class="vm-find">
    <div class="fix-top">
      <!-- 搜索区域-->
      <div class="serch-area"><i class="left icon-pencil easy-click"></i>
        <!-- 控制区域-->
        <div class="input" @click="openSearch"><i class="icon-menu"></i><span>搜索</span></div>
      </div>
      <div class="nav-bar">
        <router-link class="nav-bar-router" to="/main/find/recommend">个性推荐</router-link>
        <router-link class="nav-bar-router" to="/main/find/station">主播电台</router-link>
      </div>
    </div>
    <!-- 内容中心区域-->
    <div class="find-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    // alert(1)
  },
  methods: {
    openSearch () {
      this.$router.push('/main/search')
    }
  }
}
</script>
<style lang="scss" scoped>
.vm-find{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: $NAV_H;
  .fix-top{
    height: $HEADER_H;
    width: 100%;
    background: $primary-color;
    .serch-area{
      height: $auto_h;
      width: 100%;
      background: $primary-color;
      display: flex;
      align-items: center;
      .left{
        flex:0 0 p2r(0.7rem);
        margin: p2r(0.1rem);
        color: $icon-f;
        font-size: $f_auto_l;
      }
      .input{
        flex:1 1 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: p2r(0.9rem);
        height: p2r(0.52rem);
        border-radius: p2r(0.26rem);
        border: none;
        outline: none;
        background: rgba(255,255,255,0.1);
        z-index: 1;
        color: rgba(255,255,255,0.8);
        text-indent: p2r(0.1rem);
        font-size: $f_small_l;
        padding: 0 p2r(0.04rem);
        box-sizing: border-box;
        i{
          margin: p2r(0.04rem);
          font-size: $f_small_s;
        }
        span{
          font-size: $f_small_l;
        }
      }
    }
    .nav-bar{
      height: $HEADER_H - $auto_h;
      display: flex;
      align-items: center;
      justify-content: center;
      .nav-bar-router{
        color: #fff;
        height: $HEADER_H - $auto_h - p2r(0.1rem);
        font-size: $f_small_m;
        text-align: center;
        width: p2r(1.5rem);
        position: relative;
        color: $text_noactive;
        &::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
          background: $icon-f;
          width: p2r(0.4rem);
          height: p2r(0.04rem);
          display: none;
        }
        &.router-link-active{
          color: $text_active;
          &::after{
            display: block;
          }
        }
      }
    }
  }
  .find-content{
    position: fixed;
    width: 100%;
    top: $HEADER_H;
    bottom: $NAV_H;
    background: #fff;
  }
}
</style>
