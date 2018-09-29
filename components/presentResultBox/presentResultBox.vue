<template>
  <div class="box">
    <div class="title">Select today's result</div>
    <div class="radio-buttons">
      <el-radio class="radio-button" v-model="presentStatus" label="done">Done</el-radio>
      <el-radio class="radio-button" v-model="presentStatus" label="subgoalDone">Subgoal done</el-radio>
      <el-radio class="radio-button" v-model="presentStatus" label="notDone">Not done</el-radio>
      <el-radio class="radio-button" v-model="presentStatus" label="unchecked">I don't remember</el-radio>
    </div>
    <note-modal :visibility="noteModalVisibility" :goal-id="goalId" :result-id="createResultId()"/>
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
    noteModalVisibility() {
      return this.$store.getters["getNoteModalVisibility"];
    }
  },
  components: {
    NoteModal,
  },
  methods: {
    createResultId() {
      const today = new Date();
      let day, month, year;

      if (today.getDate().toString().length < 2) day = `0${today.getDate()}`;
      else day = today.getDate();

      if (today.getMonth().toString().length < 2) month = `0${today.getMonth() + 1}`;
      else month = today.getMonth() + 1;

      year = today.getFullYear();

      return `${day}-${month}-${year}`;
    }
  },
  watch: {
    presentStatus: function() {
      if (this.presentStatus === "notDone") this.$store.dispatch(ACTIONS.OPEN_NOTE_MODAL);
      this.$store.dispatch(ACTIONS.SET_STATUS, {
        goalId: this.goalId,
        resultId: this.createResultId(),
        status: this.presentStatus
      });
    }
  }
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
