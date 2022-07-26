<template>
  <div>
    <h2>{{ goods.title }}</h2>
    <div>
      <span class="realPrice">￥{{ goods.realPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <div v-for="item in goods.columns">{{ item }}</div>
    </div>
    <div class="services">
      <div v-for="item in goods.services">
        <img :src="item.icon" alt="" /> {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Namedetail",

  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped>
h2 {
  margin-top: 10px;
  font-weight: 700;
  color: #000;
}
.realPrice {
  display: inline-block;
  color: pink;
  margin-top: 10px;
  font-size: 30px;
}
.oldPrice {
  text-decoration: line-through;
  margin-left: 10px;
}
.discount {
  background-color: pink;
  color: white;
  display: inline-block;
  line-height: 30px;
  width: 80px;
  text-align: center;
  border-radius: 25px;
  margin-left: 10px;
  vertical-align: 10px;
}
.columns {
  display: flex;
  padding: 15px;
  border-bottom: 0.5px solid rgb(231, 230, 230);
}
.columns > div {
  flex: 1;
}
.columns div:last-child {
  text-align: right;
}
.columns div:nth-child(2) {
  text-align: center;
}
.services {
  display: flex;
  padding: 10px;
  padding-top: 15px;
  border-bottom: 3px solid rgb(231, 230, 230);
  height: 50px;
}
.services > div {
  flex: 1;
}
.services div:nth-child(3) {
  text-align: right;
}
.services div:nth-child(4) {
  display: none;
}
.services div:nth-child(5) {
  display: none;
}
.services div:nth-child(2) {
  text-align: center;
}
.services img {
  height: 15px;
  width: 15px;
  vertical-align: top;
}
</style>