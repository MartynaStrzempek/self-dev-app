<template>
  <pie-chart :data="data"></pie-chart>
</template>

<script>
import PieChart from '../pieChart/pieChart.vue';
export default {
  data() {
    return {
      successStatus: 0,
      failureStatus: 0,
      partialSuccessStatus: 0
    }
  },
  computed: {
    currentGoalId() {
      return this.$store.getters["getCurrentGoalId"];
    },
    goal() {
      return this.$store.getters["getTargetGoal"](this.currentGoalId);
    },
    results() {
      return this.goal ? this.goal.Results : [];
    },
    data() {
      return [
        ['Status', 'percent from all'],
        ['Sukces', this.successStatus],
        ['Porażka', this.failureStatus],
        ['Cel awaryjny', this.partialSuccessStatus]
      ]
    }
  },
  components: {
    PieChart
  },
  methods: {
    countStatuses() {
      this.results.map(result => {
        if (result.StatusId === 1) this.successStatus += 1;
        else if (result.StatusId === 4) this.partialSuccessStatus += 1;
        else if (result.StatusId === 2) this.failureStatus += 1;
      })
    }
  },
  watch: {
    goal() {
      this.successStatus = 0;
      this.failureStatus = 0;
      this.partialSuccessStatus = 0;
      this.countStatuses();
    }
  }
}
</script>
