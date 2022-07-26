<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "WorkspaceJsonScroll",

  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      Type: Number,
      default: 0,
    },
    pullUpLoad: {
      Type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scrollxy", position);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullUpLoad");
      });
    }
  },

  methods: {
    //返回到顶部
    scrollto(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    //重复上拉加载
    finishPullUp() {
      setInterval(() => {
        this.scroll.finishPullUp();
      }, 2000);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>