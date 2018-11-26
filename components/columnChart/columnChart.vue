<template>
  <div id="column-chart"></div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  methods: {
    drawChart() {
      const vue = this;

      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        const data = google.visualization.arrayToDataTable([
          ...vue.data
        ]);

        const options = {
          colors: ['#99FFB3', '#FFC566', '#FF5F60'],
          legend: {
            position: 'none',
            alignment: 'center'
          }
        };

        const chart = new google.charts.Bar(document.getElementById('column-chart'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
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
