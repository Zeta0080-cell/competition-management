<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-2xl font-bold mb-8 text-gray-800">竞赛上报</h1>
        
        <div class="space-y-6">
          <!-- 竞赛名称 -->
          <div class="form-group">
            <label class="block text-sm font-medium text-gray-700 mb-2">竞赛名称</label>
            <div class="relative">
              <input
                type="text"
                v-model="competitionName"
                placeholder="如: 全国大学生数学建模竞赛"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>
          </div>
  
          <!-- 竞赛类别 -->
          <div class="form-group">
            <label class="block text-sm font-medium text-gray-700 mb-2">竞赛类别</label>
            <el-select v-model="competitionType" placeholder="校级一类" class="w-full">
              <el-option label="校级一类" value="school-1" />
              <el-option label="校级二类" value="school-2" />
              <el-option label="省级一类" value="province-1" />
              <el-option label="省级二类" value="province-2" />
              <el-option label="国家级一类" value="national-1" />
              <el-option label="国家级二类" value="national-2" />
            </el-select>
          </div>
  
          <!-- 指导老师 -->
          <div class="form-group">
            <label class="block text-sm font-medium text-gray-700 mb-2">指导老师</label>
            <input
              type="text"
              v-model="teacher"
              placeholder="请输入指导老师姓名"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
  
          <!-- 竞赛时间 -->
          <div class="form-group">
            <label class="block text-sm font-medium text-gray-700 mb-2">竞赛时间</label>
            <el-date-picker
              v-model="competitionDate"
              type="date"
              placeholder="选择日期"
              format="YYYY/MM/DD"
              value-format="YYYY/MM/DD"
              class="w-full"
            />
          </div>
  
          <!-- 竞赛证书 -->
          <div class="form-group">
            <label class="block text-sm font-medium text-gray-700 mb-2">竞赛证书</label>
            <el-upload
              class="upload-demo"
              drag
              action="#"
              :auto-upload="false"
              :on-change="handleFileChange"
            >
              <el-icon class="el-icon--upload"><Upload /></el-icon>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <template #tip>
                <div class="el-upload__tip text-xs text-gray-500 mt-1">
                  支持 jpg/png/pdf 文件，单个文件不超过 10MB
                </div>
              </template>
            </el-upload>
          </div>
  
          <!-- 提交按钮 -->
          <div class="flex justify-center mt-8">
            <button
              @click="submitForm"
              class="!rounded-button px-8 py-3 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap"
            >
              提交完整材料
            </button>
          </div>
  
          <!-- 上报竞赛结果 -->
          <div class="mt-12">
            <h2 class="text-xl font-bold mb-6 text-gray-800">上报竞赛结果</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-500 text-sm mb-4">上传竞赛结果证明文件</p>
              <el-upload
                class="upload-demo"
                drag
                action="#"
                :auto-upload="false"
                :on-change="handleResultFileChange"
              >
                <el-icon class="el-icon--upload"><Upload /></el-icon>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip text-xs text-gray-500 mt-1">
                    未选择文件
                  </div>
                </template>
              </el-upload>
              
              <div class="flex justify-center mt-6">
                <button
                  @click="submitResult"
                  class="!rounded-button px-8 py-3 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap"
                >
                  提交竞赛结果
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import { Upload } from '@element-plus/icons-vue';
  
  const competitionName = ref('');
  const competitionType = ref('');
  const teacher = ref('');
  const competitionDate = ref('');
  const fileList = ref([]);
  
  const handleFileChange = (file: any) => {
    fileList.value = [file];
  };
  
  const handleResultFileChange = (file: any) => {
    fileList.value = [file];
  };
  
  const submitForm = () => {
    if (!competitionName.value) {
      ElMessage.warning('请输入竞赛名称');
      return;
    }
    if (!competitionType.value) {
      ElMessage.warning('请选择竞赛类别');
      return;
    }
    if (!teacher.value) {
      ElMessage.warning('请输入指导老师');
      return;
    }
    if (!competitionDate.value) {
      ElMessage.warning('请选择竞赛时间');
      return;
    }
    ElMessage.success('提交成功');
  };
  
  const submitResult = () => {
    if (fileList.value.length === 0) {
      ElMessage.warning('请上传竞赛结果文件');
      return;
    }
    ElMessage.success('竞赛结果提交成功');
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  :deep(.el-upload-dragger) {
    width: 100%;
    height: 160px;
    background: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: border-color .3s;
  }
  
  :deep(.el-upload-dragger:hover) {
    border-color: #409eff;
  }
  
  :deep(.el-date-editor.el-input) {
    width: 100%;
  }
  
  :deep(.el-select) {
    width: 100%;
  }
  </style>
  
  