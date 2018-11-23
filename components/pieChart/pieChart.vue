<template>
  <div id="pie-chart" style="width: 530px; height: 500px;"></div>
</template>

<script>
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
      return this.goal ? this.goal.Results: [];
    }
  },
  methods: {
    countStatuses() {
      console.log("res", this.results)
      this.results.map(result => {
        if (result.StatusId === 1) this.successStatus += 1;
        else if (result.StatusId === 4) this.partialSuccessStatus += 1;
        else if (result.StatusId === 2) this.failureStatus += 1;
      })
    }
  },
  mounted() {
    const vue = this;

    this.countStatuses();

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      const data = google.visualization.arrayToDataTable([
        ['Status', 'percent from all'],
        ['Sukces', vue.successStatus],
        ['Porażka', vue.failureStatus],
        ['Cel awaryjny', vue.partialSuccessStatus]
      ]);

      const options = {
        colors: ['#99FFB3', '#FF5F60', '#FFC566'],
        legend: {
          position: 'none'
        }
      };

      const chart = new google.visualization.PieChart(document.getElementById('pie-chart'));

      chart.draw(data, options);
    }
  }
}
</script>
