<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item, index) in topimg" :key="index">
        <img :src="item" alt="" @load="imgload" />
      </SwiperItem>
    </Swiper>
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