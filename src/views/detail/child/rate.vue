<template>
  <div>
    <div class="top"><span>用户评价</span><span>更多</span></div>
    <div class="user">
      <div>
        <img :src="rate.user.avatar" alt="" v-if="rate.user" />
        <span v-if="rate.user">{{ rate.user.uname }}</span>
        <div>{{ rate.content }}</div>
        <div class="style">{{ daterate }}{{ rate.style }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/components/common/date";
export default {
  name: "Rate",

  data() {
    return {};
  },
  props: {
    rate: {
      type: Object,
      default: () => {},
    },
  },
  fetchProperty() {
    this.loading = true;
  },
  mounted() {},
  computed: {
    daterate() {
      const date = new Date(this.rate.created * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  methods: {},
};
</script>

<style scoped>
.top {
  border-bottom: 1px solid rgb(210, 209, 209);
  line-height: 50px;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  display: flex;
  padding: 10px;
}
.top span {
  flex: 1;
}
.top span:last-child {
  text-align: right;
}
.user > div:first-child img {
  border-radius: 100%;
  height: 80px;
}
.user > div:first-child {
  padding: 10px;
}
.user > div:first-child span {
  line-height: 50px;
  vertical-align: middle;
  font-size: 20px;
  margin-left: 10px;
  font-weight: 400;
}
.user > div:first-child div {
  line-height: 20px;
  margin-top: 10px;
}
.style {
  padding: 0px 0;
  color: rgb(146, 149, 152);
}
</style>