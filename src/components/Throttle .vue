<template>
    <div id="text">
        <el-button @click="sendTime">tijiao</el-button>
    </div>
</template>
  
<script setup>
const Throttle = (fun, wait) => {
    let timer;
    let delay = wait || 500;
    return function () {
        if (timer) return;
        timer = setTimeout(() => {
            fun();
            timer = null;
        }, delay);
    }
}
const sendTime = Throttle(() => {
    console.log(new Date());
}, 2000)


</script>
  
<style></style>
  