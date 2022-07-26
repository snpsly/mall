<template>
  <div class="detail">
    <detailnav
      class="detailnav"
      ref="detailnav"
      @navclick="navclick"
    ></detailnav>

    <scroll class="wrapper" ref="scroll" @scrollxy="scrollxy" :probe-type="3">
      <childswiper :topimg="topimg" @imgload="imgloadswiper"></childswiper>
      <namedetail :goods="goods"></namedetail>
      <shop :shop="shop"></shop>
      <imglist :imglist="imglist" @imgload="imgload"></imglist>
      <rule :rule="rule" :set="set" ref="rule"></rule>
      <rate :rate="rate" ref="rate"></rate>
      <GoodsList :goods="recommend" ref="GoodsList"></GoodsList>
    </scroll>
    <BackTop
      @click.native="backtop"
      v-show="positiony < -1000 ? true : false"
    ></BackTop>
    <bottombar @addtocart="addtocart"></bottombar>
  </div>
</template>

<script>
import { getDetailData, Goods, getRecommend } from "@/network/detail";
import detailnav from "@/views/detail/child/detailnav";
import childswiper from "@/views/detail/child/childswiper";
import namedetail from "@/views/detail/child/namedetail";
import shop from "@/views/detail/child/shop";
import scroll from "@/components/common/scroll/scroll";
import imglist from "@/views/detail/child/imglist";
import rule from "@/views/detail/child/rule";
import rate from "@/views/detail/child/rate";
import GoodsList from "@/components/content/goods/GoodsList";
import { mixin } from "@/components/content/mixin";
import bottombar from "@/views/detail/child/bottombar";
import BackTop from "@/components/content/backtop/BackTop";
import { mapActions } from "vuex";
export default {
  name: "Detail",
  components: {
    detailnav,
    childswiper,
    namedetail,
    shop,
    scroll,
    imglist,
    rule,
    rate,
    GoodsList,
    bottombar,
    BackTop,
  },
  mixins: [mixin],
  data() {
    return {
      iid: null,
      result: null,
      topimg: [],
      goods: {},
      shop: {},
      imglist: [],
      rule: [],
      set: [],
      rate: {},
      recommend: [],
      ruletop: 0,
      positiony: 0,
      ratetop: 0,
      GoodsListtop: 0,
      detaildebounce: null,
      detaildebounce1: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then((res) => {
      const data = res.result;
      this.topimg = data.itemInfo.topImages;

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = data.shopInfo;
      this.imglist = data.detailInfo.detailImage[0].list;
      this.rule = data.itemParams.rule.tables;
      this.set = data.itemParams.info.set;
      if (data.rate.cRate !== 0) {
        this.rate = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
    this.detaildebounce = this.debounce(() => {
      this.ruletop = this.$refs.rule.$el.offsetTop;
      this.ratetop = this.$refs.rate.$el.offsetTop;
      this.GoodsListtop = this.$refs.GoodsList.$el.offsetTop;
    }, 200);
    this.detaildebounce1 = this.debounce(() => {
      this.$refs.scroll.refresh();
    }, 200);
  },
  mounted() {},

  methods: {
    ...mapActions(["addcart"]),
    debounce(func, delay) {
      let timer = null;
      return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func();
        }, delay);
      };
    },
    imgload() {
      this.detaildebounce();
      this.detaildebounce1();
    },
    imgloadswiper() {
      this.detaildebounce();
      this.detaildebounce1();
    },
    scrollxy(position) {
      this.positiony = position.y;
      if (this.positiony <= -this.GoodsListtop) {
        this.$refs.detailnav.navindex = 3;
      } else if (this.positiony <= -this.ratetop) {
        this.$refs.detailnav.navindex = 2;
      } else if (this.positiony <= -this.ruletop) {
        this.$refs.detailnav.navindex = 1;
      } else {
        this.$refs.detailnav.navindex = 0;
      }
    },
    navclick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollto(0, 0, 500);
          break;
        case 1:
          this.$refs.scroll.scrollto(0, -this.ruletop, 500);
          break;
        case 2:
          this.$refs.scroll.scrollto(0, -this.ratetop, 500);
          break;
        case 3:
          this.$refs.scroll.scrollto(0, -this.GoodsListtop, 500);
          break;
      }
    },
    backtop() {
      this.$refs.scroll.scrollto(0, 0);
    },
    addtocart() {
      const product = {};
      product.img = this.topimg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.addcart(product).then((res) => {
        this.$toast.show(res);
      });
    },
  },
  destroyed() {
    this.$bus.$off("imgload", this.itemlisner);
  },
};
</script>

<style scoped>
.detail {
  position: relative;

  height: 100vh;
}
li {
  height: 100px;
}
.detailnav {
  position: relative;
  z-index: 6;
}
.wrapper {
  height: calc(100% - 44px - 58px);
  overflow: hidden;
}
</style>