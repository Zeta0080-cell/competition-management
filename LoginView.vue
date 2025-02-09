<template>
  <div class="login-container">
    <div class="login-box">
      <div class="title-section">
        <h1 class="text-5xl font-bold mb-4 text-white">Alpha-409</h1>
        <p class="text-2xl text-gray-300 mb-12">Competition Management System</p>
      </div>
      <div class="account-section mb-2">
        <p class="text-sm text-gray-400">
          <a href="#" class="text-blue-500 hover:text-blue-400 transition-colors duration-300"></a>
        </p>
      </div>
      <div class="form-section">
        <div class="mb-8">
          <label class="text-gray-400 text-sm mb-1 block">用户名</label>
          <div class="relative">
            <input
              type="email"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-4 px-5 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
              placeholder="请输入用户名"
              v-model="username"
            >
          </div>
        </div>
        <div class="mb-8">
          <label class="text-gray-400 text-sm mb-1 block">密码</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              class="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white pr-12 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              placeholder="请输入密码"
            >
            <button
              @click="togglePassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
            >
              <el-icon v-if="showPassword"><View /></el-icon>
              <el-icon v-else><Hide /></el-icon>
            </button>
          </div>
        </div>
        <button
          @click="handleLogin"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 text-lg rounded-lg transition-colors duration-300 !rounded-button whitespace-nowrap"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { View, Hide } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { login } from '@/api';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const username = ref('test'); // 默认用户名为 test
const password = ref('gxnu'); // 默认密码为 gxnu
const showPassword = ref(false);

const handleLogin = async () => {
  if (!username.value || !password.value) {
    ElMessage.error('请输入学号和密码！');
    return;
  }

  try {
    const response = await login({ username: username.value, password: password.value });
    if (response.code === 200) {
      ElMessage.success(response.message);
      const authStore = useAuthStore(); // 实例化 store
      authStore.setToken(response.data.token); // 保存 token
      router.push('/'); // 跳转到首页
    } else {
      ElMessage.error(response.message);
    }
  } catch (error) {
    ElMessage.error('登录失败，请检查网络！');
    console.error(error);
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e2130 0%, #2a2f42 100%);
  background-size: cover;
  background-position: center;
}
.login-box {
  width: 100%;
  max-width: 560px;
  padding: 3.5rem;
  border-radius: 1.5rem;
  background: rgba(26, 32, 44, 0.7);
  backdrop-filter: blur(10px);
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>