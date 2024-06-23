<!-- 组件的生命周期

创建 （创建前beforeCreate，创建完毕created）
挂载 （挂载前，挂载完毕） 将组件放在浏览器上就叫挂载
更新 （更新前，更新完毕）
销毁 （销毁前，销毁完毕）

生命周期钩子函数：

beforeCreate()：组件实例刚被创建，组件的属性、方法、事件都不可用。
created()：组件实例创建完成，但未挂载到DOM中。
beforeMount()：组件实例挂载开始之前调用。
mounted()：组件实例挂载完成之后调用。
beforeUpdate()：组件数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。
updated()：组件数据更新完成后调用，发生在虚拟DOM重新渲染和打补丁之后。
beforeDestroy()：组件实例销毁之前调用。
destroyed()：组件实例销毁之后调用。
-->



<template>
  <div class="person">
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="add">点我加1</button>
  </div>
</template>

<script>
export default {
  // 关闭后面的语法检查
  /* eslint-disable */
  name: 'Person',
  data() {
    return {
      sum: 1
    }
  },
  methods: {
    add() {
      this.sum += 1
    }
  },
  // 创建前 [只能创建一次]
  beforeCreate() {
    console.log('beforeCreate')
  },
  // 创建完毕
  created() {
    console.log('created')
  },
  // 挂载前
  beforeMount() {
    console.log('beforeMount')
  }, 
  // 挂载完毕
  mounted() {
    console.log('mounted')
  },

  // 更新前
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  // 更新完毕
  updated() {
    console.log('updated')
  },

  // 销毁前
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  // 销毁完毕
  destroyed() {
    console.log('destroyed')
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scoped 是局部样式，只对当前组件有效 -->
<style scoped>
.person {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;

}
</style>
