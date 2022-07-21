<template>
  <div class="home">
    <NavBar>
      <template v-slot:center> 购物街 </template>
    </NavBar>
    <childswiper :banner="banner"></childswiper>
    <HomeRound :recommend="recommend"></HomeRound>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultiData } from "@/network/home/home";
import childswiper from "@/views/home/child/childswiper";
import HomeRound from "@/views/home/child/HomeRound";
export default {
  name: "index",
  components: {
    NavBar,
    childswiper,
    HomeRound,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home {
  background-color: var(--color-tint);
  color: #fff;
}
</style>