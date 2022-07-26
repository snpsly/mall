<template>
  <div class="home">
    <NavBar>
      <template v-slot:center> 购物街 </template>
    </NavBar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      :class="{ hometabcon: this.positiony + this.TabControly <= 0 }"
      v-show="this.positiony + this.TabControly <= 0"
      @index="index"
      ref="TabControl1"
    ></TabControl>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scrollxy="scrollxy"
      :pull-up-load="true"
      @pullUpLoad="pullUpLoad"
    >
      <childswiper :banner="banner" @imgload="swiperimgload"></childswiper>
      <HomeRound :recommend="recommend"></HomeRound>
      <dKeyword></dKeyword>
      <TabControl
        :titles="['流行', '新款', '精选']"
        @index="index"
        ref="TabControl2"
      ></TabControl>
      <GoodsList :goods="goods[category[index_category]].data"></GoodsList>
    </scroll>
    <BackTop
      @click.native="backtop"
      v-show="positiony < -1000 ? true : false"
    ></BackTop>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import childswiper from "@/views/home/child/childswiper";
import HomeRound from "@/views/home/child/HomeRound";
import dKeyword from "@/views/home/child/dKeyword";
import GoodsList from "@/components/content/goods/GoodsList";
import TabControl from "@/components/content/tabcontrol/TabControl";
import scroll from "@/components/common/scroll/scroll";
import BackTop from "@/components/content/backtop/BackTop";
import { getHomeMultiData, getHomeGoods } from "@/network/home/home";
import { mixin } from "@/components/content/mixin";
export default {
  name: "index",
  components: {
    NavBar,
    childswiper,
    HomeRound,
    dKeyword,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  mixins: [mixin],
  data() {
    return {
      banner: [],
      recommend: [],
      dKeyword: [],
      goods: {
        pop: { page: 0, data: [] },
        new: { page: 0, data: [] },
        sell: { page: 0, data: [] },
      },
      category: ["pop", "new", "sell"],
      index_category: 0,
      positiony: 0,
      TabControly: 0,
      saveY: 0,
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},

  methods: {
    debounce(func, delay) {
      let timer = null;
      return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func();
        }, delay);
      };
    },
    index(data) {
      this.index_category = data;
      this.$refs.TabControl1.indexs = data;
      this.$refs.TabControl2.indexs = data;
    },
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        this.dKeyword = res.data.dKeyword.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].data.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
      });
    },
    backtop() {
      this.$refs.scroll.scrollto(0, 0);
    },
    scrollxy(position) {
      this.positiony = position.y;
    },
    pullUpLoad() {
      this.getHomeGoods(this.category[this.index_category]);
    },
    swiperimgload() {
      this.TabControly = this.$refs.TabControl2.$el.offsetTop;
    },
  },
  activated() {
    this.$refs.scroll.scrollto(0, this.saveY, 0);
  },
  deactivated() {
    this.$bus.$off("imgload", this.itemlisner);
    this.saveY = this.positiony;
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.hometabcon {
  position: relative;
  z-index: 99;
  background-color: #fff;
  top: -3px;
}
.wrapper {
  position: absolute;
  bottom: 49px;
  top: 43px;
  overflow: hidden;
}
</style>