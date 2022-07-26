<template>
  <div>
    <div class="shopLogo">
      <img :src="shop.shopLogo" alt="" />{{ shop.name }}
    </div>
    <div class="cGoods">
      <div>
        <div>{{ shop.cFans }} <br />总销量</div>
        <div>{{ shop.cGoods }} <br />全部宝贝</div>
      </div>
      <div>
        <div v-for="item in shop.score">
          {{ item.name }}
          <span :class="{ color: item.isBetter }">{{ item.score }}</span>
        </div>
      </div>
    </div>
    <a :href="shop.shopUrl"><div class="shopUrl">进店逛逛</div></a>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonShop",
  props: {
    shop: {
      type: Object,
      default: () => {
        {
        }
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.shopLogo img {
  height: 100px;
  width: 100px;
}
.shopLogo {
  font-size: 20px;
  margin-left: 20px;
  margin-top: 10px;
}
.cGoods {
  display: flex;
}
.cGoods > div {
  text-align: center;
  flex: 1;
}
.cGoods > div:first-child {
  display: flex;
  margin-top: 30px;
  border-right: solid 1px rgb(201, 200, 199);
}
.cGoods > div:first-child div {
  flex: 1;
}
.cGoods > div:last-child div {
  margin: 10px;
  text-align: left;
  margin-left: 60px;
}
.color {
  color: red;
}
.shopUrl {
  background-color: rgb(234, 246, 246);
  width: 150px;

  margin: 0 auto;
  text-align: center;
  line-height: 40px;
  border-radius: 25px;
  margin-top: 10px;
}
</style>