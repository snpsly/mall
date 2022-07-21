<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/content/Tab/TabBar";

export default {
  name: "App",
  components: { TabBar },
};
</script>

<style>
@import url(@/assets/css/base.css);
#app {
}
</style>
