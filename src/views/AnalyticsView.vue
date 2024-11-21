<template>
  <div class="analytics-container">
    <img src="@/assets/bg.png" class="bg-image" alt="Background image">
    <card class="card">
        <h1 class="title">Analytics Dashboard</h1>
        <AnalyticsChart :onboardingCount="onboardingCount" :paidCount="paidCount" />
    </card>
  </div>
</template>

<script>
import AnalyticsChart from '@/components/AnalyticsChart.vue';
import Card from '@/components/CardComponent.vue'

export default {
  name: 'AnalyticsView',
  components: {
    AnalyticsChart,
    Card
  },
  data() {
    return {
      onboardingCount: 100, // Пример данных, замените на реальные
      paidCount: 50 // Пример данных, замените на реальные
    };
  }
}
</script>

<style scoped>
.card{
    width: max-content !important;
    height: max-content !important;
    z-index: 2;
}
@media (max-width: 1000px) {
    .card{
        width: max-content !important;
        height: max-content !important;
    }
}
.analytics-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}

.title {
  margin-bottom: 20px;
  font-size: 2rem;
}
</style>