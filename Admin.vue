<!-- 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果 -->

<template>
    <div class="min-h-screen bg-gray-50">
      <div class="container mx-auto px-6 py-8 max-w-7xl">
        <h1 class="text-2xl font-bold mb-8">管理员端</h1>
        
        <div class="flex gap-8">
          <!-- 左侧列表 -->
          <div class="w-1/3">
            <h2 class="text-lg font-medium mb-4">审核参赛信息</h2>
            <div class="space-y-4">
              <div v-for="(member, index) in memberList" 
                   :key="index"
                   class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                <span class="text-gray-800">{{ member.name }}</span>
                <el-button type="success" size="small" class="!rounded-button whitespace-nowrap">
                  通过
                </el-button>
              </div>
            </div>
          </div>
  
          <!-- 右侧表单 -->
          <div class="w-2/3">
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 class="text-lg font-medium mb-6">增加灵感</h2>
              <el-form :model="form" label-position="top">
                <el-form-item label="竞赛名称">
                  <el-input v-model="form.name" placeholder="请输入竞赛名称" class="!rounded-lg"/>
                </el-form-item>
                <el-form-item label="竞赛描述">
                  <el-input
                    v-model="form.description"
                    type="textarea"
                    :rows="6"
                    placeholder="请输入竞赛描述"
                    class="!rounded-lg"
                  />
                </el-form-item>
                <el-button type="primary" class="!rounded-button whitespace-nowrap">
                  增加完毕
                </el-button>
              </el-form>
            </div>
  
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-6">上传竞赛讲解视频</h2>
              <el-form :model="videoForm" label-position="top">
                <el-form-item label="视频名称">
                  <el-input v-model="videoForm.name" placeholder="请输入视频名称" class="!rounded-lg"/>
                </el-form-item>
                <el-form-item label="选择文件">
                  <el-upload
                    class="upload-demo"
                    action="#"
                    :auto-upload="false"
                    :limit="1"
                  >
                    <template #trigger>
                      <el-button type="primary" class="!rounded-button whitespace-nowrap">选择文件</el-button>
                    </template>
                    <template #tip>
                      <div class="text-gray-400 mt-2">支持 mp4、mov 格式视频文件</div>
                    </template>
                  </el-upload>
                </el-form-item>
                <el-button type="primary" class="!rounded-button whitespace-nowrap mt-4">
                  上传视频
                </el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const memberList = ref([
    { name: '张雨晨' },
    { name: '刘思远' },
    { name: '黄嘉琪' },
    { name: '吴子健' },
    { name: '林梓萱' }
  ]);
  
  const form = ref({
    name: '',
    description: ''
  });
  
  const videoForm = ref({
    name: ''
  });
  </script>
  
  <style scoped>
  .el-input :deep(.el-input__wrapper) {
    box-shadow: 0 0 0 1px #dcdfe6 inset;
  }
  
  .el-input :deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px #409eff inset;
  }
  
  .el-textarea :deep(.el-textarea__inner) {
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    border-radius: 0.5rem;
  }
  
  .el-textarea :deep(.el-textarea__inner:focus) {
    box-shadow: 0 0 0 1px #409eff inset;
  }
  </style>
  
  