<template>
<div>子组件：{{ modelValue }}</div>
<button @click="add">子组件+100</button>
</template>

<script setup>
let props = defineProps(['modelValue'])
let $emit = defineEmits(['update:modelValue'])
let add = ()=>{
  $emit('update:modelValue',props.modelValue+100)
}
</script>


