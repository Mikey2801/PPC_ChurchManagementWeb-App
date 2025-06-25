<template>
   <Doughnut :data="chartData" :options="chartOptions" />
</template>
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',

  data: () => ({

      chartData: {
        labels: ['Adult', 'Youth', 'Middle Age', 'Young Professional', 'Children'],
        datasets: [
    {
      backgroundColor: ['#EBB323', '#6EDD9E', '#9B15AA', '#24BAB2', '#B9993F'],
      data: [31, 27, 12, 22,8]
    }
  ]
      },
      chartOptions: {
        responsive: true
      }
  }),
  components: {
    Doughnut,
  },
};
</script>
<style scoped>

</style>
