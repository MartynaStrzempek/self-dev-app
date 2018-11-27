<template>
  <column-chart :data="data"></column-chart>
</template>

<script>
import ColumnChart from '../columnChart/columnChart.vue';
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
    goal() {
      return this.$store.getters["getTargetGoal"](this.currentGoalId);
    },
    results() {
      return this.goal ? this.goal.Results : [];
    },
    firstMonthId() {
      let id = this.activeMonths[this.activeMonths.length - 3].id + 1;
      return id < 10 ? '0' + id : id.toString();
    },
    secondMonthId() {
      let id = this.activeMonths[this.activeMonths.length - 2].id + 1;
      return id < 10 ? '0' + id : id.toString();
    },
    data() {
      return [
        ['Miesiąc', 'Sukces', 'Cel awaryjny', 'Porażka'],
        [this.firstMonth.name, this.firstMonth.successStatus, this.firstMonth.partialSuccessStatus, this.firstMonth.failureStatus],
        [this.secondMonth.name, this.secondMonth.successStatus, this.secondMonth.partialSuccessStatus, this.secondMonth.failureStatus]
      ]
    }
  },
  components: {
    ColumnChart
  },
  methods: {
    countStatuses() {
      this.results.map(result => {
        if (result.date.slice(5, 7) === this.firstMonthId) {
          if (result.StatusId === 1) this.firstMonth.successStatus += 1;
          else if (result.StatusId === 4) this.firstMonth.partialSuccessStatus += 1;
          else if (result.StatusId === 2) this.firstMonth.failureStatus += 1;
        }
        else if (result.date.slice(5, 7) === this.secondMonthId) {
          if (result.StatusId === 1) this.secondMonth.successStatus += 1;
          else if (result.StatusId === 4) this.secondMonth.partialSuccessStatus += 1;
          else if (result.StatusId === 2) this.secondMonth.failureStatus += 1;
        }
      });
    }
  },
  mounted() {
    this.firstMonth.name = this.activeMonths[this.activeMonths.length - 3].name;
    this.secondMonth.name = this.activeMonths[this.activeMonths.length - 2].name;
  },
  watch: {
    goal() {
      this.firstMonth = {
        ...this.firstMonth,
        successStatus: 0,
        failureStatus: 0,
        partialSuccessStatus: 0
      };
      this.secondMonth = {
        ...this.secondMonth,
        successStatus: 0,
        failureStatus: 0,
        partialSuccessStatus: 0
      };
      this.countStatuses();
    }
  }
}
</script>
