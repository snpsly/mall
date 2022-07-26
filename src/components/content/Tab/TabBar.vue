<template>
  <ul>
    <li v-for="(item, index) in sz" @click="cli(index)" :key="item.fon">
      <router-link :to="item.to" replace
        ><TabBarItem>
          <img
            :src="item.img"
            alt=""
            referrerPolicy="no-referrer"
            slot="img"
            v-if="index != indexs"
          />
          <img
            :src="item.imgs"
            alt=""
            referrerPolicy="no-referrer"
            slot="img"
            v-if="index === indexs"
          />
          <span slot="font" :class="{ cli: index === indexs }">{{
            item.fon
          }}</span></TabBarItem
        ></router-link
      >
    </li>
  </ul>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "TabBar",

  data() {
    return {
      sz: [
        {
          to: "/index",
          img: require("@/assets/img/tabbar/home.svg"),
          imgs: require("@/assets/img/tabbar/home_active.svg"),
          fon: "首页",
        },
        {
          to: "/fl",
          img: require("@/assets/img/tabbar/category.svg"),
          imgs: require("@/assets/img/tabbar/category_active.svg"),
          fon: "分类",
        },
        {
          to: "/shop",
          img: require("@/assets/img/tabbar/shopcart.svg"),
          imgs: require("@/assets/img/tabbar/shopcart_active.svg"),
          fon: "购物车",
        },
        {
          to: "/profilt",
          img: require("@/assets/img/tabbar/profile.svg"),
          imgs: require("@/assets/img/tabbar/profile_active.svg"),
          fon: "我的",
        },
      ],
      indexs: 0,
    };
  },
  components: { TabBarItem },
  methods: {
    cli(index) {
      this.indexs = index;
    },
  },
};
</script>

<style scoped>
li {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: black;
}
.cli {
  color: coral;
  font-weight: bolder;
}
img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 4px 0 2px 0;
}
span {
  display: block;
}

ul {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>