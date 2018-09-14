<template>
  <div class="box">
    <div class="title">Select today's result</div>
    <div class="radio-buttons">
      <el-radio class="radio-button" v-model="todaysStatus" label="done">Done</el-radio>
      <el-radio class="radio-button" v-model="todaysStatus" label="subgoalDone">Subgoal done</el-radio>
      <el-radio class="radio-button" v-model="todaysStatus" label="notDone">Not done</el-radio>
      <el-radio class="radio-button" v-model="todaysStatus" label="unchecked">I don't remember</el-radio>
    </div>
  </div>
</template>

<script>
import * as ACTIONS from "../../store/actionTypes.js";
export default {
  data() {
    return {
      todaysStatus: ''
    }
  },
  props: {
    goalId: Number,
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
    todaysStatus: function() {
      this.$store.dispatch(ACTIONS.SET_STATUS, {
        goalId: this.goalId,
        resultId: this.createResultId(),
        status: this.todaysStatus
      })
    }
  }
}
//ustawic watcha na todaysResult i po zmianie ma sie wykonac mutacja resulta konkretnego goal'a - ma go znalezc po id stworzonym z getDate() czyli dzis
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
    padding: 40px;
    .radio-button {
      margin: 7px 0;
      font-size: 16px;
    }
  }
}
</style>
