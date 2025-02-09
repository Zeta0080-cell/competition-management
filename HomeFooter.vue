<template>
    <footer class="bg-gray-800 text-white text-center py-4 mt-8">
      <div class="container mx-auto">
        <p class="text-sm">版权所有 © 2025 <span class="font-semibold">GXNUCS</span>. All Rights Reserved.</p>
        <div class="mt-2 flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" class="hover:text-blue-400">
            <el-icon><Promotion /></el-icon> GitHub
          </a>
          <a href="https://twitter.com" target="_blank" class="hover:text-blue-400">
            <el-icon><ChatDotRound /></el-icon> Twitter
          </a>
          <a href="https://gxnucs.edu.cn" target="_blank" class="hover:text-blue-400">
            <el-icon><Link /></el-icon> 访问官网
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { Promotion, ChatDotRound, Link } from "@element-plus/icons-vue";
  
  export default defineComponent({
    name: "HomeFooter",
    components: {
      Promotion,
      ChatDotRound,
      Link
    }
  });
  </script>
  
  <style scoped>
  /* 适配 Element Plus 和 Tailwind */
  a {
    @apply text-sm flex items-center space-x-1;
  }
  </style>
  