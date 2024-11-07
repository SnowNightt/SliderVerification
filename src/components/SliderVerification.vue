<template>
    <div class="drag" ref="drag">
        <div class="bg" ref="bg"></div>
        <div class="text" onselectstart="return false" ref="text">请拖动滑块解锁</div>
        <div class="btn" ref="btn" @mousedown="mouseDowm" @mouseup="mouseUp">&gt;&gt;</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// 获取dom节点
const bg = ref();
const text = ref();
const btn = ref();
const drag = ref();
// 验证成功时滑块需要滑动的距离
let successDistance;
// 获取鼠标按下时的位置
let mouseDownX;
// 设置验证是否成功，默认为否
let success = false;
// 鼠标移动时的回调
const mouseMove = (event) => {
    const mouseMoveX = event.clientX;
    // 滑块移动距离
    let finalMoveX = mouseMoveX - mouseDownX;
    // 边界判断
    if (finalMoveX > successDistance) {
        finalMoveX = successDistance;
    }
    else if (finalMoveX < 0) {
        finalMoveX = 0;
    }
    // 滑块移动
    btn.value.style.transform = `translateX(${finalMoveX}px)`;
    // 背景颜色宽度动态变化
    bg.value.style.width = finalMoveX + 'px';
    if (finalMoveX == successDistance) {
        success = true;
        // btn.value.removeEventListener('mousedown');
        setTimeout(() => {
            alert('验证成功1');
        }, 500);
        text.value.textContent = '验证成功';
        bg.value.style.backgroundColor = 'lightgreen';
        // 鼠标移动事件解绑
        document.removeEventListener('mousemove', mouseMove);
    }
}
// 鼠标按下事件的回调
const mouseDowm = (e) => {
    mouseDownX = e.clientX;
    // 绑定鼠标移动事件
    document.addEventListener('mousemove', mouseMove)
}
// 鼠标松开事件的回调
const mouseUp = () => {
    if (success) {
        return;
    }
    else {
        // 鼠标移动事件解绑
        document.removeEventListener('mousemove', mouseMove);
        btn.value.style.transform = "translateX(0)";
        bg.value.style.width = 40 + 'px';
    }
}
onMounted(() => {
    // 获取滑动条的宽度
    const dragWidth = drag.value.offsetWidth;
    // 获取滑块的宽度
    const btnWidth = btn.value.offsetWidth;
    // 验证成功时滑块需要滑动的距离
    successDistance = dragWidth - btnWidth;

})

</script>

<style scoped>
.drag {
    width: 300px;
    height: 40px;
    line-height: 40px;
    background-color: #e8e8e8;
    position: relative;
    margin: 0 auto;
}

.bg {
    width: 40px;
    height: 100%;
    position: absolute;
    background-color: #75CDF9;
}

.text {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
}

.btn {
    width: 40px;
    height: 38px;
    position: absolute;
    border: 1px solid #ccc;
    cursor: move;
    font-family: "宋体";
    text-align: center;
    background-color: #fff;
    user-select: none;
    color: #666;
}
</style>