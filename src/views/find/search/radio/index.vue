// 搜索的电台显示效果
<template>
  <router-link class="s-dj" v-if="list &amp;&amp; list.id" :to="{path: '/main/dj', query: {id: list.id}}">
    <div class="img"><img v-imgsize="list.picUrl" /></div>
    <div class="right-info">
      <div class="name">{{list.name}}</div>
      <div class="disc">
        <div class="user">{{list.dj.nickname}}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .s-dj{
    position: relative;
    @include border-1px(#eee);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: $auto_padding_l_r / 2 $auto_padding_l_r;
    .img{
      flex:0 0 p2r(1.2rem);
      height: p2r(1.2rem);
      position: relative;
      display: block;
      img{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: p2r(0.06rem);
      }
    }
    .right-info{
      flex:1 1 auto;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: p2r(1rem);
      align-items: flex-start;
      margin-left: $auto_padding_l_r * 1.5;
      .name{
        font-size: $f_small_l;
        font-weight: 600;
        color: $text_gray_color;
        @include els();
      }
      .disc{
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-wrap: nowrap;
        font-size: $f_small_x;
        color: $icon_color;
        justify-content: flex-start;
        @include els();
        .push-t{
          flex: 0 0 p2r(1.5rem);
        }
        .user{
          flex: 0 0 auto;
          @include els();
        }
      }
    }
  }
</style>