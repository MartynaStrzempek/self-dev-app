<template>
  <div class="container">
    <modal
      :visibility="modalVisibility"
      :title="modalTitle"
      :editing="editing"
      :edited-goal="currentGoal"/>
    <div class="row header">
      <div class="goal-name col-sm-9">
        <transition name="fade" mode="out-in">
          <h1 v-if="index === currentGoalId" v-for="(goal, index) in goals" :key="index">{{ goal.goalName }}</h1>
        </transition>
      </div>
      <div class="buttons col-sm-3">
        <el-button class="add-button" type="primary" icon="el-icon-plus" circle @click="addGoal"></el-button>
        <el-button class="edit-button" icon="el-icon-edit" circle @click="editGoal"></el-button>
      </div>
    </div>
    <div class="row middle-area">
      <div class="left-arrow col-lg-1" @click="previousGoal">
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="calendar col-lg-10">
        <transition name="fade" mode="out-in">
          <calendar-chart
            v-if="index === currentGoalId"
            v-for="(goal, index) in goals"
            :key="index"
            :goal="currentGoal"
            :day-amount="180"/>
        </transition>
      </div>
      <div class="right-arrow col-lg-1" @click="nextGoal">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="row bottom d-flex justify-content-lg-around align-items-center">
      <div class="present-result-box col-lg-4">
        <!--<transition name="fade" mode="out-in">-->
          <present-result-box
            v-if="index === currentGoalId"
            v-for="(goal, index) in goals"
            :key="index"
            :goalId="currentGoalId"/>
        <!--</transition>-->
      </div>
      <div class="statistic-chart col-lg-4">
        <el-progress type="circle" :percentage="getPresentScore(currentGoalId)" :width="200" color="rgb(248, 160, 2)"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarChart from '../../components/calendarChart/calendarChart.vue';
import Modal from '../../components/modal/modal.vue';
import PresentResultBox from '../../components/presentResultBox/presentResultBox.vue';
import { countPoints } from "../../api/countPoints/countPoints";
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
    PresentResultBox
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
    getPresentScore(goalId) {
      const presentScore = Math.round(this.$store.getters["getPresentScore"](goalId) / this.currentGoal.scoreForReward * 100);
      if (presentScore >= 100) {
        this.$notify({
          title: 'Score!',
          message: 'Congratulations! You have just achieved as many points as You wanted! Now You can change your goal or reward',
          type: 'success',
          duration: 0
        });
      }
      return presentScore;
    },
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
  },
  mounted() {
    this.goals.map(goal => {
      this.$store.dispatch(ACTIONS.SET_PRESENT_SCORE, goal.id);
    })
  }
}
</script>

<style scoped lang="scss">
.header {
  padding-top: 60px;
  .goal-name {
    display: flex;
    justify-content: center;
    height: 48px;
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
  padding: 60px 0 80px 0;
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
  .calendar {
    height: 238px;
  }
}
.bottom {
  margin-bottom: 50px;
}
.disabled {
  color: #dbe1ec;
  &:hover {
    cursor: not-allowed;
  }
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave {

}

.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
  position: absolute;
}
</style>
