<template>
    <RollingVerification></RollingVerification>
    <SliderVerification></SliderVerification>
    <!-- <Child :num="num"></Child>
    <div>
        parent---{{ num }}
    </div>
    <button @click="num++">点我加一</button>
    <button @click="handle">点我触发侦听器</button> -->
</template>

<script setup>
// import Debounce from '@/components/Debounce'
// import Throttle from '@/components/Throttle .vue'
import SliderVerification from './components/SliderVerification.vue';
import RollingVerification from './components/RollingVerification.vue';
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, reactive, ref, watch } from "vue";
import Child from "./components/Child.vue";

const num = ref(0)
onBeforeMount(() => {
    console.log('parent-onBeforeMount');
})
onMounted(() => {
    console.log('parent-onMounted');
})
onBeforeUpdate(() => {
    console.log('parent-onBeforeUpdate');
})
onUpdated(() => {
    console.log('parent-onUpdated');
})
console.log('parent-setup');
const obj = reactive({ name: 'ming', like: { fir: 'run', sec: 'fly' } })

const handle = ()=>{
    obj.like.fir = 'no-run'
}

watch(obj,()=>{
    console.log('触发侦听器');
})


</script>

<style></style>
