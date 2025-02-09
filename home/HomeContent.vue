<template>
    <div class="p-6">
      <!-- 欢迎卡片 -->
      <el-card class="shadow-md mb-6">
        <div class="flex items-center">
          <el-avatar :size="60" src="https://source.unsplash.com/100x100/?avatar" class="mr-4" />
          <div>
            <h2 class="text-xl font-semibold text-gray-700">欢迎回来, 用户！</h2>
            <p class="text-gray-500">今天是 {{ currentDate }}</p>
          </div>
        </div>
      </el-card>
  
      <!-- 快捷操作按钮 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <el-button type="primary" size="large" icon="Plus" class="w-full">新建任务（敬请期待）</el-button>
        <el-button type="success" size="large" icon="Document" class="w-full">查看报告（敬请期待）</el-button>
        <el-button type="warning" size="large" icon="UserFilled" class="w-full">管理用户（同左）</el-button>
        <el-button type="danger" size="large" icon="Delete" class="w-full">删除数据（同左）</el-button>
      </div>
  
      <!-- 公告板 -->
      <el-card class="mt-6 shadow-md">
        <template #header>
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold">最新公告</span>
            <el-button type="info" text>查看更多</el-button>
          </div>
        </template>
        <el-timeline>
          <el-timeline-item timestamp="2025-01-28" type="primary">
            <p>🎉 欢迎来到新的仪表盘！体验最新功能。</p>
          </el-timeline-item>
          <el-timeline-item timestamp="2025-01-20" type="success">
            <p>🚀 新增数据统计模块，提高工作效率！</p>
          </el-timeline-item>
          <el-timeline-item timestamp="2025-01-15" type="warning">
            <p>⚠️ 服务器将在 1 月 30 日凌晨维护。</p>
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "HomeContent",
    setup() {
      const currentDate = ref(new Date().toLocaleDateString());
  
      return {
        currentDate
      };
    }
  });
  </script>
  
  <style scoped>
  /* 让 Element Plus 的卡片更协调 */
  :deep(.el-card) {
    @apply border border-gray-200;
  }
  </style>
  