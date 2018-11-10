<template>
  <div class="radio-buttons">
    <el-radio class="radio-button" v-model="status" label="done">Done</el-radio>
    <el-radio class="radio-button" v-model="status" label="subgoalDone">Subgoal done</el-radio>
    <el-radio class="radio-button" v-model="status" label="notDone">Not done</el-radio>
    <el-radio class="radio-button" v-model="status" label="unchecked">I don't remember</el-radio>
  </div>
</template>

<script>
import * as ACTIONS from "../../store/actionTypes.js";
export default {
  data() {
    return {
      status: ''
    }
  },
  props: {
    goalId: Number,
    isInModal: Boolean,
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
    status: function() {
      if (!this.isInModal) {
        this.$store.dispatch(ACTIONS.SET_RESULT, {
          goalId: this.goalId,
          resultId: this.createResultId(),
          status: this.status
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.radio-buttons {
  display: flex;
  flex-direction: column;
  padding: 40px;
  .radio-button {
    margin: 7px 0;
    font-size: 16px;
  }
}
</style>
