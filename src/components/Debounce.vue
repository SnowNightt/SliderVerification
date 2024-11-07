<template>
    <div id="text">
      <el-input v-model.trim="queryForm" placeholder="请输入" @input="handleInputChange"></el-input>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const queryForm = ref('')
  const debounce = (fun, wait) => {
    let delay = wait || 500;
    let timer;
    return () => {
      if (timer) timer = clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fun()
      }, delay);
    }
  }
  const handleInputChange = debounce(() => {
    console.log(new Date());
  }, 2000)
  
  
  
  </script>
  
  <style></style>
  