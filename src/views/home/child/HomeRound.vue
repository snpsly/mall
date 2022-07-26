<template>
  <div class="round">
    <div v-for="item in recommend">
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <a :href="item.link">
        <div>{{ item.title }}</div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRound",

  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.round {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 5px;
  border-bottom: 10px solid #eee;
  background-color: #fff;
}
.round > div {
  flex: 1;
}
.round > div img {
  width: 70px;
  height: 65px;
  border-radius: 100%;
}
</style>