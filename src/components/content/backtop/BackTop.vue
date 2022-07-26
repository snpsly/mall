<template>
  <div>
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
div {
  position: fixed;
  z-index: 999;
  right: 10px;
  bottom: 60px;
}
div img {
  width: 63px;
  height: 63px;
}
</style>