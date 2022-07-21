<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
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
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>