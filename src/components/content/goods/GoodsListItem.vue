<template>
  <div class="goods-item" @click="click">
    <img :src="imgurl" alt="" @load="imgload" />
    <div class="goods-info">
      <p>{{ items.title }}</p>
      <span class="price">{{ items.price }}</span>
      <span class="collect">{{ items.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonGoodsListItem",

  data() {
    return {};
  },
  props: {
    items: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {},
  computed: {
    imgurl() {
      return this.items.image || this.items.show.img;
    },
  },
  methods: {
    imgload() {
      this.$bus.$emit("imgload");
    },
    click() {
      this.$router.push("/detail/" + this.items.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>