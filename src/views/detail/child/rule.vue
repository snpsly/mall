<template>
  <div class="info">
    <div class="rule">
      <div v-for="item in rules">
        <span>{{ item[0] }}</span
        ><span>{{ item[1] }}</span
        ><span>{{ item[2] }}</span
        ><span>{{ item[3] }}</span>
      </div>
    </div>
    <div class="set">
      <div v-for="item in set">
        <span>{{ item.key }}</span
        ><span>{{ item.value }}</span>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonRule",

  data() {
    return {};
  },
  props: {
    rule: {
      type: Array,
      default: () => [],
    },
    set: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},

  methods: {},
  computed: {
    rules() {
      return this.rule[0];
    },
  },
};
</script>

<style scoped>
.info {
}
.rule div {
  display: flex;
  padding: 20px;
  margin: 0 auto;
  width: 90%;
  border-bottom: 1px solid rgb(210, 209, 209);
}
.rule div > span {
  flex: 1;
}
.rule div:last-child {
  border-bottom: 2px solid rgb(210, 209, 209);
}
.set div {
  padding: 20px;
  margin: 0 auto;
  width: 90%;
  border-bottom: 1px solid rgb(210, 209, 209);
}
.set > div > span:last-child {
  margin-left: 40px;
  color: pink;
}
.set > div > span {
  line-height: 30px;
}
.set div:last-child {
  border-bottom: none;
}
</style>