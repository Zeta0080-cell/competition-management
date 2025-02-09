<template>
  <div>
    <HomeHeader />
    <router-view /> <!-- 用于显示子路由内容 -->
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";

export default {
  name: "HomeView",
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>
