<template>
    <div class="person">
        <h2>{{ name }}</h2>
        <p>{{ age }}</p>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话号码</button>
    </div>
</template>

<!-- 选项式 app -->
<script>
export
    default {
        name: 'Person',

        setup() {  // 不能在 setup 中使用 this，setup中的this是undefined   vue3中已经弱化了 this
            // 数据不是响应式的 所以修改之后不能渲染界面
            let name = '张三';
            let age = 25;
            let tel = '13812345678';

            // 方法
            function changeName() {
                name = "李四"     // 注意: 这样修改name,页面是没有变化的， 但是name确实修改了
            }

            function changeAge() {
                age += 1; // 注意: 这样修改 age,页面是没有变化的，但是 age确实修改了
            }

            function showTel() {
                alert(tel);    // 这里的 this 指向当前组件实例
            }

            return {
                name,
                age,
                changeName,
                changeAge,
                showTel
            }

            //setup的返回值也可以是渲染函数
            // return () => "hallo"
        }
    }
</script>

<style scoped>
.person {
    background-color: #3cce17;
    border: 1px solid #ccc;
}
</style>