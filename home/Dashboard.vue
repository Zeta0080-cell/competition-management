<template>
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">仪表盘</h2>
  
      <!-- 统计卡片 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <el-card class="shadow-md hover:shadow-lg">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold">用户数</span>
              <el-icon><User /></el-icon>
            </div>
          </template>
          <p class="text-3xl font-bold text-blue-500">很多</p>
        </el-card>
  
        <el-card class="shadow-md hover:shadow-lg">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold">订单数</span>
              <el-icon><ShoppingCart /></el-icon>
            </div>
          </template>
          <p class="text-3xl font-bold text-green-500">很多</p>
        </el-card>
  
        <el-card class="shadow-md hover:shadow-lg">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold">销售额</span>
              <el-icon><Coin /></el-icon>
            </div>
          </template>
          <p class="text-3xl font-bold text-yellow-500">很多</p>
        </el-card>
      </div>
  
      <!-- 数据图表 -->
      <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">多就完了</h3>
        <v-chart class="h-80" :option="chartOption"></v-chart>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import { User, ShoppingCart, Coin } from "@element-plus/icons-vue";
  import { use } from "echarts/core";
  import { CanvasRenderer } from "echarts/renderers";
  import { LineChart } from "echarts/charts";
  import { GridComponent, TooltipComponent } from "echarts/components";
  import VChart from "vue-echarts";
  
  // 注册 ECharts 组件
  use([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);
  
  export default defineComponent({
    name: "Dashboard",
    components: {
      User,
      ShoppingCart,
      Coin,
      VChart
    },
    setup() {
      // 图表数据
      const chartOption = ref({
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [8200, 9320, 9010, 9340, 12900, 13300],
            type: "line",
            smooth: true,
            color: "#4A90E2",
          },
        ],
      });
  
      return {
        chartOption,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 让 Tailwind CSS 和 Element Plus 更协调 */
  :deep(.el-card) {
    @apply border border-gray-200;
  }
  </style>
  