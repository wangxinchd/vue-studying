<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts' // 引入 echarts核心模块


const chart = ref(); // 声明一个 ref 变量，用于存储 dom 元素

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(chart.value)

  // 绘制图表
  var option = {
    title: {
      text: 'Echarts 入门示例',
    },
    legend: {

      data: ['销量']
    },
    'xAxis': {
      'type': 'category',
      'data': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      'type': 'value'
    },
    series: [{
      'name': '销量',
      'data': [820, 932, 901, 934, 1290, 1330, 1320],
      'type': 'line'
    }]

  };
  myChart.setOption(option)
})

</script>

<template>
  <div>
    <div ref="chart" style="width: 1000px;height: 400px;"></div>
  </div>
</template>

<style scoped></style>
