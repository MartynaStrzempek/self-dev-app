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
          <h1 v-if="goalIdsArray[index] === currentGoalId" v-for="(goal, index) in goals" :key="index">{{ goal.goalName }}</h1>
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
            v-if="goalIdsArray[index] === currentGoalId"
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
        <present-result-box
          v-if="goalIdsArray[index] === currentGoalId"
          v-for="(goal, index) in goals"
          :key="index"
          :goalId="currentGoalId"/>
      </div>
      <!--<div class="statistic-chart col-lg-4">-->
        <!--<el-progress type="circle" :percentage="getPercentagePresentScore()" :width="200" color="rgb(248, 160, 2)"></el-progress>-->
      <!--</div>-->
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
    },
    userId() {
      return this.$store.getters["getUserId"];
    },
    goalIdsArray() {
      return this.$store.getters["getGoalIdsArray"];
    },
    prise() {
      return this.$store.getters["getTargetPrise"](this.currentGoalId);
    }
  },
  methods: {
    getPercentagePresentScore() {
      const percentagePresentScore = Math.round(this.prise.presentScore / this.prise.score * 100);
      if (percentagePresentScore >= 100) {
        this.$notify({
          title: 'Score!',
          message: 'Congratulations! You have just achieved as many points as You wanted! Now You can change your goal or reward',
          type: 'success',
          duration: 0
        });
      }
      return percentagePresentScore;
    },
    nextGoal() {
      const index = this.goalIdsArray.indexOf(this.currentGoalId);
      if (index < this.goalIdsArray.length - 1) this.currentGoalId = this.goalIdsArray[index + 1];
    },
    previousGoal() {
      const index = this.goalIdsArray.indexOf(this.currentGoalId);
      if (index > 0) this.currentGoalId = this.goalIdsArray[index - 1];
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
  async mounted() {
    await this.$store.dispatch(ACTIONS.FETCH_GOALS, { userId: this.userId, isFirstFetch: true });
    await this.$store.dispatch(ACTIONS.FETCH_PRISE, this.goals);

    this.goals.map(goal => {
      // this.$store.dispatch(ACTIONS.SET_PRESENT_SCORE, goal.id);
    });
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
