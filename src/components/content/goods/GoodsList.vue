<template>
  <div>
    <GoodsListItem v-for="item in goods" :items="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  name: "WorkspaceJsonGoodsList",
  components: { GoodsListItem },
  data() {
    return {};
  },

  mounted() {},
  props: {
    goods: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);
  padding: 2px;
}
</style>