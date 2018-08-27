<template>
  <div class="container">
    <div class="row header">
      <div v-if="index === currentGoal" v-for="(goal, index) in goals" class="goal-name" :key="index">
        <h1>{{ goal.name }}</h1>
      </div>
      <div class="buttons">
        <el-button type="primary">Add</el-button>
        <el-button plain>Edit</el-button>
      </div>
    </div>
    <div class="row">
      <div class="left-arrow" @click="previousGoal">
        <i class="fas fa-angle-left"></i>
      </div>
      <calendar-chart v-if="index === currentGoal" v-for="(goal, index) in goals" :key="index" :sub-goal="goal.subGoalName" />
      <div class="right-arrow" @click="nextGoal">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="row">
      <div class="statistic-ckart">Statistica</div>
    </div>
  </div>
</template>

<script>
import CalendarChart from '../../components/calendarChart/calendarChart.vue'
export default {
  data() {
    return {
      currentGoal: 0,
    }
  },
  components: {
    CalendarChart
  },
  computed: {
    goals() {
      return this.$store.getters["getGoals"];
    }
  },
  methods: {
    nextGoal() {
      if (this.currentGoal < this.goals.length - 1) this.currentGoal++;
    },
    previousGoal() {
      if (this.currentGoal > 0) this.currentGoal--;
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  .buttons {
    float: right;
  }
}
.right-arrow, .left-arrow {
  font-size: 300%;
}
</style>
