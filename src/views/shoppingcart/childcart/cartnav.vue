<template>
  <div>
    <NavBar>
      <template slot="center">
        购物车（{{ $store.state.cartlist.length }}）
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "WorkspaceJsonCartnav",
  components: {
    NavBar,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>