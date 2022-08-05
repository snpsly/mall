<template>
  <div>
    <nav-bar class="navbar">
      <template slot="left">
        <div @click="back">
          <img src="@/assets/img/common/back.svg" alt="" /></div
      ></template>
      <template slot="center">
        <div class="center">
          <div
            v-for="(item, index) in navdata"
            @click="navclick(index)"
            :class="{ navbarclick: navindex === index }"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  components: { NavBar },
  name: "WorkspaceJsonDetailnav",

  data() {
    return {
      navdata: ["商品", "参数", "评论", "推荐"],
      navindex: 0,
    };
  },

  mounted() {},
  created() {},
  methods: {
    navclick(index) {
      this.navindex = index;
      this.$emit("navclick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  color: #000;
}
.navbarclick {
  color: var(--color-tint);
}
.center {
  display: flex;
}
.center > div {
  flex: 1;
}
</style>