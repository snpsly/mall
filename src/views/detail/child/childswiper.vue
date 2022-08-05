<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in topimg" :key="index">
        <img :src="item" alt="" @load="imgload" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topimg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgload() {
      this.$emit("imgload");
    },
  },
};
</script>

<style scoped>
div {
  height: 300px;
}
</style>