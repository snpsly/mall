<template>
  <div class="cart">
    <cartnav></cartnav>
    <scroll class="wrapper"><listcart @all="bottomall"></listcart> </scroll>

    <bottomnav ref="bottomall"></bottomnav>
  </div>
</template>

<script>
import cartnav from "@/views/shoppingcart/childcart/cartnav";
import listcart from "@/views/shoppingcart/childcart/listcart";
import bottomnav from "@/views/shoppingcart/childcart/bottomnav";
import scroll from "@/components/common/scroll/scroll";
export default {
  name: "WorkspaceJsonShoppingcart",
  components: {
    cartnav,
    bottomnav,
    listcart,
    scroll,
  },
  data() {
    return {
      flag: true,
    };
  },
  created() {},
  mounted() {},

  methods: {
    bottomall(a) {
      a === undefined
        ? (this.$refs.bottomall.check = true)
        : (this.$refs.bottomall.check = false);
    },
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.wrapper {
  height: calc(100% - 44px - 49px - 49px);
  overflow: hidden;
}
</style>
