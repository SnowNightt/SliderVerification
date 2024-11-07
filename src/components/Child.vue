<template>
    <div>
        child---{{ num }}
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';
const prop = defineProps({
    num: {
        type: Number
    }
})
onBeforeMount(() => {
    console.log('child-onBeforeMount');
})
onMounted(() => {
    console.log('child-onMounted');
})
onBeforeUpdate(() => {
    console.log('child-onBeforeUpdate');
})
onUpdated(() => {
    console.log('child-onUpdated');
})
console.log('child-setup');

</script>

<style scoped></style>