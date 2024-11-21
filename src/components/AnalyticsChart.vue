<template>
  <div class="chart-container">
    <canvas id="analyticsChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: 'AnalyticsChart',
  props: {
    onboardingCount: {
      type: Number,
      required: true
    },
    paidCount: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('analyticsChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Completed Onboarding', 'Paid Users'],
          datasets: [{
            label: 'User Count',
            data: [this.onboardingCount, this.paidCount],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
</script>

<style scoped>
canvas {
  max-width: 600px;
  margin: 0 auto;
}
</style> 