<template>
  <div class="bar">
    <!-- 左边全选的部分 -->
    <div class="choose">
      <img
        src="@/assets/img/cart/tick.svg"
        alt=""
        :class="{ click: check }"
        @click="cli"
      />
      <span class="choose-all">全选</span>
    </div>
    <!-- 中间价格部分 -->
    <div class="price">
      合计: <span class="allPrice">{{ count }}</span
      >元
    </div>
    <!-- 右边去计算部分 -->
    <div class="calculate">提交订单</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartButtonBar",
  components: {},
  data() {
    return {
      check: false,
    };
  },
  computed: {
    ...mapGetters(["cartList"]),
    count() {
      let count = 0;
      if (this.cartList !== undefined) {
        this.cartList
          .filter((el) => {
            return el.check === true;
          })
          .forEach((el) => {
            count += el.count * el.price;
          });
      }
      return count.toFixed(2);
    },
  },
  methods: {
    cli() {
      this.check = !this.check;
      this.cartList.forEach((element) => {
        element.check = this.check;
      });
    },
  },
};
</script>

<style scoped>
.bar {
  height: 49px;
  position: relative;
  display: flex;
  z-index: 115;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  line-height: 40px;
  padding-left: 10px;
}
.bar-btn {
  display: inline-block;
  position: absolute;
  top: 10px;
  color: #fff;
  line-height: 20px;
}
.choose-all {
  position: absolute;
  left: 30px;
}
.choose {
  width: 80px;
}
.choose img {
  border-radius: 100%;
  border: 1px solid rgb(197, 197, 197);
}
.price {
  flex: 1;
}
.allPrice {
  color: var(--color-tint);
  margin: 0 3px;
}
.calculate {
  width: 100px;
  text-align: center;
  background-image: linear-gradient(90deg, #ff6034, #ee0a24);
  color: #fff;
}
.click {
  background-color: pink;
}
</style>