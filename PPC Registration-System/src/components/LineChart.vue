<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script>
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale, Line } from 'chart.js'
import { Chart } from 'vue-chartjs'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Line)

export default {
  name: 'App',

  data: () => ({
    chartData: {
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [20, 40, 30]
        },
        {
          label: 'Data Two',
          backgroundColor: '#7C8CF8',
          data: [10, 20, 15]
        }
      ]
    },
    chartOptions: {
      responsive: true,
      scales: {
        x: [{
          type: 'linear',
          position: 'bottom'
        }],
        y: [{
          type: 'linear',
          position: 'left'
        }]
      }
    }
  }),
  components: {
    Line
  }
}
</script>

<style scoped>

</style>