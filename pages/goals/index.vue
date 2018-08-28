<template>
  <div class="container">
    <adding-modal :visibility="addingModalVisibility" />
    <div class="row header">
      <div v-if="index === currentGoalId" v-for="(goal, index) in goals" class="goal-name col-sm-9" :key="index">
        <h1>{{ goal.name }}</h1>
      </div>
      <div class="buttons col-sm-3">
        <div class="add-button">
          <el-button type="primary" @click="addingModalVisibility = true">Add</el-button>
        </div>
        <div class="edit-button">
          <el-button plain>Edit</el-button>
        </div>
      </div>
    </div>
    <div class="row middle-area">
      <div class="left-arrow col-lg-2" @click="previousGoal">
        <i class="fas fa-angle-left"></i>
      </div>
      <calendar-chart v-if="index === currentGoalId" v-for="(goal, index) in goals" :key="index" :sub-goal="goal.subGoalName" class="col-lg-8" />
      <div class="right-arrow col-lg-2" @click="nextGoal">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="row">
      <div class="statistic-chart">Statistica</div>
    </div>
  </div>
</template>

<script>
import CalendarChart from '../../components/calendarChart/calendarChart.vue';
import AddingModal from '../../components/addingModal/addingModal.vue';
import * as ACTIONS from '../../store/actionTypes';
export default {
  data() {
    return {

    }
  },
  components: {
    CalendarChart,
    AddingModal
  },
  computed: {
    goals() {
      return this.$store.getters["getGoals"];
    },
    currentGoalId: {
      get() {
        return this.$store.getters["getCurrentGoalId"];
      },
      set(newValue) {
        this.$store.dispatch(ACTIONS.SET_CURRENT_GOAL_ID, newValue)
      }
    },
    addingModalVisibility: {
      get() {
        return this.$store.getters["getAddingModalVisibility"];
      },
      set(newValue) {
        if (newValue === true) this.$store.dispatch(ACTIONS.OPEN_ADDING_MODAL);
        else this.$store.dispatch(ACTIONS.CLOSE_ADDING_MODAL);
      }
    }
    // isLeftArrowDisabled() {
    //   return true;
    // },
    // isRightArrowDisabled() {
    //   return this.currentGoal === this.goals.length;
    // }
  },
  methods: {
    nextGoal() {
      if (this.currentGoalId < this.goals.length - 1) {
        this.currentGoalId++;
      }
    },
    previousGoal() {
      if (this.currentGoalId > 0) {
        this.currentGoalId--;
      }
    },
  }
}
</script>

<style scoped lang="scss">
.header {
  padding-top: 30px;
  .goal-name {
    display: flex;
    justify-content: center;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.middle-area {
  padding: 100px 0;
  .right-arrow, .left-arrow {
    font-size: 300%;
  }
  .right-arrow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.disabled {
  color: #dbe1ec;
  &:hover {
    cursor: not-allowed;
  }
}
</style>
