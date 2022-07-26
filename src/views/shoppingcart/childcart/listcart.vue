<template>
  <div>
    <lsitcartitem
      v-for="item in cartList"
      :itemInfo="item"
      @all="all"
    ></lsitcartitem>
  </div>
</template>

<script>
import lsitcartitem from "@/views/shoppingcart/childcart/lsitcartitem";
import { mapGetters } from "vuex";
export default {
  name: "WorkspaceJsonListcart",
  components: {
    lsitcartitem,
  },
  data() {
    return {};
  },

  mounted() {},
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    all(a) {
      this.$emit("all", a);
    },
  },
};
</script>

<style scoped>
</style>