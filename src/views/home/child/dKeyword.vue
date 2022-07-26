<template>
  <div>
    <a href="">
      <img src="@/assets/img/home/recommend_bg.jpg" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonDKeyword",

  data() {
    return {};
  },

  mounted() {},
  props: {
    dKeyword: {
      type: Array,
      default: () => [],
    },
  },

  methods: {},
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>