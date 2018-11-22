<template>
  <div class="box">
    <div class="title">Zaznacz dzisiejszy status</div>
    <div class="radio-buttons">
      <el-radio class="radio-button" v-model="presentStatus" label="done">Sukces</el-radio>
      <el-radio class="radio-button" v-model="presentStatus" label="partiallyDone">Cel awaryjny</el-radio>
      <el-radio class="radio-button" v-model="presentStatus" label="notDone">Porażka</el-radio>
      <el-radio class="radio-button" v-model="presentStatus" label="unchecked">Nie pamiętam</el-radio>
    </div>
    <note-modal :visibility="noteModalVisibility" :goal-id="goalId" :result-id="resultId" :status-id="statusId"/>
  </div>
</template>

<script>
  import * as ACTIONS from "../../store/actionTypes.js";
  import NoteModal from "../../components/noteModal/noteModal.vue";
  export default {
    data() {
      return {
        presentStatus: '',
      }
    },
    computed: {
      goalId() {
        return this.$store.getters["getCurrentGoalId"];
      },
      goal() {
        return this.$store.getters["getTargetGoal"](this.goalId);
      },
      resultId() {
        let result = this.goal.Results.find(result => result.date === this.createResultDate());
        return result ? result.id : null;
      },
      statusId() {
        let result = this.goal.Results.find(result => result.date === this.createResultDate());
        return result ? result.StatusId : null;
      },
      noteModalVisibility() {
        return this.$store.getters["getNoteModalVisibility"];
      }
    },
    components: {
      NoteModal,
    },
    methods: {
      createResultDate() {
        const today = new Date();
        let year,
          month = today.getMonth() + 1,
          day = today.getDate();

        if (day.toString().length < 2) day = `0${day}`;
        if (month.toString().length < 2) month = `0${month}`;

        year = today.getFullYear();

        return `${year}-${month}-${day}`;
      }
    },
    watch: {
      presentStatus: function() {
        if (this.presentStatus === "notDone") this.$store.dispatch(ACTIONS.OPEN_NOTE_MODAL);
        if (this.resultId) {
          this.$store.dispatch(ACTIONS.UPDATE_RESULT, {
            goalId: this.goalId,
            resultId: this.resultId,
            updatedResult: {
              status: this.presentStatus
            }
          });
        }
        else {
          this.$store.dispatch(ACTIONS.SET_RESULT, {
            goalId: this.goalId,
            resultDate: this.createResultDate(),
            status: this.presentStatus
          });
        }
      }
    },
  }
</script>

<style scoped lang="scss">
.box {
  padding: 0;
  border: 1px solid #66b1ff;
  .title {
    height: 60px;
    background-color: #66b1ff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120%;
    font-weight: bold;
  }
  .radio-buttons {
    display: flex;
    flex-direction: column;
    padding: 30px 40px;
    .radio-button {
      margin: 7px 0;
      font-size: 16px;
    }
  }
}
</style>
