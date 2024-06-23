<template>
  <div id="app">
    <Person v-if="isShow"/> <!-- v-if 指令控制 Person 组件的显示，如果为false组件销毁 -->
  </div>
</template>

<script>
import Person from './components/Person.vue';

export default {
  name: 'App',
  components: {
    Person
  },
  data() {
    return {
      isShow: true
    }
  },

}
</script>

<style>
</style>
