<template>
  <div class="container">
    <div class="row">
      <div
        class="calendar-wrapper col-lg-3"
        v-for="(goal, index) in goals"
        :key="index">
        <div class="goal-info">
          <div class="goal-name">
            {{ goal.goalName }}
            <div class="goal-details">
              <p>cel awaryjny: <b>{{ goal.subGoalName }}</b></p>
              <p>nagroda: <b>{{ goal.reward }}</b></p>
              <p>punkty do zdobycia: <b>{{ goal.scoreForReward }}</b></p>
              <!--<p>present points: <b>{{ goal.presentScore }}</b></p>-->
            </div>
          </div>
        </div>
        <calendar-chart
          :goal="goal"
          :day-amount="38"
          class="calendar"/>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarChart from "../../components/calendarChart/calendarChart.vue";
import * as ACTIONS from "../../store/actionTypes.js";
export default {
  computed: {
    goals() {
      return this.$store.getters["getGoals"];
    }
  },
  components: {
    CalendarChart,
  }
}
</script>

<style scoped lang="scss">
.row {
  padding-top: 40px;
  .calendar-wrapper {
    margin-top: 80px;
    .goal-info {
      height: 60px;
      font-size: 120%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .goal-name {
        position: relative;
        &:hover {
          cursor: pointer;
        }
        &:hover .goal-details {
          display: block;
        }
      }
      .goal-details {
        display: none;
        min-width: 300px;
        padding: 10px;
        font-size: 80%;
        color: white;
        z-index: 1;
        background-color: rgba(64, 158, 255, 0.7);
        position: absolute;
        top: 50%;
        left: 70%;
        p {
          margin: 0;
          padding: 2px 0;
        }
      }
    }
  }
}
</style>
