<template>
  <div id="pie-chart" style="width: 530px; height: 500px;"></div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  methods: {
    drawChart() {
      const vue = this;
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      console.log(...this.data)
      function drawChart() {
        const data = google.visualization.arrayToDataTable([
          ...vue.data
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
  },
  mounted() {
    this.drawChart();
  },
  watch: {
    data() {
      this.drawChart();
    }
  }
}
</script>
