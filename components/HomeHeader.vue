<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    class="w-full bg-white shadow-md px-6"
    router
  >
    <el-menu-item index="/" class="text-lg font-medium">
      <el-icon><House /></el-icon> 首页
    </el-menu-item>
    <el-menu-item index="/dashboard" class="text-lg font-medium">
      <el-icon><PieChart /></el-icon> 仪表盘
    </el-menu-item>
    <el-menu-item index="/gxnu" class="text-lg font-medium">
      <el-icon><gxnu /></el-icon> gxnu推荐竞赛及分级
    </el-menu-item>
    <el-menu-item index="/List" class="text-lg font-medium">
      <el-icon><List /></el-icon> 竞赛列表及视频讲解
    </el-menu-item>
    <el-menu-item index="/CR" class="text-lg font-medium">
      <el-icon><CR /></el-icon> 竞赛上报
    </el-menu-item>
    <el-menu-item index="/Admin" class="text-lg font-medium">
      <el-icon><Admin /></el-icon> 管理员端(开发中)
    </el-menu-item>
    <el-menu-item index="/login" class="ml-auto text-lg font-medium text-red-500">
      <el-icon><SwitchButton /></el-icon> 退出
    </el-menu-item>
  </el-menu>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { House, PieChart, SwitchButton } from '@element-plus/icons-vue'
import CR from '../views/home/CR.vue' 
import Admin from '../views/home/Admin.vue' 
import List from '../views/home/List.vue' 
import gxnu from '../views/home/gxnu.vue'

export default defineComponent({
  components: {
    House,
    PieChart,
    SwitchButton,
  },
  setup() {
    const route = useRoute()
    const activeIndex = ref(route.path)

    // 监听路由变化，更新菜单的选中状态
    watch(() => route.path, (newPath) => {
      activeIndex.value = newPath
    })

    return {
      activeIndex
    }
  }
})
</script>

<style scoped>
/* 让 Element Plus 菜单和 Tailwind CSS 兼容 
:deep(.el-menu-item) {
  @apply px-4 py-2 hover:bg-gray-100 rounded-md;
}*/
</style>