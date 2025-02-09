<!-- 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果 -->

<template>
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-5xl mx-auto py-8 px-4">
        <h1 class="text-2xl font-bold mb-8 text-gray-800">近期考试安排</h1>
        
        <div class="space-y-4">
          <div v-for="exam in examList" :key="exam.id" 
            class="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md cursor-pointer">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-medium text-gray-800 mb-2">{{ exam.name }}</h3>
                <p class="text-gray-600 mb-2">
                  日期: {{ exam.date }}
                </p>
                <div class="flex items-center mb-3">
                  <span class="text-gray-600 mr-2">推荐指数:</span>
                  <div class="flex">
                    <el-icon v-for="n in 5" :key="n" 
                      :class="n <= exam.stars ? 'text-yellow-400' : 'text-gray-300'">
                      <Star />
                    </el-icon>
                  </div>
                </div>
              </div>
              <el-button type="primary" size="small" class="!rounded-button whitespace-nowrap">
                报名参加
              </el-button>
            </div>
            <div class="mt-2">
              <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">
                查看完整赛事详情 >
              </a>
            </div>
          </div>
        </div>
        
        <div class="flex justify-center mt-8">
          <el-pagination
            v-model:current-page="currentPage"
            :page-size="10"
            :total="50"
            layout="prev, pager, next"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { Star } from '@element-plus/icons-vue';
  
  const currentPage = ref(1);
  
  interface Exam {
    id: number;
    name: string;
    date: string;
    stars: number;
  }
  
  const examList = ref<Exam[]>([
    {
      id: 1,
      name: '全国数学竞赛',
      date: '2023-11-05',
      stars: 5
    },
    {
      id: 2,
      name: '市级物理竞赛',
      date: '2023-11-20',
      stars: 5
    },
    {
      id: 3,
      name: '全国化学竞赛',
      date: '2023-11-25',
      stars: 3
    },
    {
      id: 4,
      name: '省级英语竞赛',
      date: '2023-12-01',
      stars: 5
    },
    {
      id: 5,
      name: '省级生物竞赛',
      date: '2023-12-05',
      stars: 4
    },
    {
      id: 6,
      name: '全国信息学奥赛',
      date: '2023-12-10',
      stars: 5
    },
    {
      id: 7,
      name: '市级数学竞赛',
      date: '2023-12-15',
      stars: 4
    },
    {
      id: 8,
      name: '全国物理奥赛',
      date: '2023-12-20',
      stars: 5
    },
    {
      id: 9,
      name: '省级化学竞赛',
      date: '2023-12-25',
      stars: 4
    },
    {
      id: 10,
      name: '全国英语竞赛',
      date: '2023-12-30',
      stars: 5
    }
  ]);
  </script>
  
  <style scoped>
  .el-pagination {
    justify-content: center;
  }
  </style>
  
  