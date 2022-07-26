<template>
  <div>
    <div v-for="item in imglist">
      <img :src="item" alt="" @load="imgload" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Imglist",

  data() {
    return {};
  },
  props: {
    imglist: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {},

  methods: {
    imgload() {
      this.$emit("imgload");
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>