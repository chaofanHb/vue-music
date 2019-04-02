<template>
  <div class="recommend">
    <Scroll ref="scroll">
      <div class="scroll-content" slot="scroll-content">
        <!-- SWIPER-->
        <div class="sider">
          <swiper class="main-sider" v-if="banners.length" :options="swiperOption">
            <swiper-slide v-for="item in banners" :key="item.id"><img :src="item.imageUrl" @click="bannerClick(item)" /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <!-- 四个大的按钮-->
        <div class="vm-lists">
          <router-link class="list-entry" to="/"><img src="./../../../assets/images/r1.jpg" /><span class="entry-name">私人FM</span></router-link>
          <router-link class="list-entry" to="/main/daily"><img src="./../../../assets/images/r2.jpg" /><span class="entry-name">每日推荐</span></router-link>
          <router-link class="list-entry" to="/main/sheet"><img src="./../../../assets/images/r3.jpg" /><span class="entry-name">歌单</span></router-link>
          <router-link class="list-entry" to="/main/rank"><img src="./../../../assets/images/r4.jpg" /><span class="entry-name">排行榜</span></router-link>
        </div>
        <GroupSheet api="RECOMMEND_SHEET_LISTS"></GroupSheet>
      </div>
    </Scroll>
  </div>
</template>
<script>
import Scroll from '@/components/scroll'
import GroupSheet from '@/components/groupsheet'
export default {
  data () {
    return {
      banners: [],
      swiperOption: {
        autoplay: {
          delay: 30000, //图片切换时间
          stopOnLastSlide: false, //轮播到最后一个图片是否停止，默认true会复制一个wsiper数组连接上
          disableOnInteraction: false, //用户操作过（手动滑动）swiper后是否停止轮播
        },
        //slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
        effect: 'slide',
        //设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的
        loop: true,
        pagination:{
          el:'.swiper-pagination',
          type: 'bullets',
          bulletActiveClass: 'bulletCss'
        },
      }
    }
  },
  components: {
    Scroll,
    GroupSheet
  },
  methods: {
    async getBanner () {
      let res = await this.$store.dispatch('BANNER_LISTS')
      this.banners = res.data.banners
    },
    /**
     * 点击banner的事件
     */
    bannerClick (item) {
      switch (item.targetType) {
        case 1:
          this.$router.push({
            path: '/main/play',
            query: {
              id: item.targetId
            }
          })
          break
        case 10:
          this.$router.push({
            path: '/main/listdetail',
            query: {
              id: item.targetId,
              type: 'album'
            }
          })
          break
        case 1000:
          this.$router.push({
            path: '/main/listdetail',
            query: {
              id: item.targetId,
              type: 'sheet'
            }
          })
          break
        default:
          return
      }
      if (item.url) {
        window.location.href = item
      }
    }
  },
  mounted () {
    this.getBanner()
  }
}
</script>
<style lang="scss" scoped>
.recommend{
  position: absolute;
  background: $primary-color;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .scroll-content{
    height: auto;
    .sider{
      width: 100%;
      height: auto;
      overflow: hidden;
      box-sizing: border-box;
      .main-sider{
        position: relative;
        &::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 20%;
          background: $primary-color;
        }
        .swiper-slide{
          padding: p2r(0.15rem);
          box-sizing: border-box;
          img{
            display: block;
            width: 100%;
            border-radius: p2r(0.15rem);
          }
        }
      }
    }
    .vm-lists{
      display: flex;
      width: 100%;
      justify-content: space-around;
      padding: p2r(0.3rem) 0;
      position: relative;
      @include border-1px($border_color);
      .list-entry{
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
          width: p2r(1rem);
          height: p2r(1rem);
          color: $primary-color;
        }
        .entry-name{
          font-size: $f_small_m;
          margin-top: $auto_padding_t_b / 3;
          color: $text_color;
        }
      }
    }
  }
}
</style>
