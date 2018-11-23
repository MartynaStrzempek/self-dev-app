<template>
  <div id="column-chart"></div>
</template>

<script>
export default {
  data() {
    return {
      firstMonth: {
        name: "",
        successStatus: 0,
        failureStatus: 0,
        partialSuccessStatus: 0
      },
      secondMonth: {
        name: "",
        successStatus: 0,
        failureStatus: 0,
        partialSuccessStatus: 0
      }
    }
  },
  computed: {
    activeMonths() {
      return this.$store.getters["getActiveMonths"];
    },
    currentGoalId() {
      return this.$store.getters["getCurrentGoalId"];
    },
    results() {
      return this.$store.getters["getTargetGoal"](this.currentGoalId).Results;
    },
    firstMonthId() {
      let id = this.activeMonths[this.activeMonths.length - 3].id + 1;
      return id < 10 ? '0' + id : id.toString();
    },
    secondMonthId() {
      let id = this.activeMonths[this.activeMonths.length - 2].id + 1;
      return id < 10 ? '0' + id : id.toString();
    }
  },
  methods: {
    countStatuses() {
      console.log(this.firstMonthId, this.secondMonthId)
      this.results.map(result => {
        if (result.date.slice(5, 7) === this.firstMonthId) {
          console.log(result.date.slice(5, 7))
          if (result.StatusId === 1) this.firstMonth.successStatus += 1;
          else if (result.StatusId === 4) this.firstMonth.partialSuccessStatus += 1;
          else if (result.StatusId === 2) this.firstMonth.failureStatus += 1;
        }
        else if (result.date.slice(5, 7) === this.secondMonthId) {
          console.log(result.date.slice(5, 7))
          if (result.StatusId === 1) this.secondMonth.successStatus += 1;
          else if (result.StatusId === 4) this.secondMonth.partialSuccessStatus += 1;
          else if (result.StatusId === 2) this.secondMonth.failureStatus += 1;
        }
      });

      this.firstMonth.name = this.activeMonths[this.activeMonths.length - 3].name;
      this.secondMonth.name = this.activeMonths[this.activeMonths.length - 2].name;
      console.log(this.firstMonthId, this.secondMonthId, this.firstMonth, this.secondMonth)
    }
  },
  mounted() {
    const vue = this;

    this.countStatuses();

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      const data = google.visualization.arrayToDataTable([
        ['Miesiąc', 'Sukces', 'Cel awaryjny', 'Porażka'],
        [vue.firstMonth.name, vue.firstMonth.successStatus, vue.firstMonth.partialSuccessStatus, vue.firstMonth.failureStatus],
        [vue.secondMonth.name, vue.secondMonth.successStatus, vue.secondMonth.partialSuccessStatus, vue.secondMonth.failureStatus]
      ]);

      const options = {
        chart: {

        },
        legend: {
          position: 'none',
          alignment: 'center'
        }
      };

      const chart = new google.charts.Bar(document.getElementById('column-chart'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}
</script>
