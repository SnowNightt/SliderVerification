<template>
    <div id="rolling">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>请将图片转正</span>
                </div>
            </template>
            <div class="img">
                <img src="@/assets/images/24.jpg" ref="img">
            </div>
            <template #footer>
                <div class="footer">
                    <div class="rollingVer" ref="rollingVer">
                        <div class="btn" ref="btn" @mousedown="mouseDown"></div>
                        <div class="text" ref="text" onselectstart="return false">请拖动滑块</div>
                        <div class="bg" ref="bg"></div>
                    </div>
                    <div class="sub">
                        <el-button type="primary">提交</el-button>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// 获取dom节点
const rollingVer = ref();
const btn = ref();
const bg = ref();
const img = ref();
const text = ref();
// 获取鼠标按下时的位置
let mouseDownX;
// 滑块移动的距离
let moveDistance;
// 滑块可移动的最大距离
let maxDistance;
// 图片旋转值
let rotateValue;
// 鼠标移动事件的回调
const mouseMove = (event) => {
    // 获取当前鼠标位置
    const mouseMoveX = event.clientX;
    // 计算滑块移动距离
    moveDistance = mouseMoveX - mouseDownX;
    // 判断边界
    if (moveDistance < 0) {
        moveDistance = 0;
    }
    else if (moveDistance > maxDistance) {
        moveDistance = maxDistance;
    }
    // 滑块移动
    btn.value.style.transform = `translate(${moveDistance}px)`;
    bg.value.style.width = moveDistance + 'px';
    // 图片转动
    img.value.style.transform = `rotate(${(moveDistance + 150)}deg)`;
    const rotate = img.value.style.transform;
    // 设置正则规则
    const reg = /[0-9]+/;
    // 匹配到返回一个数组
    rotateValue = reg.exec(rotate)[0];
    document.addEventListener('mouseup', mouseUp);
}
// 鼠标按下事件的回调
const mouseDown = (e) => {
    // 获取鼠标按下时的位置
    mouseDownX = e.clientX;
    // 绑定鼠标移动事件
    document.addEventListener('mousemove', mouseMove);
}
// 鼠标松开事件的回调
const mouseUp = () => {
    // 验证成功，误差范围在350~365中间
    if (rotateValue >= 350 && rotateValue <= 365) {
        setTimeout(() => {
            bg.value.style.backgroundColor = 'lightgreen';
            text.value.textContent = '验证成功';
        }, 200);
        // 鼠标移动事件解绑
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    }
    // 验证失败
    else {
        // 鼠标移动事件解绑
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        btn.value.style.transform = `translate(0)`;
        bg.value.style.width = 50 + 'px';
        // 图片转动
        img.value.style.transform = `rotate(150deg)`;
    }
}
onMounted(() => {
    // 获取滑动条的宽度
    const rollingVerWidth = rollingVer.value.offsetWidth;
    // 获取滑块的宽度
    const btnWidth = btn.value.offsetWidth;
    // 滑块可移动的最大距离
    maxDistance = rollingVerWidth - btnWidth;
})
</script>

<style scoped>
#rolling {
    -moz-user-select: none;
    /*火狐*/

    -webkit-user-select: none;
    /*webkit浏览器*/

    -ms-user-select: none;
    /*IE10*/

    -khtml-user-select: none;
    /*早期浏览器*/

    user-select: none;

}

.box-card {
    width: 500px;
    height: 300px;
}

.card-header {
    text-align: center;
}

.img {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 150px;
    height: 150px;
}

.img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all .5 linear;
    transform: rotate(150deg);
}

.footer {
    display: flex;
}

.rollingVer {
    position: relative;
    width: 320px;
    height: 40px;
    background-color: #e8e8e8;
}

.text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
}

::v-deep .el-card__footer {
    padding: 5.5px 0 0 40px;
}

.sub {
    display: flex;
    align-items: center;
    margin-left: 50px;
}

.btn {
    position: absolute;
    height: 40px;
    width: 50px;
    background-color: #ccc;
    z-index: 99;
}

.bg {
    width: 50px;
    height: 100%;
    background-color: #75CDF9;
}
</style>