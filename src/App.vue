<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>

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
