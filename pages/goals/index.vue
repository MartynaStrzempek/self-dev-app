<template>
  <div class="container">
    <modal
      :visibility="modalVisibility"
      :title="modalTitle"
      :editing="editing"
      :edited-goal="currentGoal"/>
    <div class="row header">
      <div v-if="index === currentGoalId" v-for="(goal, index) in goals" class="goal-name col-sm-9" :key="index">
        <h1>{{ goal.goalName }}</h1>
      </div>
      <div class="buttons col-sm-3">
        <div class="add-button">
          <!--<el-button type="primary" @click="addGoal">Add</el-button>-->
          <el-button type="warning" icon="el-icon-plus" circle @click="addGoal"></el-button>
        </div>
        <div class="edit-button">
          <!--<el-button plain @click="editGoal">Edit</el-button>-->
          <el-button type="primary" icon="el-icon-edit" circle @click="editGoal"></el-button>
        </div>
      </div>
    </div>
    <div class="row middle-area">
      <div class="left-arrow col-lg-1" @click="previousGoal">
        <i class="fas fa-angle-left"></i>
      </div>
      <calendar-chart
        v-if="index === currentGoalId"
        v-for="(goal, index) in goals"
        :key="index"
        :sub-goal="goal.subGoalName"
        :goal="currentGoal"
        class="col-lg-10" />
      <div class="right-arrow col-lg-1" @click="nextGoal">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="row bottom justify-content-lg-around">
      <todays-result-box
        v-if="index === currentGoalId"
        v-for="(goal, index) in goals"
        :key="index"
        class="todays-result-box col-lg-5"
        :goalId="currentGoalId"/>
      <div class="statistic-chart col-lg-5">Statistica</div>
    </div>
  </div>
</template>

<script>
import CalendarChart from '../../components/calendarChart/calendarChart.vue';
import Modal from '../../components/modal/modal.vue';
import TodaysResultBox from '../../components/todaysResultBox/todaysResultBox.vue';
import * as ACTIONS from '../../store/actionTypes';
export default {
  data() {
    return {
      editing: false,
    }
  },
  components: {
    CalendarChart,
    Modal,
    TodaysResultBox
  },
  computed: {
    modalVisibility() {
      return this.$store.getters["getModalVisibility"];
    },
    goals() {
      return this.$store.getters["getGoals"];
    },
    currentGoal() {
      return this.$store.getters["getTargetGoal"](this.currentGoalId);
    },
    currentGoalId: {
      get() {
        return this.$store.getters["getCurrentGoalId"];
      },
      set(newValue) {
        this.$store.dispatch(ACTIONS.SET_CURRENT_GOAL_ID, newValue)
      }
    },
    modalTitle() {
      if (this.editing) return "Edit the goal";
      else return "Add the goal"
    }
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
    addGoal() {
      this.$store.dispatch(ACTIONS.OPEN_MODAL);
      this.editing = false;
    },
    editGoal() {
      this.$store.dispatch(ACTIONS.OPEN_MODAL);
      this.editing = true;
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  padding-top: 50px;
  .goal-name {
    display: flex;
    justify-content: center;
    h1 {
      margin: 0;
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    .edit-button {
      padding-left: 15px;
    }
  }
}
.middle-area {
  padding: 50px 0 70px 0;
  .right-arrow, .left-arrow {
    font-size: 300%;
    &:hover {
      cursor: pointer;
    }
  }
  .right-arrow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .left-arrow {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
.bottom {
  .todays-result-box {
    margin-bottom: 50px;
  }
  .statistic-chart {
    border: 1px solid black;
  }
}
.disabled {
  color: #dbe1ec;
  &:hover {
    cursor: not-allowed;
  }
}
</style>
